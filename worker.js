/**
 * Cloudflare Worker entry for The Willow Well.
 * Handles root -> www redirect, /api/studio/* backend routes,
 * page-view analytics, and engagement persistence via KV (WW_DATA).
 */

// ---------- Session helpers (HMAC-signed) ----------

async function createSession(env) {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  const token = Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
  const sig = await hmacSign(token, env.STUDIO_SESSION_SECRET);
  return `${token}.${sig}`;
}

async function verifySession(token, env) {
  if (!token || !env.STUDIO_SESSION_SECRET) return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;
  const [raw, sig] = parts;
  const expected = await hmacSign(raw, env.STUDIO_SESSION_SECRET);
  return timingSafeEqual(sig, expected);
}

async function hmacSign(data, secret) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(data));
  return Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i++) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return out === 0;
}

function getSessionToken(request) {
  const cookie = request.headers.get("Cookie") || "";
  const match = cookie.match(/ww_session=([^;]+)/);
  return match ? match[1] : null;
}

// ---------- KV helpers ----------

const kv = (env) => env.WW_DATA;

async function getEngagementIds(env) {
  const raw = await kv(env).get("eng:index");
  return raw ? JSON.parse(raw) : [];
}

async function setEngagementIds(env, ids) {
  await kv(env).put("eng:index", JSON.stringify(ids));
}

function dayKey(d = new Date()) {
  return d.toISOString().slice(0, 10);
}

// ---------- Main API handler ----------

