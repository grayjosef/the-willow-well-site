import React from "react";

/* ============================================================
   The Willow Well — Cohesive Mashup
   - HERO: Editorial Quiet layout (asymmetric grid + circular stamp +
     4-column footer row + fadeUp cascade), painted in the Cinematic
     dark palette with Fraunces ultralight + Instrument Serif italics.
   - METHOD: Cinematic dark band (dotted bronze arc, glass numbered
     markers, four movements).
   - SERVICES: Editorial Quiet 3-column hairline-divided card grid
     ("i. / ii. / iii.") rendered with Cinematic typography &
     italic accents.
   - PROBLEM / FIT / PROOF / ABOUT / BOOK / FOOTER: Cinematic Atmosphere.
   ============================================================ */

const NAV_ITEMS = [
  { id: "method", label: "Method" },
  { id: "services", label: "Engagements" },
  { id: "fit", label: "Fit" },
  { id: "about", label: "Lee" },
  { id: "book", label: "Book" },
];

const ARC = [
  { n: "01", lab: "Movement One",   title: "Arrive",   italic: false, body: "Regulate the room. Nervous system first — before any agenda item is touched." },
  { n: "02", lab: "Movement Two",   title: "Move",     italic: true,  body: "Somatic practice that shifts state — breath, body, intentional movement." },
  { n: "03", lab: "Movement Three", title: "Excavate", italic: false, body: "Strategic clarity work — values, patterns, what's actually driving behavior." },
  { n: "04", lab: "Movement Four",  title: "Commit",   italic: true,  body: "Leave with a real tool and a real intention — not inspiration that evaporates." },
];

const SERVICES = [
  {
    n: "i.", title: "Workshops", italic: false,
    fmt: "Half-day · Full-day · On-site",
    body: "Half-day and full-day intensives for corporate teams, accelerator cohorts, and organizational off-sites. Every session follows the arc and delivers a tool participants take back to work the same day.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="4" y="6" width="24" height="20" rx="1" />
        <path d="M4 12 L28 12" />
        <path d="M9 18 L23 18 M9 22 L19 22" />
      </svg>
    ),
  },
  {
    n: "ii.", title: "Cohort", italic: true, suffix: " Programs",
    fmt: "6 months · Twice weekly",
    body: "Ongoing programs that build capacity over time. The Rooted Practice at Kate's Korner Learning Center is the model: a six-month staff wellness cohort with measurable behavioral change.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="16" cy="16" r="12" />
        <path d="M4 16 L28 16 M16 4 Q 22 16 16 28 Q 10 16 16 4" />
      </svg>
    ),
  },
  {
    n: "iii.", title: "Retreats", italic: false,
    fmt: "Half-day · Two-day · Immersive",
    body: "Half-day to two-day immersive experiences for teams ready to do the deeper work. Breathwork, somatic movement, values clarification, strategic wayfinding, closing ceremony.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M4 26 L12 14 L18 20 L28 6" />
        <path d="M4 26 L28 26" />
        <circle cx="22" cy="10" r="2" fill="currentColor" />
      </svg>
    ),
  },
];

const FIT = [
  { lab: "Audience · 01", title: "High-growth", italicTitle: "companies.", body: "Mid-to-large teams where People & Culture leaders watch their best people erode under sustained pressure — and where retention is now a performance problem." },
  { lab: "Audience · 02", title: "ESOs &", italicTitle: "accelerator", suffix: " programs.", body: "Founder cohorts who need real tools for sustainable performance — not another panel on burnout. Lee is credible inside the founder ecosystem; this lands." },
  { lab: "Audience · 03", title: "Mission-driven", italicTitle: "nonprofits.", body: "Organizations carrying compassion fatigue at the staff level. The work translates: capacity, clarity, sustainability — without the corporate framing." },
];

const CREDENTIALS = [
  { l: "Founder",     v: "The Willow Well" },
  { l: "Assoc. Dir.", v: "Knox St Studios" },
  { l: "Yoga",        v: "200 RYT Certified" },
  { l: "Breathwork",  v: "Certified Facilitator" },
  { l: "Coaching",    v: "Martha Beck Wayfinder" },
  { l: "Fellow",      v: "Goodmon · Leadership Triangle" },
];

const HERO_FOOTROW = [
  { lab: "01 / Built for", base: "High-growth ", em: "companies" },
  { lab: "02 / Built for", base: "Accelerator ", em: "cohorts" },
  { lab: "03 / Built for", base: "Mission-driven ", em: "nonprofits" },
  { lab: "Engagements",    base: "Workshops · Cohorts · ", em: "Retreats" },
];

/* ─────────────────────────────────────────────────────────────
   Atoms
   ───────────────────────────────────────────────────────────── */

