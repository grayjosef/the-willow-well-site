/**
 * Cloudflare Worker entry for The Willow Well.
 * Handles root → www redirect and /api/studio/* backend routes.
 */

const STUDIO_PASSWORD = () => STUDIO_PASSWORD_ENV;
const SESSION_SECRET = () => STUDIO_SESSION_SECRET_ENV;

// In production these come from Cloudflare environment variables
// For now, structured for easy wiring

async function handleStudioApi(request, env) {
  const url = new URL(request.url);
  const path = url.pathname;

  const json = (data, status = 200) =>
    new Response(JSON.stringify(data), {
      status,
      headers: { "Content-Type": "application/json" },
    });

  // Session check
  if (path === "/api/studio/session" && request.method === "GET") {
    const session = getSession(request, env);
    return json({
      signedIn: !!session,
      configured: !!(env.STUDIO_PASSWORD && env.STUDIO_SESSION_SECRET),
    });
  }

  // Login
  if (path === "/api/studio/login" && request.method === "POST") {
    const { password } = await request.json().catch(() => ({}));
    if (!env.STUDIO_PASSWORD) {
      return json({ error: "Studio not configured" }, 500);
    }
    if (password !== env.STUDIO_PASSWORD) {
      return json({ error: "Incorrect password" }, 401);
    }
    const token = await createSession(env);
    return json(
      { ok: true },
      200,
      { "Set-Cookie": `ww_session=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=2592000` }
    );
  }

  // Logout
  if (path === "/api/studio/session" && request.method === "POST") {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": "ww_session=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0",
      },
    });
  }

  // Require auth for everything below
  const session = getSession(request, env);
  if (!session) {
    return json({ error: "Not authenticated" }, 401);
  }

  // Engagements list
  if (path === "/api/studio/engagements" && request.method === "GET") {
    // TODO: Connect to D1 or KV for persistent storage
    // For now returns empty; wire up when env is configured
    return json({ engagements: [], stub: true });
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

function getSession(request, env) {
  const cookie = request.headers.get("Cookie") || "";
  const match = cookie.match(/ww_session=([^;]+)/);
  if (!match || !env.STUDIO_SESSION_SECRET) return null;
  // TODO: Verify HMAC signature
  return match[1] ? { valid: true } : null;
}

async function createSession(env) {
  // TODO: Create signed HMAC token
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Root → www redirect
    if (url.hostname === "thewillowwellco.com") {
      url.hostname = "www.thewillowwellco.com";
      return Response.redirect(url.toString(), 301);
    }

    // Studio API routes
    if (url.pathname.startsWith("/api/studio/")) {
      return handleStudioApi(request, env);
    }

    // Everything else: serve static assets (handled by Cloudflare)
    return env.ASSETS.fetch(request);
  },
};
