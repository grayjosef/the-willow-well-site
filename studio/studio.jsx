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

/* ---------- Engagement detail ---------- */
const EngagementDetail = ({ engagement }) => {
  if (!engagement) {
    return (
      <div className="st-panel">
        <div className="st-empty">Select an engagement to see details.</div>
      </div>
    );
  }

  const fields = [
    ["Organization", engagement.org],
    ["Contact", engagement.name],
    ["Role", engagement.role],
    ["Email", engagement.email],
    ["Phone", engagement.phone],
    ["Organization type", engagement.orgType],
    ["Team size", engagement.teamSize],
    ["Service interest", engagement.serviceInterest],
    ["Timeline", engagement.timeline],
    ["Location", engagement.location],
    ["Format", engagement.format],
    ["Budget approved", engagement.budgetApproved],
    ["Budget range", engagement.budgetRange],
    ["Decision maker", engagement.decisionMaker],
    ["What prompted them", engagement.prompt],
    ["Success looks like", engagement.success],
    ["Notes", engagement.notes],
  ];

  return (
    <div className="st-panel">
      <div className="st-panel-head">
        {engagement.org || engagement.name} <StageBadge stage={engagement.stage} />
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
  const [engagements, setEngagements] = useState([]);
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [calendarStatus, setCalendarStatus] = useState(null);

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
      api("/api/studio/calendar-status")
        .then(setCalendarStatus)
        .catch(() => {});
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
      discovery: by("discovery"),
      proposal: by("proposal"),
      active: by("active"),
      total: engagements.length,
    };
  }, [engagements]);

  const signOut = async () => {
    await api("/api/studio/session", { method: "POST" }).catch(() => {});
    setSignedIn(false);
    setSelected(null);
  };

  if (signedIn === null) return <div className="st-wrap"><div className="st-empty">Loading…</div></div>;

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
          <input
            className="st-search"
            placeholder="Search engagements…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div style={{ flex: 1 }} />
          <button className="st-btn" type="button" onClick={signOut}>Sign out</button>
        </div>
      </div>

      <div className="st-wrap st-main">
        {error && <div className="st-error">{error}</div>}

        {calendarStatus && !calendarStatus.connected && (
          <div className="st-banner">
            Calendar not connected. Booked discovery calls won't appear on your calendars
            until you connect Google Calendar in the Cloudflare environment.
          </div>
        )}

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

        <div className="st-cols">
          <div className="st-panel">
            <div className="st-panel-head">Pipeline</div>
            {filtered.length === 0 && (
              <div className="st-empty">{query ? "Nothing matches." : "No engagements yet."}</div>
            )}
            {filtered.map((e) => (
              <button
                key={e.id}
                type="button"
                className="st-row"
                style={{ width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer" }}
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
          <EngagementDetail engagement={selectedEngagement} />
        </div>
      </div>
    </React.Fragment>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