function Mark({ className = "h-7 w-7" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="The Willow Well mark"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Compass ring */}
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.75" />
      {/* Cardinal letters */}
      <text x="50" y="11" textAnchor="middle" fontFamily="var(--font-display, Georgia, serif)" fontSize="4" fontWeight="600" fill="currentColor" stroke="none" letterSpacing="0.25">N</text>
      <text x="90.5" y="51.25" textAnchor="middle" fontFamily="var(--font-display, Georgia, serif)" fontSize="4" fontWeight="600" fill="currentColor" stroke="none" letterSpacing="0.25">E</text>
      <text x="50" y="91.75" textAnchor="middle" fontFamily="var(--font-display, Georgia, serif)" fontSize="4" fontWeight="600" fill="currentColor" stroke="none" letterSpacing="0.25">S</text>
      <text x="9.5" y="51.25" textAnchor="middle" fontFamily="var(--font-display, Georgia, serif)" fontSize="4" fontWeight="600" fill="currentColor" stroke="none" letterSpacing="0.25">W</text>
      {/* North arrow (filled) */}
      <polygon points="50,15 47.75,20.5 52.25,20.5" fill="currentColor" stroke="none" />
      {/* Spine, S tick, arch, hanging stems */}
      <path d="M50 17 L50 83" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
      <path d="M48.25 84.5 L51.75 84.5" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
      <path d="M32.5 68.75 C32 45 34.5 32.5 42.5 27.5 C47 24.75 53 24.75 57.5 27.5 C65.5 32.5 68 45 67.5 68.75" fill="none" stroke="currentColor" strokeWidth="0.65" strokeLinecap="round" />
      <path d="M47.5 30.5 Q47.4 51.81 47.25 69.25" fill="none" stroke="currentColor" strokeWidth="0.35" strokeLinecap="round" />
      <path d="M52.5 30.5 Q52.6 51.81 52.75 69.25" fill="none" stroke="currentColor" strokeWidth="0.35" strokeLinecap="round" />
      <path d="M43 37.5 Q42.9 55.38 42.75 70" fill="none" stroke="currentColor" strokeWidth="0.33" strokeLinecap="round" />
      <path d="M57 37.5 Q57.1 55.38 57.25 70" fill="none" stroke="currentColor" strokeWidth="0.33" strokeLinecap="round" />
      <path d="M38 47.5 Q37.9 59.88 37.75 70" fill="none" stroke="currentColor" strokeWidth="0.33" strokeLinecap="round" />
      <path d="M62 47.5 Q62.1 59.88 62.25 70" fill="none" stroke="currentColor" strokeWidth="0.33" strokeLinecap="round" />
      <path d="M34.5 58.75 Q34.5 64.94 34.5 70" fill="none" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" />
      <path d="M65.5 58.75 Q65.5 64.94 65.5 70" fill="none" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" />
      {/* Cascading willow leaves */}
      <path d="M45.33 41.24 Q45.89 39.6 47.46 38.87 Q46.9 40.51 45.33 41.24 Z" fill="currentColor" stroke="none" />
      <path d="M49.64 45.68 Q48.01 44.92 47.43 43.23 Q49.06 43.98 49.64 45.68 Z" fill="currentColor" stroke="none" />
      <path d="M45.13 50.03 Q45.72 48.27 47.41 47.49 Q46.81 49.25 45.13 50.03 Z" fill="currentColor" stroke="none" />
      <path d="M49.74 54.29 Q48 53.49 47.38 51.67 Q49.12 52.48 49.74 54.29 Z" fill="currentColor" stroke="none" />
      <path d="M44.92 58.46 Q45.56 56.59 47.35 55.76 Q46.72 57.63 44.92 58.46 Z" fill="currentColor" stroke="none" />
      <path d="M49.83 62.55 Q47.98 61.69 47.33 59.76 Q49.18 60.62 49.83 62.55 Z" fill="currentColor" stroke="none" />
      <path d="M44.71 66.54 Q45.39 64.55 47.3 63.67 Q46.62 65.66 44.71 66.54 Z" fill="currentColor" stroke="none" />
      <path d="M49.92 70.45 Q47.96 69.54 47.26 67.5 Q49.23 68.4 49.92 70.45 Z" fill="currentColor" stroke="none" />
      <path d="M47.25 72.93 Q46.46 71.09 47.25 69.25 Q48.04 71.09 47.25 72.93 Z" fill="currentColor" stroke="none" />
      <path d="M54.67 41.24 Q53.1 40.51 52.54 38.87 Q54.11 39.6 54.67 41.24 Z" fill="currentColor" stroke="none" />
      <path d="M50.36 45.68 Q50.94 43.98 52.57 43.23 Q51.99 44.92 50.36 45.68 Z" fill="currentColor" stroke="none" />
      <path d="M54.87 50.03 Q53.19 49.25 52.59 47.49 Q54.28 48.27 54.87 50.03 Z" fill="currentColor" stroke="none" />
      <path d="M50.26 54.29 Q50.88 52.48 52.62 51.67 Q52 53.49 50.26 54.29 Z" fill="currentColor" stroke="none" />
      <path d="M55.08 58.46 Q53.28 57.63 52.65 55.76 Q54.44 56.59 55.08 58.46 Z" fill="currentColor" stroke="none" />
      <path d="M50.17 62.55 Q50.82 60.62 52.67 59.76 Q52.02 61.69 50.17 62.55 Z" fill="currentColor" stroke="none" />
      <path d="M55.29 66.54 Q53.38 65.66 52.7 63.67 Q54.61 64.55 55.29 66.54 Z" fill="currentColor" stroke="none" />
      <path d="M50.08 70.45 Q50.77 68.4 52.74 67.5 Q52.04 69.54 50.08 70.45 Z" fill="currentColor" stroke="none" />
      <path d="M52.75 72.93 Q51.96 71.09 52.75 69.25 Q53.54 71.09 52.75 72.93 Z" fill="currentColor" stroke="none" />
      <path d="M40.83 46.89 Q41.39 45.25 42.96 44.52 Q42.4 46.16 40.83 46.89 Z" fill="currentColor" stroke="none" />
      <path d="M45.16 52.1 Q43.51 51.34 42.92 49.61 Q44.57 50.38 45.16 52.1 Z" fill="currentColor" stroke="none" />
      <path d="M40.55 57.16 Q41.16 55.36 42.89 54.56 Q42.27 56.36 40.55 57.16 Z" fill="currentColor" stroke="none" />
      <path d="M45.3 62.08 Q43.49 61.25 42.85 59.36 Q44.65 60.2 45.3 62.08 Z" fill="currentColor" stroke="none" />
      <path d="M40.26 66.86 Q40.92 64.89 42.81 64.02 Q42.14 65.98 40.26 66.86 Z" fill="currentColor" stroke="none" />
      <path d="M45.42 71.48 Q43.46 70.58 42.76 68.53 Q44.73 69.44 45.42 71.48 Z" fill="currentColor" stroke="none" />
      <path d="M42.75 73.68 Q41.96 71.84 42.75 70 Q43.54 71.84 42.75 73.68 Z" fill="currentColor" stroke="none" />
      <path d="M59.17 46.89 Q57.6 46.16 57.04 44.52 Q58.61 45.25 59.17 46.89 Z" fill="currentColor" stroke="none" />
      <path d="M54.84 52.1 Q55.43 50.38 57.08 49.61 Q56.49 51.34 54.84 52.1 Z" fill="currentColor" stroke="none" />
      <path d="M59.45 57.16 Q57.73 56.36 57.11 54.56 Q58.84 55.36 59.45 57.16 Z" fill="currentColor" stroke="none" />
      <path d="M54.7 62.08 Q55.35 60.2 57.15 59.36 Q56.51 61.25 54.7 62.08 Z" fill="currentColor" stroke="none" />
      <path d="M59.74 66.86 Q57.86 65.98 57.19 64.02 Q59.08 64.89 59.74 66.86 Z" fill="currentColor" stroke="none" />
      <path d="M54.58 71.48 Q55.27 69.44 57.24 68.53 Q56.54 70.58 54.58 71.48 Z" fill="currentColor" stroke="none" />
      <path d="M57.25 73.68 Q56.46 71.84 57.25 70 Q58.04 71.84 57.25 73.68 Z" fill="currentColor" stroke="none" />
      <path d="M35.83 54.73 Q36.39 53.09 37.96 52.36 Q37.4 54 35.83 54.73 Z" fill="currentColor" stroke="none" />
      <path d="M40.18 59.27 Q38.51 58.49 37.91 56.75 Q39.58 57.52 40.18 59.27 Z" fill="currentColor" stroke="none" />
      <path d="M35.47 63.65 Q36.1 61.8 37.87 60.99 Q37.24 62.83 35.47 63.65 Z" fill="currentColor" stroke="none" />
      <path d="M40.34 67.87 Q38.48 67.01 37.82 65.06 Q39.68 65.93 40.34 67.87 Z" fill="currentColor" stroke="none" />
      <path d="M35.11 71.93 Q35.8 69.89 37.76 68.98 Q37.07 71.03 35.11 71.93 Z" fill="currentColor" stroke="none" />
      <path d="M37.75 73.68 Q36.96 71.84 37.75 70 Q38.54 71.84 37.75 73.68 Z" fill="currentColor" stroke="none" />
      <path d="M64.17 54.73 Q62.6 54 62.04 52.36 Q63.61 53.09 64.17 54.73 Z" fill="currentColor" stroke="none" />
      <path d="M59.82 59.27 Q60.42 57.52 62.09 56.75 Q61.49 58.49 59.82 59.27 Z" fill="currentColor" stroke="none" />
      <path d="M64.53 63.65 Q62.76 62.83 62.13 60.99 Q63.9 61.8 64.53 63.65 Z" fill="currentColor" stroke="none" />
      <path d="M59.66 67.87 Q60.32 65.93 62.18 65.06 Q61.52 67.01 59.66 67.87 Z" fill="currentColor" stroke="none" />
      <path d="M64.89 71.93 Q62.93 71.03 62.24 68.98 Q64.2 69.89 64.89 71.93 Z" fill="currentColor" stroke="none" />
      <path d="M62.25 73.68 Q61.46 71.84 62.25 70 Q63.04 71.84 62.25 73.68 Z" fill="currentColor" stroke="none" />
      <path d="M32.37 63.55 Q32.93 61.91 34.5 61.18 Q33.94 62.82 32.37 63.55 Z" fill="currentColor" stroke="none" />
      <path d="M36.89 68.15 Q35.13 67.34 34.5 65.49 Q36.27 66.31 36.89 68.15 Z" fill="currentColor" stroke="none" />
      <path d="M31.84 72.44 Q32.54 70.4 34.5 69.49 Q33.8 71.54 31.84 72.44 Z" fill="currentColor" stroke="none" />
      <path d="M34.5 73.68 Q33.71 71.84 34.5 70 Q35.29 71.84 34.5 73.68 Z" fill="currentColor" stroke="none" />
      <path d="M67.63 63.55 Q66.06 62.82 65.5 61.18 Q67.07 61.91 67.63 63.55 Z" fill="currentColor" stroke="none" />
      <path d="M63.11 68.15 Q63.73 66.31 65.5 65.49 Q64.87 67.34 63.11 68.15 Z" fill="currentColor" stroke="none" />
      <path d="M68.16 72.44 Q66.2 71.54 65.5 69.49 Q67.46 70.4 68.16 72.44 Z" fill="currentColor" stroke="none" />
      <path d="M65.5 73.68 Q64.71 71.84 65.5 70 Q66.29 71.84 65.5 73.68 Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Eyebrow({ children, tone = "bronze", flank = false }) {
  const color = tone === "bronze" ? "text-[var(--c-bronze)]" : tone === "willow" ? "text-[var(--c-willow)]" : "text-[var(--c-sea-text)]";
  return (
    <p className={`font-mono text-[10px] uppercase tracking-[0.28em] ${color} inline-flex items-center gap-3.5`} style={{ fontFamily: "var(--font-mono)" }}>
      {flank && <span aria-hidden className="inline-block h-px w-8 bg-[var(--c-bronze)]" />}
      <span>{children}</span>
      {flank && <span aria-hidden className="inline-block h-px w-8 bg-[var(--c-bronze)]" />}
    </p>
  );
}

