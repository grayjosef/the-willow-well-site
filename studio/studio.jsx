/* global React */
const { useState, useEffect, useCallback, useMemo } = React;

/* ---------- API helper ---------- */
async function api(path, options = {}) {
  const res = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || `Request failed: ${res.status}`);
  }
  return res.json();
}

/* ---------- Stage badges ---------- */
const StageBadge = ({ stage }) => {
  const map = {
    discovery: ["st-badge-discovery", "Discovery"],
    proposal: ["st-badge-proposal", "Proposal"],
    active: ["st-badge-active", "Active"],
    complete: ["st-badge-complete", "Complete"],
  };
  const [cls, label] = map[stage] || map.discovery;
  return <span className={`st-badge ${cls}`}>{label}</span>;
};

/* ---------- Login ---------- */
const Login = ({ onIn }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await api("/api/studio/login", {
        method: "POST",
        body: JSON.stringify({ password }),
      });
      onIn();
    } catch (err) {
      setError("Incorrect password. Try again.");
    }
  };

  return (
    <div className="st-wrap">
      <form className="st-login" onSubmit={submit}>
        <h1>The Willow Well</h1>
        <p>Studio dashboard. Enter your password to continue.</p>
        {error && <div className="st-error">{error}</div>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

/* ---------- Traffic dashboard ---------- */
const TrafficPanel = () => {
  const [data, setData] = useState(null);
  const [days, setDays] = useState(30);
  const [error, setError] = useState("");

  useEffect(() => {
    setData(null);
    setError("");
    api(`/api/studio/traffic?days=${days}`)
      .then(setData)
      .catch((e) => setError(e.message));
  }, [days]);

  const maxDay = useMemo(() => {
    if (!data || !data.byDay.length) return 1;
    return Math.max(1, ...data.byDay.map((d) => d.views));
  }, [data]);

  return (
    <div className="st-panel">
      <div className="st-panel-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>Site traffic</span>
        <select
          className="st-select"
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
        >
          <option value={7}>Last 7 days</option>
          <option value={30}>Last 30 days</option>
          <option value={90}>Last 90 days</option>
        </select>
      </div>
      {error && <div className="st-error">{error}</div>}
      {!data && !error && <div className="st-empty">Loading traffic…</div>}
      {data && (
        <React.Fragment>
          <div className="st-cards" style={{ marginBottom: 20 }}>
            <div className="st-card">
              <div className="st-card-num">{data.totalViews}</div>
              <div className="st-card-label">Page views ({data.days}d)</div>
            </div>
            <div className="st-card">
              <div className="st-card-num">{data.byPath.length}</div>
              <div className="st-card-label">Pages visited</div>
            </div>
            <div className="st-card">
              <div className="st-card-num">{data.referrers.length}</div>
              <div className="st-card-label">Referring sites</div>
            </div>
          </div>
          <div className="st-subhead">Views per day</div>
          <div className="st-bars">
            {data.byDay.map((d) => (
              <div key={d.day} className="st-bar-col" title={`${d.day}: ${d.views}`}>
                <div
                  className="st-bar"
                  style={{ height: `${Math.max(2, (d.views / maxDay) * 100)}px` }}
                />
                <div className="st-bar-label">{d.day.slice(5)}</div>
              </div>
            ))}
          </div>
          <div className="st-cols2">
            <div>
              <div className="st-subhead">Top pages</div>
              {data.byPath.length === 0 && <div className="st-muted">No page views yet.</div>}
              {data.byPath.map((p) => (
                <div key={p.path} className="st-row">
                  <span className="st-mono">{p.path}</span>
                  <strong>{p.views}</strong>
                </div>
              ))}
            </div>
            <div>
              <div className="st-subhead">Top referrers</div>
              {data.referrers.length === 0 && <div className="st-muted">No referrers yet.</div>}
              {data.referrers.map((r) => (
                <div key={r.referrer} className="st-row">
                  <span className="st-mono st-trunc">{r.referrer}</span>
                  <strong>{r.views}</strong>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

/* ---------- Engagement form ---------- */
const EMPTY_FORM = {
  org: "", name: "", role: "", email: "", phone: "",
  orgType: "", teamSize: "", serviceInterest: "", timeline: "",
  location: "", format: "", budgetApproved: "", budgetRange: "",
  decisionMaker: "", prompt: "", success: "", notes: "", stage: "discovery",
};

const FIELD_DEFS = [
  ["org", "Organization"], ["name", "Contact name"], ["role", "Role"],
  ["email", "Email"], ["phone", "Phone"], ["orgType", "Organization type"],
  ["teamSize", "Team size"], ["serviceInterest", "Service interest"],
  ["timeline", "Timeline"], ["location", "Location"], ["format", "Format"],
  ["budgetApproved", "Budget approved"], ["budgetRange", "Budget range"],
  ["decisionMaker", "Decision maker"], ["prompt", "What prompted them"],
  ["success", "Success looks like"], ["notes", "Notes"],
];

const EngagementForm = ({ initial, onSave, onCancel, saving }) => {
  const [form, setForm] = useState(initial || EMPTY_FORM);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onSave(form); }}
      className="st-form"
    >
      <div className="st-form-grid">
        {FIELD_DEFS.map(([k, label]) => (
          <label key={k} className="st-field">
            <span>{label}</span>
            {k === "notes" || k === "prompt" || k === "success" ? (
              <textarea value={form[k]} onChange={set(k)} rows={2} />
            ) : (
              <input value={form[k]} onChange={set(k)} />
            )}
          </label>
        ))}
        <label className="st-field">
          <span>Stage</span>
          <select value={form.stage} onChange={set("stage")}>
            <option value="discovery">Discovery</option>
            <option value="proposal">Proposal</option>
            <option value="active">Active</option>
            <option value="complete">Complete</option>
          </select>
        </label>
      </div>
      <div className="st-form-actions">
        <button type="button" className="st-btn" onClick={onCancel}>Cancel</button>
        <button type="submit" className="st-btn st-btn-primary" disabled={saving}>
          {saving ? "Saving…" : "Save"}
        </button>
      </div>
    </form>
  );
};

/* ---------- Engagement detail ---------- */
const EngagementDetail = ({ engagement, onStage, onEdit, onDelete }) => {
  if (!engagement) {
    return (
      <div className="st-panel">
        <div className="st-empty">Select an engagement to see details.</div>
      </div>
    );
  }
  const fields = [
    ["Organization", engagement.org], ["Contact", engagement.name],
    ["Role", engagement.role], ["Email", engagement.email], ["Phone", engagement.phone],
    ["Organization type", engagement.orgType], ["Team size", engagement.teamSize],
    ["Service interest", engagement.serviceInterest], ["Timeline", engagement.timeline],
    ["Location", engagement.location], ["Format", engagement.format],
    ["Budget approved", engagement.budgetApproved], ["Budget range", engagement.budgetRange],
    ["Decision maker", engagement.decisionMaker], ["What prompted them", engagement.prompt],
    ["Success looks like", engagement.success], ["Notes", engagement.notes],
  ];
  return (
    <div className="st-panel">
      <div className="st-panel-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>{engagement.org || engagement.name} <StageBadge stage={engagement.stage} /></span>
        <span>
          <button className="st-btn st-btn-sm" onClick={() => onEdit(engagement)}>Edit</button>{" "}
          <button className="st-btn st-btn-sm st-btn-danger" onClick={() => onDelete(engagement)}>Delete</button>
        </span>
      </div>
      <div className="st-stage-row">
        <span className="st-muted">Move to:</span>
        {["discovery", "proposal", "active", "complete"].map((s) => (
          <button
            key={s}
            className={`st-btn st-btn-sm ${engagement.stage === s ? "st-btn-primary" : ""}`}
            onClick={() => onStage(engagement.id, s)}
          >
            {s[0].toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>
      {fields.map(([label, value]) =>
        value ? (
          <div key={label}>
            <div className="st-detail-label">{label}</div>
            <div className="st-detail-value">{value}</div>
          </div>
        ) : null
      )}
    </div>
  );
};

/* ---------- Main App ---------- */
const App = () => {
  const [signedIn, setSignedIn] = useState(null);
  const [configured, setConfigured] = useState(true);
  const [tab, setTab] = useState("pipeline");
  const [engagements, setEngagements] = useState([]);
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [calendarStatus, setCalendarStatus] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    api("/api/studio/session")
      .then((res) => {
        setSignedIn(res.signedIn);
        setConfigured(res.configured);
      })
      .catch(() => setSignedIn(false));
  }, []);

  const loadEngagements = useCallback(() => {
    api("/api/studio/engagements")
      .then((res) => setEngagements(res.engagements || []))
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
    if (signedIn) {
      loadEngagements();
      api("/api/studio/calendar-status").then(setCalendarStatus).catch(() => {});
    }
  }, [signedIn, loadEngagements]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return engagements;
    return engagements.filter((e) =>
      [e.name, e.org, e.email, e.serviceInterest]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q))
    );
  }, [engagements, query]);

  const stats = useMemo(() => {
    const by = (s) => engagements.filter((e) => e.stage === s).length;
    return {
      discovery: by("discovery"), proposal: by("proposal"),
      active: by("active"), total: engagements.length,
    };
  }, [engagements]);

  const signOut = async () => {
    await api("/api/studio/session", { method: "POST" }).catch(() => {});
    setSignedIn(false);
    setSelected(null);
  };

  const saveEngagement = async (form) => {
    setSaving(true);
    setError("");
    try {
      if (editing) {
        await api(`/api/studio/engagements/${editing.id}`, {
          method: "PATCH",
          body: JSON.stringify(form),
        });
      } else {
        await api("/api/studio/engagements", {
          method: "POST",
          body: JSON.stringify(form),
        });
      }
      setShowForm(false);
      setEditing(null);
      loadEngagements();
    } catch (e) {
      setError(e.message);
    } finally {
      setSaving(false);
    }
  };

  const moveStage = async (id, stage) => {
    try {
      await api(`/api/studio/engagements/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ stage }),
      });
      loadEngagements();
    } catch (e) {
      setError(e.message);
    }
  };

  const deleteEngagement = async (eng) => {
    if (!window.confirm(`Delete ${eng.org || eng.name}? This cannot be undone.`)) return;
    try {
      await api(`/api/studio/engagements/${eng.id}`, { method: "DELETE" });
      setSelected(null);
      loadEngagements();
    } catch (e) {
      setError(e.message);
    }
  };

  if (signedIn === null)
    return <div className="st-wrap"><div className="st-empty">Loading…</div></div>;

  if (!configured) {
    return (
      <div className="st-wrap">
        <div className="st-login">
          <h1>Not set up yet</h1>
          <div className="st-banner">
            Add <code>STUDIO_PASSWORD</code> and <code>STUDIO_SESSION_SECRET</code> to the
            Cloudflare environment, then redeploy.
          </div>
        </div>
      </div>
    );
  }

  if (!signedIn) return <Login onIn={() => setSignedIn(true)} />;

  const selectedEngagement = engagements.find((e) => e.id === selected);

  return (
    <React.Fragment>
      <div className="st-top">
        <div className="st-wrap st-top-inner">
          <div className="st-brand">
            The Willow Well
            <small>Studio Dashboard</small>
          </div>
          <nav className="st-tabs">
            <button
              className={tab === "pipeline" ? "st-tab active" : "st-tab"}
              onClick={() => setTab("pipeline")}
            >
              Pipeline
            </button>
            <button
              className={tab === "traffic" ? "st-tab active" : "st-tab"}
              onClick={() => setTab("traffic")}
            >
              Traffic
            </button>
          </nav>
          <div style={{ flex: 1 }} />
          <button className="st-btn" type="button" onClick={signOut}>Sign out</button>
        </div>
      </div>

      <div className="st-wrap st-main">
        {error && <div className="st-error">{error}</div>}

        {calendarStatus && !calendarStatus.connected && tab === "pipeline" && (
          <div className="st-banner">
            Calendar not connected. Discovery calls booked through Google Calendar won't
            appear here automatically. Add engagements manually with the "Add" button,
            or connect <code>GOOGLE_CALENDAR_ID</code> in the Cloudflare environment.
          </div>
        )}

        {tab === "traffic" && <TrafficPanel />}

        {tab === "pipeline" && (
          <React.Fragment>
            <div className="st-cards">
              <div className="st-card">
                <div className="st-card-num">{stats.discovery}</div>
                <div className="st-card-label">Discovery calls</div>
              </div>
              <div className="st-card">
                <div className="st-card-num">{stats.proposal}</div>
                <div className="st-card-label">Proposals out</div>
              </div>
              <div className="st-card">
                <div className="st-card-num">{stats.active}</div>
                <div className="st-card-label">Active engagements</div>
              </div>
              <div className="st-card">
                <div className="st-card-num">{stats.total}</div>
                <div className="st-card-label">Total pipeline</div>
              </div>
            </div>

            {showForm ? (
              <div className="st-panel">
                <div className="st-panel-head">{editing ? "Edit engagement" : "New engagement"}</div>
                <EngagementForm
                  initial={editing}
                  saving={saving}
                  onSave={saveEngagement}
                  onCancel={() => { setShowForm(false); setEditing(null); }}
                />
              </div>
            ) : (
              <div className="st-toolbar">
                <input
                  className="st-search"
                  placeholder="Search engagements…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button
                  className="st-btn st-btn-primary"
                  onClick={() => { setEditing(null); setShowForm(true); }}
                >
                  + Add engagement
                </button>
              </div>
            )}

            {!showForm && (
              <div className="st-cols">
                <div className="st-panel">
                  <div className="st-panel-head">Pipeline</div>
                  {filtered.length === 0 && (
                    <div className="st-empty">{query ? "Nothing matches." : "No engagements yet. Add your first one above."}</div>
                  )}
                  {filtered.map((e) => (
                    <button
                      key={e.id}
                      type="button"
                      className={`st-row-btn ${selected === e.id ? "selected" : ""}`}
                      onClick={() => setSelected(e.id)}
                    >
                      <div>
                        <div style={{ fontWeight: 600 }}>{e.org || e.name}</div>
                        <div style={{ fontSize: 13, color: "#5A7A7A" }}>{e.name} · {e.serviceInterest}</div>
                      </div>
                      <StageBadge stage={e.stage} />
                    </button>
                  ))}
                </div>
                <EngagementDetail
                  engagement={selectedEngagement}
                  onStage={moveStage}
                  onEdit={(eng) => { setEditing(eng); setShowForm(true); }}
                  onDelete={deleteEngagement}
                />
              </div>
            )}
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