async function handleStudioApi(request, env) {
  const url = new URL(request.url);
  const path = url.pathname;

  const json = (data, status = 200, extraHeaders = {}) =>
    new Response(JSON.stringify(data), {
      status,
      headers: { "Content-Type": "application/json", ...extraHeaders },
    });

  // Session check (public)
  if (path === "/api/studio/session" && request.method === "GET") {
    const token = getSessionToken(request);
    const valid = token ? await verifySession(token, env) : false;
    return json({
      signedIn: valid,
      configured: !!(env.STUDIO_PASSWORD && env.STUDIO_SESSION_SECRET),
    });
  }

  // Login (public)
  if (path === "/api/studio/login" && request.method === "POST") {
    const { password } = await request.json().catch(() => ({}));
    if (!env.STUDIO_PASSWORD) {
      return json({ error: "Studio not configured" }, 500);
    }
    if (password !== env.STUDIO_PASSWORD) {
      return json({ error: "Incorrect password" }, 401);
    }
    const token = await createSession(env);
    return json({ ok: true }, 200, {
      "Set-Cookie": `ww_session=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=2592000`,
    });
  }

  // Logout (public)
  if (path === "/api/studio/session" && request.method === "POST") {
    return json({ ok: true }, 200, {
      "Set-Cookie": "ww_session=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0",
    });
  }

  // Page view tracking (public, no auth; never breaks the page)
  if (path === "/api/track" && request.method === "POST") {
    try {
      const { path: pagePath, referrer } = await request.json().catch(() => ({}));
      if (kv(env) && pagePath) {
        const key = `pv:${dayKey()}`;
        const raw = await kv(env).get(key);
        const agg = raw ? JSON.parse(raw) : { total: 0, paths: {}, referrers: {} };
        const p = String(pagePath).slice(0, 200);
        const r = String(referrer || "").slice(0, 200);
        agg.total += 1;
        agg.paths[p] = (agg.paths[p] || 0) + 1;
        if (r) agg.referrers[r] = (agg.referrers[r] || 0) + 1;
        await kv(env).put(key, JSON.stringify(agg), { expirationTtl: 90 * 24 * 3600 });
      }
    } catch (e) {
      // analytics must never fail the request
    }
    return json({ ok: true });
  }

  // Require auth for everything below
  const token = getSessionToken(request);
  const authed = token ? await verifySession(token, env) : false;
  if (!authed) {
    return json({ error: "Not authenticated" }, 401);
  }

  if (!kv(env)) {
    return json({ error: "Storage not configured (WW_DATA)" }, 500);
  }

  // Engagements list
  if (path === "/api/studio/engagements" && request.method === "GET") {
    const ids = await getEngagementIds(env);
    const out = [];
    for (const id of ids) {
      const raw = await kv(env).get(`eng:${id}`);
      if (raw) out.push(JSON.parse(raw));
    }
    out.sort((a, b) => (b.updated_at || 0) - (a.updated_at || 0));
    return json({ engagements: out });
  }

  // Create engagement
  if (path === "/api/studio/engagements" && request.method === "POST") {
    const body = await request.json().catch(() => ({}));
    const id = crypto.randomUUID();
    const now = Date.now();
    const rec = {
      id,
      org: body.org || "", name: body.name || "", role: body.role || "",
      email: body.email || "", phone: body.phone || "",
      orgType: body.orgType || "", teamSize: body.teamSize || "",
      serviceInterest: body.serviceInterest || "", timeline: body.timeline || "",
      location: body.location || "", format: body.format || "",
      budgetApproved: body.budgetApproved || "", budgetRange: body.budgetRange || "",
      decisionMaker: body.decisionMaker || "", prompt: body.prompt || "",
      success: body.success || "", notes: body.notes || "",
      stage: body.stage || "discovery",
      created_at: now, updated_at: now,
    };
    await kv(env).put(`eng:${id}`, JSON.stringify(rec));
    const ids = await getEngagementIds(env);
    ids.unshift(id);
    await setEngagementIds(env, ids);
    return json({ ok: true, id });
  }

  // Update engagement (stage or fields)
  if (path.startsWith("/api/studio/engagements/") && request.method === "PATCH") {
    const id = path.split("/").pop();
    const raw = await kv(env).get(`eng:${id}`);
    if (!raw) return json({ error: "Not found" }, 404);
    const rec = JSON.parse(raw);
    const body = await request.json().catch(() => ({}));
    const allowed = ["org","name","role","email","phone","orgType","teamSize",
      "serviceInterest","timeline","location","format","budgetApproved",
      "budgetRange","decisionMaker","prompt","success","notes","stage"];
    for (const k of allowed) {
      if (body[k] !== undefined) rec[k] = body[k];
    }
    if (body.stage && !["discovery","proposal","active","complete"].includes(body.stage)) {
      return json({ error: "Invalid stage" }, 400);
    }
    rec.updated_at = Date.now();
    await kv(env).put(`eng:${id}`, JSON.stringify(rec));
    return json({ ok: true, engagement: rec });
  }

  // Delete engagement
  if (path.startsWith("/api/studio/engagements/") && request.method === "DELETE") {
    const id = path.split("/").pop();
    await kv(env).delete(`eng:${id}`);
    const ids = (await getEngagementIds(env)).filter((x) => x !== id);
    await setEngagementIds(env, ids);
    return json({ ok: true });
  }

  // Traffic analytics
  if (path === "/api/studio/traffic" && request.method === "GET") {
    const days = Math.min(parseInt(url.searchParams.get("days") || "30", 10) || 30, 90);
    const byDay = [];
    const pathTotals = {};
    const refTotals = {};
    let totalViews = 0;
    const now = new Date();
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const key = `pv:${dayKey(d)}`;
      const raw = await kv(env).get(key);
      const agg = raw ? JSON.parse(raw) : { total: 0, paths: {}, referrers: {} };
      byDay.push({ day: dayKey(d), views: agg.total || 0 });
      totalViews += agg.total || 0;
      for (const [p, c] of Object.entries(agg.paths || {})) {
        pathTotals[p] = (pathTotals[p] || 0) + c;
      }
      for (const [r, c] of Object.entries(agg.referrers || {})) {
        refTotals[r] = (refTotals[r] || 0) + c;
      }
    }
    const byPath = Object.entries(pathTotals)
      .map(([p, views]) => ({ path: p, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 20);
    const referrers = Object.entries(refTotals)
      .map(([r, views]) => ({ referrer: r, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);
    return json({ totalViews, byPath, byDay, referrers, days });
  }

  // Calendar status
  if (path === "/api/studio/calendar-status" && request.method === "GET") {
    return json({
      connected: !!(env.GOOGLE_CALENDAR_ID),
      calendarId: env.GOOGLE_CALENDAR_ID || null,
    });
  }

  return json({ error: "Not found" }, 404);
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Root -> www redirect
    if (url.hostname === "thewillowwellco.com") {
      url.hostname = "www.thewillowwellco.com";
      return Response.redirect(url.toString(), 301);
    }

    // Studio API routes + tracking
    if (url.pathname.startsWith("/api/studio/") || url.pathname === "/api/track") {
      return handleStudioApi(request, env);
    }

    // Everything else: serve static assets
    return env.ASSETS.fetch(request);
  },
};