function Italic({ children }) {
  return <span className="italic" style={{ fontFamily: "var(--font-italic)", fontWeight: 400 }}>{children}</span>;
}

function PrimaryCTA({ href, children, variant = "bronze", external = false }) {
  const base = "group inline-flex items-center justify-center gap-3.5 px-7 py-[18px] text-[12px] font-medium uppercase tracking-[0.16em] transition-all duration-300";
  const styles = variant === "bronze"
    ? "bg-[var(--c-bronze)] text-[var(--c-ink-deep)] hover:bg-[var(--c-rainfog)]"
    : "bg-[var(--c-porcelain-soft)] text-[var(--c-ink)] hover:bg-[var(--c-bronze)]";
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a href={href} className={`${base} ${styles}`} {...externalProps}>
      <span>{children}</span>
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </a>
  );
}

function GhostCTA({ href, children }) {
  return (
    <a href={href} className="inline-flex items-center gap-2 border-b border-[var(--c-bronze)] py-3 min-h-[44px] text-[12px] font-medium uppercase tracking-[0.16em] text-[var(--c-eucalyptus)] transition-colors duration-300 hover:text-[var(--c-bronze)]">
      {children}
    </a>
  );
}

/* ─────────────────────────────────────────────────────────────
   Header — transparent over dark hero, with mobile menu
   ───────────────────────────────────────────────────────────── */

function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <a href="#hero" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[var(--c-bronze)] focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-[0.18em] focus:text-[var(--c-ink-deep)]">
        Skip to content
      </a>
      <header className="relative z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 border-b border-[var(--c-eucalyptus)]/12 px-6 py-6 sm:px-14">
          <a href="#top" aria-label="The Willow Well — home" className="inline-flex items-center gap-3 text-[var(--c-rainfog)]">
            <span aria-hidden="true"><Mark className="h-7 w-7" /></span>
            <span className="font-display text-[13px] sm:text-[15px] font-light uppercase tracking-[0.18em]">The Willow Well</span>
          </a>
          <nav className="hidden lg:block" aria-label="Primary">
            <ul className="flex items-center gap-10">
              {NAV_ITEMS.slice(0, -1).map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-[12px] uppercase tracking-[0.1em] text-[var(--c-eucalyptus)] transition-colors hover:text-[var(--c-bronze)]">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#book" className="border border-[var(--c-eucalyptus)]/40 px-[18px] py-2.5 text-[11px] uppercase tracking-[0.16em] text-[var(--c-rainfog)] transition-all duration-300 hover:border-[var(--c-bronze)] hover:bg-[var(--c-bronze)] hover:text-[var(--c-ink-deep)]">
                  Book a Call
                </a>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center border border-[var(--c-eucalyptus)]/30 text-[var(--c-rainfog)]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              {open ? <path d="M6 6 L18 18 M18 6 L6 18" /> : <path d="M4 8 L20 8 M4 16 L20 16" />}
            </svg>
          </button>
        </div>
        {open && (
          <div id="mobile-menu" className="lg:hidden border-b border-[var(--c-eucalyptus)]/15 bg-[#0F1A1C]/95 backdrop-blur">
            <ul className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} onClick={() => setOpen(false)} className="flex items-center min-h-[44px] py-3 text-[14px] uppercase tracking-[0.14em] text-[var(--c-eucalyptus)]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   HERO — Editorial Quiet layout, Cinematic palette + animation cascade
   ───────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <div id="hero">
      {/* Desktop hero (>= lg / 1024px) — original centered watermark layout */}
      <div className="hidden lg:block">
<section className="relative min-h-[980px] overflow-hidden text-[var(--c-rainfog)]"
      style={{
        background: `
          radial-gradient(80% 60% at 50% 100%, rgba(166,128,90,0.18), transparent 60%),
          radial-gradient(50% 40% at 80% 20%, rgba(123,147,138,0.25), transparent 60%),
          radial-gradient(60% 50% at 15% 30%, rgba(63,95,100,0.6), transparent 70%),
          linear-gradient(180deg, #0F1A1C 0%, #1A2628 60%, #0F1A1C 100%)`,
      }}>
      {/* noise */}
      <div className="noise-overlay relative" aria-hidden />
      {/* contour lines */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-40" aria-hidden>
        <svg viewBox="0 0 1600 900" preserveAspectRatio="none" className="h-full w-full">
          <g fill="none" stroke="rgba(199,212,207,0.18)" strokeWidth="0.6">
            <path d="M0 720 Q 400 600 800 700 T 1600 660" />
            <path d="M0 760 Q 400 640 800 740 T 1600 700" />
            <path d="M0 800 Q 400 680 800 780 T 1600 740" />
            <path d="M0 840 Q 400 720 800 820 T 1600 780" />
            <path d="M0 880 Q 400 760 800 860 T 1600 820" />
            <path d="M0 200 Q 400 120 800 180 T 1600 160" opacity="0.6" />
            <path d="M0 160 Q 400  80 800 140 T 1600 120" opacity="0.4" />
          </g>
        </svg>
      </div>
      {/* breathing orb */}
      <div aria-hidden className="anim-breathe pointer-events-none absolute left-1/2 top-[55%] z-[1] h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle at 50% 40%, rgba(199,212,207,0.25), rgba(77,113,119,0.1) 40%, transparent 70%)", filter: "blur(2px)" }} />
      {/* drifting compass mark — positioned below H1, inside the orb halo */}
      <div aria-hidden className="anim-drift pointer-events-none absolute left-1/2 top-[62%] z-[2] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2" style={{ color: "rgba(199,212,207,0.32)" }}>
        <Mark className="h-full w-full" />
      </div>

      <div className="relative z-[5] mx-auto max-w-7xl px-14">
        <Header />

        <div className="flex flex-col items-center pt-36 text-center">
          <Eyebrow flank>Somatic Strategy · Durham, NC · Est. 2024</Eyebrow>

          <h1 className="anim-fade-up mt-9 max-w-[14ch] font-display text-[72px] font-extralight leading-[0.9] tracking-[-0.035em] text-[var(--c-porcelain-soft)] sm:text-[96px] md:text-[124px] lg:text-[152px]">
            Clarity and capacity<br />
            begin in the <span style={{ fontFamily: "var(--font-italic)", color: "var(--c-bronze)", fontWeight: 400 }}>body.</span>
          </h1>

          <p className="anim-fade-up mt-12 max-w-[600px] text-[18px] leading-[1.55] text-[var(--c-eucalyptus)]" style={{ animationDelay: ".2s" }}>
            Operational infrastructure for leaders and teams who are excellent at their work — and running on fumes. Workshops, cohort programs, and retreats that build capacity that lasts.
          </p>

          <div className="anim-fade-up mt-14 flex flex-col items-center gap-6 sm:flex-row" style={{ animationDelay: ".4s" }}>
            <PrimaryCTA href="#book">Book a Discovery Call</PrimaryCTA>
            <GhostCTA href="#method">See the method</GhostCTA>
          </div>
        </div>
      </div>

      {/* bottom rail */}
      <div className="absolute bottom-8 left-0 right-0 z-[5] flex items-center justify-between px-6 sm:px-14 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--c-willow)]" style={{ fontFamily: "var(--font-mono)" }}>
        <div className="inline-flex items-center gap-2.5">
          <svg viewBox="0 0 24 24" className="anim-fall h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5 L12 19 M6 13 L12 19 L18 13" />
          </svg>
          <span>Scroll · The Premise</span>
        </div>
        <div className="hidden sm:block">For high-performing teams · CHRO · L&amp;D · ESO</div>
        <div>01 / 09</div>
      </div>
    </section>
      </div>

      {/* Mobile + tablet hero (< lg / 1024px) — asymmetric layout with rotating stamp */}
      <div className="lg:hidden">
<section className="relative overflow-hidden text-[var(--c-rainfog)]"
      style={{
        background: `
          radial-gradient(80% 60% at 50% 100%, rgba(166,128,90,0.18), transparent 60%),
          radial-gradient(50% 40% at 80% 20%, rgba(123,147,138,0.25), transparent 60%),
          radial-gradient(60% 50% at 15% 30%, rgba(63,95,100,0.6), transparent 70%),
          linear-gradient(180deg, #0F1A1C 0%, #1A2628 60%, #0F1A1C 100%)`,
      }}>
      <div className="noise-overlay relative" aria-hidden />
      {/* faint 12-col grid mask, editorial */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] opacity-50"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(199,212,207,0.04) 1px, transparent 1px)",
          backgroundSize: "calc(100% / 12) 100%",
          maskImage: "linear-gradient(180deg, transparent, #000 35%, #000 80%, transparent)",
          WebkitMaskImage: "linear-gradient(180deg, transparent, #000 35%, #000 80%, transparent)",
        }} />
      {/* contour lines */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-40" aria-hidden>
        <svg viewBox="0 0 1600 900" preserveAspectRatio="none" className="h-full w-full">
          <g fill="none" stroke="rgba(199,212,207,0.18)" strokeWidth="0.6">
            <path d="M0 720 Q 400 600 800 700 T 1600 660" />
            <path d="M0 760 Q 400 640 800 740 T 1600 700" />
            <path d="M0 800 Q 400 680 800 780 T 1600 740" />
            <path d="M0 840 Q 400 720 800 820 T 1600 780" />
            <path d="M0 200 Q 400 120 800 180 T 1600 160" opacity="0.6" />
          </g>
        </svg>
      </div>

      <div className="relative z-[5] mx-auto max-w-7xl px-6 sm:px-14">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-20 items-end pt-28 pb-16 lg:pt-36 lg:pb-24">
          {/* LEFT — copy column */}
          <div>
            <div className="anim-fade-up" style={{ animationDelay: "0s" }}>
              <Eyebrow flank>Somatic Strategy · Est. Durham, NC</Eyebrow>
            </div>

            <h1 className="anim-fade-up mt-9 max-w-[13ch] font-display font-extralight tracking-[-0.03em] text-[var(--c-porcelain-soft)] text-[64px] sm:text-[88px] md:text-[112px] lg:text-[124px]"
                style={{ animationDelay: ".1s", lineHeight: 0.94 }}>
              Clarity and capacity<br />
              begin in the <Italic><span style={{ color: "var(--c-bronze)" }}>body.</span></Italic>
            </h1>

            <p className="anim-fade-up mt-10 max-w-[540px] text-[19px] leading-[1.5] text-[var(--c-eucalyptus)]" style={{ animationDelay: ".25s" }}>
              Operational infrastructure for leaders and teams who are excellent at their work — and running on fumes. Workshops, cohort programs, and retreats that build capacity that lasts.
            </p>

            <div className="anim-fade-up mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7" style={{ animationDelay: ".4s" }}>
              <PrimaryCTA href="#book">Book a Discovery Call</PrimaryCTA>
              <GhostCTA href="#method">See the method</GhostCTA>
            </div>
          </div>

          {/* RIGHT — meta column with rotating stamp */}
          <aside className="anim-fade-up flex flex-col items-center text-center gap-8 border-t border-[var(--c-eucalyptus)]/20 pt-9 lg:items-end lg:text-right lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0" style={{ animationDelay: ".55s" }}>
            <div className="relative inline-flex h-[112px] w-[112px] lg:h-[136px] lg:w-[136px] items-center justify-center rounded-full border border-[var(--c-eucalyptus)]/35 text-[var(--c-eucalyptus)]">
              <svg viewBox="0 0 140 140" className="anim-rot absolute inset-0 h-full w-full" aria-hidden="true">
                <defs>
                  <path id="stamp-path" d="M 70,70 m -54,0 a 54,54 0 1,1 108,0 a 54,54 0 1,1 -108,0" />
                </defs>
                <text fill="currentColor" style={{ fontSize: "9px", letterSpacing: "2.6px", fontFamily: "var(--font-mono)" }}>
                  <textPath href="#stamp-path">SOMATIC · STRATEGY · FOR · CLARITY · &amp; · CAPACITY · </textPath>
                </text>
              </svg>
              <div className="text-center" style={{ fontFamily: "var(--font-italic)" }}>
                <div className="text-[12px] tracking-[0.06em] text-[var(--c-willow)]" style={{ fontFamily: "var(--font-mono)" }}>est.</div>
                <div className="text-[20px] text-[var(--c-bronze)]">2024</div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 lg:items-end">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--c-willow)]" style={{ fontFamily: "var(--font-mono)" }}>Practitioner</span>
              <span className="font-display text-[20px] font-light text-[var(--c-porcelain-soft)]">Lee Gray</span>
            </div>

            <div className="flex flex-col gap-1.5 lg:items-end">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--c-willow)]" style={{ fontFamily: "var(--font-mono)" }}>Available</span>
              <span className="font-display text-[20px] font-light text-[var(--c-porcelain-soft)]">Q3 · Q4 · 2026</span>
            </div>
          </aside>
        </div>

        {/* hero footer row — 4 columns of buyer types */}
        <div className="anim-fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 border-t border-[var(--c-eucalyptus)]/20 pt-9 pb-16" style={{ animationDelay: ".7s" }}>
          {HERO_FOOTROW.map((item) => (
            <div key={item.lab}>
              <span className="block mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--c-willow)]" style={{ fontFamily: "var(--font-mono)" }}>{item.lab}</span>
              <span className="font-display text-[20px] font-light leading-[1.2] text-[var(--c-porcelain-soft)] block">
                {item.base}<Italic><span style={{ color: "var(--c-bronze)" }}>{item.em}</span></Italic>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   PROBLEM — Cinematic light editorial
   ───────────────────────────────────────────────────────────── */

function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden bg-[var(--c-porcelain-soft)] py-44 text-[var(--c-ink)]">
      <div aria-hidden className="pointer-events-none absolute -left-32 top-1/2 hidden h-[600px] w-[600px] -translate-y-1/2 opacity-50 text-[var(--c-eucalyptus)] sm:block">
        <Mark className="h-full w-full" />
      </div>
      <div className="relative z-[2] mx-auto max-w-7xl px-6 sm:px-14">
        <div className="mb-20 flex items-center justify-between border-t border-[var(--c-sea)]/35 pt-6">
          <Eyebrow tone="text">02 · The Premise</Eyebrow>
          <Eyebrow tone="text">North · 02</Eyebrow>
        </div>

        <h2 className="max-w-[18ch] font-display text-[40px] font-extralight leading-[1.02] tracking-[-0.025em] text-[var(--c-ink)] sm:text-[56px] md:text-[72px] lg:text-[96px]">
          Your people aren't{" "}
          <span className="relative text-[var(--c-willow)]">
            underperforming.
            <span aria-hidden className="absolute -left-[2%] -right-[2%] top-[54%] h-[3px] bg-[var(--c-bronze)]" />
          </span>
          <br />
          They're <Italic><span style={{ color: "var(--c-bronze)" }}>under-resourced</span></Italic> — at the<br />
          nervous system level.
        </h2>

        <p className="mt-20 max-w-[54ch] border-l-2 border-[var(--c-bronze)] pl-6 font-display text-[22px] font-light leading-[1.4] text-[var(--c-sea-text)] sm:text-[24px]">
          And no amount of strategic planning fixes a dysregulated team. Somatic Strategy is how you change that — by treating capacity as the upstream variable, not the lagging indicator.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   METHOD — Cinematic dark second-act
   ───────────────────────────────────────────────────────────── */

function Method() {
  return (
    <section id="method" className="relative overflow-hidden py-40 text-[var(--c-rainfog)]"
      style={{ background: "linear-gradient(180deg,#0F1A1C 0%, #16252A 100%)" }}>
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(60% 80% at 50% 0%, rgba(166,128,90,0.12), transparent 70%)" }} />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-14">
        <div className="mb-28 grid items-end gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>03 · Somatic Strategy</Eyebrow>
            <h2 className="mt-8 font-display text-[44px] font-extralight leading-[0.96] tracking-[-0.03em] text-[var(--c-porcelain-soft)] sm:text-[56px] md:text-[64px] lg:text-[84px]">
              Four movements.<br />
              One <Italic><span style={{ color: "var(--c-bronze)" }}>arc.</span></Italic>
            </h2>
          </div>
          <p className="max-w-[46ch] text-[18px] leading-[1.55] text-[var(--c-eucalyptus)]">
            The practice of building organizational performance capacity through the body — regulating the nervous system so leaders and teams can think clearly, decide confidently, and sustain output without burning out.{" "}
            <span style={{ color: "var(--c-rainfog)" }}><Italic>Every engagement follows this arc.</Italic></span>
          </p>
        </div>

        <div className="relative">
          <div aria-hidden className="pointer-events-none absolute left-0 right-0 top-[62px] z-[1] hidden h-[140px] lg:block">
            <svg viewBox="0 0 1200 140" preserveAspectRatio="none" className="h-full w-full overflow-visible">
              <path d="M 80 70 Q 380 10 600 70 T 1120 70" stroke="rgba(166,128,90,0.5)" strokeWidth="1" fill="none" strokeDasharray="3 5" />
              <circle cx="80"   cy="70" r="3" fill="#A6805A" />
              <circle cx="380"  cy="42" r="3" fill="#A6805A" />
              <circle cx="680"  cy="62" r="3" fill="#A6805A" />
              <circle cx="1120" cy="70" r="3" fill="#A6805A" />
            </svg>
          </div>

          <ol className="relative z-[2] grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {ARC.map((step) => (
              <li key={step.n} className="px-7 pt-8">
                <div className="relative mb-9 flex h-[88px] w-[88px] items-center justify-center rounded-full border border-[var(--c-eucalyptus)]/30 backdrop-blur-sm"
                  style={{ background: "linear-gradient(140deg, rgba(199,212,207,0.08), rgba(77,113,119,0.4))" }}>
                  <span className="font-display text-[36px] font-light text-[var(--c-bronze)]" style={{ lineHeight: 1 }}>{step.n}</span>
                  <span aria-hidden className="absolute -inset-1.5 rounded-full border border-[var(--c-bronze)]/25" />
                </div>
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--c-bronze)]" style={{ fontFamily: "var(--font-mono)" }}>{step.lab}</p>
                <h3 className="mb-[18px] font-display text-[40px] font-light tracking-[-0.02em] text-[var(--c-porcelain-soft)]" style={{ lineHeight: 1 }}>
                  {step.italic ? <Italic><span style={{ color: "var(--c-bronze)" }}>{step.title}</span></Italic> : step.title}
                </h3>
                <p className="max-w-[30ch] text-[15px] leading-[1.6] text-[var(--c-eucalyptus)]">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SERVICES — Editorial Quiet 3-column hairline grid + Cinematic type
   ───────────────────────────────────────────────────────────── */

function Services() {
  return (
    <section id="services" className="bg-[var(--c-porcelain-soft)] py-44 text-[var(--c-ink)]">
      <div className="mx-auto max-w-7xl px-6 sm:px-14">
        <div className="mb-20">
          <Eyebrow>04 · Engagements</Eyebrow>
          <h2 className="mt-6 font-display text-[44px] font-extralight leading-[0.98] tracking-[-0.025em] text-[var(--c-ink)] sm:text-[56px] md:text-[64px] lg:text-[68px]">
            Three ways to <Italic><span style={{ color: "var(--c-sea-deep)" }}>work together.</span></Italic>
          </h2>
          <p className="mt-6 max-w-[52ch] text-[17px] leading-[1.55] text-[var(--c-sea-text)]">
            Each engagement follows the Somatic Strategy arc. Custom-scoped to context. No off-the-shelf workshops, no scripted retreats.
          </p>
        </div>

        <div className="grid border-y border-[var(--c-sea)]/30 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <article key={s.n} className={`group relative px-9 pt-12 pb-14 transition-colors duration-300 hover:bg-[var(--c-rainfog)] ${i < SERVICES.length - 1 ? "border-b border-[var(--c-sea)]/16 lg:border-b-0 lg:border-r" : ""}`}>
              <div className="mb-16 flex items-start justify-between">
                <span className="font-display text-[18px] font-light text-[var(--c-bronze)]">{s.n}</span>
                <span aria-hidden className="block h-8 w-8 text-[var(--c-sea-deep)] opacity-70">{s.icon}</span>
              </div>
              <h3 className="font-display text-[36px] font-light leading-none tracking-[-0.015em] text-[var(--c-ink)]">
                {s.italic
                  ? <><Italic><span style={{ color: "var(--c-sea)" }}>{s.title}</span></Italic>{s.suffix}</>
                  : s.title}
              </h3>
              <p className="mt-2 mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--c-sea-text)]" style={{ fontFamily: "var(--font-mono)" }}>{s.fmt}</p>
              <p className="mb-9 text-[15px] leading-[1.55] text-[var(--c-sea-text)]">{s.body}</p>
              <a href="#book" className="inline-flex items-center gap-2 border-b border-[var(--c-sea-deep)] pt-3 pb-2 min-h-[44px] text-[12px] font-medium uppercase tracking-[0.18em] text-[var(--c-sea-deep)] transition-colors hover:border-[var(--c-bronze)] hover:text-[var(--c-bronze)]">
                Let's Talk <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   FIT — Cinematic
   ───────────────────────────────────────────────────────────── */

function Fit() {
  return (
    <section id="fit" className="relative overflow-hidden bg-[var(--c-rainfog)] py-40 text-[var(--c-ink)]">
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(60% 50% at 50% 100%, rgba(199,212,207,0.7), transparent 70%)" }} />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-14">
        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Eyebrow>05 · Audience</Eyebrow>
            <h2 className="mt-6 font-display text-[44px] font-extralight leading-none tracking-[-0.025em] text-[var(--c-ink)] sm:text-[56px] md:text-[64px] lg:text-[80px]">
              Who this<br />is <Italic><span style={{ color: "var(--c-bronze)" }}>for.</span></Italic>
            </h2>
          </div>
          <p className="max-w-[36ch] md:text-right text-[14px] leading-[1.55] text-[var(--c-sea-text)]">
            Three buyer types. Named directly because seeing yourself recognized is the first conversion.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {FIT.map((f, i) => (
            <article key={f.lab} className="group flex min-h-[340px] flex-col justify-between border border-[var(--c-sea)]/16 bg-[var(--c-porcelain-soft)] p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(58,79,82,0.12)]">
              <div className="flex items-start justify-between">
                <Eyebrow>{f.lab}</Eyebrow>
                <span className="text-[var(--c-sea-deep)] opacity-60">{i + 1}</span>
              </div>
              <div>
                <h3 className="font-display text-[30px] font-light leading-[1.05] tracking-[-0.015em] text-[var(--c-ink)]">
                  {f.title}{" "}
                  <Italic><span style={{ color: "var(--c-sea)" }}>{f.italicTitle}</span></Italic>
                  {f.suffix}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.6] text-[var(--c-sea-text)]">{f.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   PROOF — Cinematic
   ───────────────────────────────────────────────────────────── */

function SocialProof() {
  return (
    <section id="proof" className="relative overflow-hidden py-44 text-[var(--c-porcelain-soft)] sm:py-48" style={{ background: "#0F1A1C" }}>
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{
        background: `
          radial-gradient(50% 50% at 80% 20%, rgba(166,128,90,0.15), transparent 60%),
          radial-gradient(60% 50% at 20% 80%, rgba(77,113,119,0.4), transparent 70%)`,
      }} />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-14">
        <div className="mb-20 flex flex-col gap-4 border-b border-[var(--c-rainfog)]/18 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <Eyebrow>06 · Field Notes · Featured</Eyebrow>
          <Eyebrow>Founder Retreat / American Underground</Eyebrow>
        </div>

        <div className="grid items-end gap-16 lg:grid-cols-[1fr_320px] lg:gap-24">
          <div>
            <span aria-hidden className="-mb-10 block leading-[0.5] text-[var(--c-bronze)] opacity-30" style={{ fontFamily: "var(--font-italic)", fontStyle: "italic", fontSize: 200 }}>"</span>
            <blockquote className="font-display text-[32px] font-extralight leading-[1.12] tracking-[-0.02em] text-[var(--c-porcelain-soft)] sm:text-[40px] md:text-[52px] lg:text-[68px]">
              We brought The Willow Well in for a startup founder retreat, and it was anything but typical. Lee's intentional approach helped create real{" "}
              <Italic><span style={{ color: "var(--c-bronze)" }}>clarity and alignment.</span></Italic> I walked away with clarity on a challenge I'd been circling for two years.
            </blockquote>

            <figcaption className="mt-14 flex items-center gap-6 border-t border-[var(--c-rainfog)]/18 pt-8">
              <span className="flex h-16 w-16 items-center justify-center rounded-full text-[22px] text-[var(--c-porcelain-soft)]" style={{ background: "linear-gradient(140deg, var(--c-willow), var(--c-sea))", fontFamily: "var(--font-display)", fontWeight: 300 }}>LZ</span>
              <span className="flex flex-col gap-1">
                <span className="font-display text-[20px] font-light text-[var(--c-porcelain-soft)]">Laura Zabinski</span>
                <span className="text-[12px] tracking-[0.06em] text-[var(--c-eucalyptus)]">Executive Director · American Underground</span>
              </span>
            </figcaption>
          </div>

          <div className="flex flex-col gap-8">
            {[
              { l: "Setting",  v: "Multi-day startup founder retreat — immersive engagement." },
              { l: "Modality", v: "Movement, play, breathwork, internal dialogue, rest." },
              { l: "Outcome",  v: "Clarity on a two-year strategic question; a clear path forward." },
            ].map((c) => (
              <div key={c.l} className="border-l border-[var(--c-bronze)]/40 pl-5">
                <Eyebrow>{c.l}</Eyebrow>
                <p className="mt-2.5 font-display text-[18px] font-light leading-[1.4] text-[var(--c-rainfog)]">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   ABOUT — Cinematic
   ───────────────────────────────────────────────────────────── */

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[var(--c-porcelain-soft)] py-44 text-[var(--c-ink)]">
      <div className="mx-auto max-w-7xl px-6 sm:px-14">
        <div className="grid items-start gap-16 lg:grid-cols-[1.1fr_1.4fr] lg:gap-24">
          <div className="relative aspect-[4/5] overflow-hidden"
            style={{
              background: `
                radial-gradient(80% 60% at 50% 30%, rgba(199,212,207,0.6), transparent 70%),
                linear-gradient(160deg, var(--c-willow), var(--c-sea-deep))`,
            }}>
            <div aria-hidden className="absolute inset-0 mix-blend-overlay opacity-40"
              style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' /></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")" }} />
            <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--c-porcelain-soft)] opacity-70" style={{ fontFamily: "var(--font-mono)" }}>
              PORTRAIT · LEE GRAY
            </div>
            <div className="absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--c-rainfog)] opacity-85" style={{ fontFamily: "var(--font-mono)" }}>FILM · 35MM · NATURAL LIGHT</div>
            <div className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--c-rainfog)] opacity-85" style={{ fontFamily: "var(--font-mono)" }}>DURHAM · NC · '26</div>
          </div>

          <div>
            <Eyebrow>07 · The Practitioner</Eyebrow>
            <h2 className="mb-12 mt-8 font-display text-[40px] font-extralight leading-none tracking-[-0.025em] text-[var(--c-ink)] sm:text-[48px] md:text-[56px] lg:text-[72px]">
              I'm not a coach.<br />I'm a <Italic><span style={{ color: "var(--c-sea)" }}>guide.</span></Italic>
            </h2>
            <p className="mb-5 max-w-[54ch] font-display text-[17px] font-light leading-[1.65] text-[var(--c-sea-text)]">
              The Willow Well is built from everything I know about what it actually costs to operate from survival mode at the level my clients operate at — and what shifts when you have the right tools.
            </p>
            <p className="mb-8 max-w-[54ch] font-display text-[17px] font-light leading-[1.65] text-[var(--c-sea-text)]">
              Not inspiration. Actual capacity.
            </p>
            <p className="text-[28px] text-[var(--c-bronze)] sm:text-[32px]" style={{ fontFamily: "var(--font-italic)", fontStyle: "italic" }}>— Lee Gray</p>

            <dl className="mt-14 grid grid-cols-1 border-t border-[var(--c-sea)]/16 sm:grid-cols-2">
              {CREDENTIALS.map((c) => (
                <div key={c.l} className="flex items-center justify-between gap-4 border-b border-[var(--c-sea)]/16 px-1 py-[18px]">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--c-sea-text)]" style={{ fontFamily: "var(--font-mono)" }}>{c.l}</dt>
                  <dd className="font-display text-[14px] text-[var(--c-ink)]">{c.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   BOOK — Cinematic
   ───────────────────────────────────────────────────────────── */

function Book() {
  return (
    <section id="book" className="relative overflow-hidden py-44 text-center text-[var(--c-porcelain-soft)]"
      style={{ background: "linear-gradient(180deg,#0F1A1C 0%, #1A2628 60%, #0F1A1C 100%)" }}>
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(60% 70% at 50% 50%, rgba(166,128,90,0.18), transparent 70%)" }} />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--c-bronze)]/20 sm:block">
        <div className="absolute inset-[60px] rounded-full border border-[var(--c-bronze)]/12" />
        <div className="absolute inset-[140px] rounded-full border border-[var(--c-bronze)]/8" />
      </div>

      <div className="relative z-[2] mx-auto max-w-5xl px-6 sm:px-14">
        <Eyebrow>08 · Begin</Eyebrow>
        <h2 className="mx-auto mt-9 max-w-[22ch] font-display text-[48px] font-extralight leading-[0.94] tracking-[-0.03em] text-[var(--c-porcelain-soft)] sm:text-[64px] md:text-[88px] lg:text-[124px]">
          Ready to build<br />
          <Italic><span style={{ color: "var(--c-bronze)" }}>capacity</span></Italic> that lasts?
        </h2>
        <p className="mx-auto mb-14 mt-12 max-w-[48ch] font-display text-[18px] font-light leading-[1.55] text-[var(--c-eucalyptus)]">
          Every engagement starts with a 20-minute discovery call. No pitch. Just a real conversation about whether the fit is right.
        </p>
        <PrimaryCTA href="https://calendar.app.google/AnYvsxTmKY3vbrxV7" external>Book a Discovery Call</PrimaryCTA>
        <p className="mt-8 text-[18px] text-[var(--c-willow)]" style={{ fontFamily: "var(--font-italic)", fontStyle: "italic" }}>
          Same-week engagements are reviewed by request only.
        </p>

        <div className="mx-auto mt-24 grid max-w-[900px] grid-cols-1 gap-10 border-t border-[var(--c-rainfog)]/18 pt-12 sm:grid-cols-3">
          {[
            { l: "Email",     v: "info@thewillowwellco.com" },
            { l: "Phone",     v: "910.691.2336" },
            { l: "Based in",  v: "Durham, NC · Travel" },
          ].map((c) => (
            <div key={c.l} className="flex flex-col items-center gap-2">
              <Eyebrow tone="willow">{c.l}</Eyebrow>
              <span className="font-display text-[18px] text-[var(--c-porcelain-soft)]">{c.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   FOOTER
   ───────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="bg-[#0A1214] py-12 text-[12px] tracking-[0.08em] text-[var(--c-willow)]">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-6 sm:px-14 sm:flex-row sm:items-center sm:justify-between">
        <a href="#top" aria-label="The Willow Well — home" className="inline-flex items-center gap-3 py-2 text-[var(--c-rainfog)]">
          <span aria-hidden="true" className="text-[var(--c-bronze)]"><Mark className="h-6 w-6" /></span>
          <span>© 2026 The Willow Well · Somatic Strategy</span>
        </a>
        <div>info@thewillowwellco.com · 910.691.2336</div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────
   App
   ───────────────────────────────────────────────────────────── */

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-[var(--c-porcelain-soft)] text-[var(--c-sea-text)]">
      <main>
        <Hero />
        <Problem />
        <Method />
        <Services />
        <Fit />
        <SocialProof />
        <About />
        <Book />
      </main>
      <Footer />
    </div>
  );
}
