import React from "react";

const NAV_ITEMS = [
  { id: "method", label: "Method" },
  { id: "services", label: "Services" },
  { id: "fit", label: "Fit" },
  { id: "about", label: "About" },
  { id: "book", label: "Book" },
];

const ARC = [
  {
    n: "01",
    title: "Arrive",
    body: "Regulate the room. Nervous system first, before any agenda item.",
  },
  {
    n: "02",
    title: "Move",
    body: "Somatic practice that shifts state through breath, body, and intentional movement.",
  },
  {
    n: "03",
    title: "Excavate",
    body: "Strategic clarity work around values, patterns, and what is driving behavior.",
  },
  {
    n: "04",
    title: "Commit",
    body: "Leave with a real tool and a real intention, not inspiration that evaporates.",
  },
];

const SERVICES = [
  {
    n: "01",
    kicker: "HALF-DAY · FULL-DAY",
    title: "Workshops",
    body:
      "Intensives for corporate teams, accelerator cohorts, and organizational off-sites. Every session follows the Somatic Strategy arc and delivers a tool participants take back to work the same day. Custom-scoped for your context.",
  },
  {
    n: "02",
    kicker: "MULTI-MONTH",
    title: "Cohort Programs",
    body:
      "Ongoing programs that build capacity over time. Designed for organizations ready to invest in their people beyond a single event — measurable behavioral change, not a one-off.",
  },
  {
    n: "03",
    kicker: "HALF-DAY · TWO-DAY",
    title: "Retreats",
    body:
      "Immersive engagements for teams ready to do the deeper work: breathwork, somatic movement, values clarification, strategic wayfinding, closing ceremony. The engagements teams mark time by.",
  },
];

const FIT = [
  {
    title: "High-growth companies",
    body:
      "People & Culture leaders, CHROs, and L&D directors at organizations where the team is excellent but running on fumes.",
  },
  {
    title: "ESOs & accelerators",
    body:
      "Founder ecosystems and cohort programs that need their leaders to think clearly and decide confidently under pressure.",
  },
  {
    title: "Mission-driven nonprofits",
    body:
      "Teams carrying the weight of the work — where compassion fatigue is a load-bearing wall, not a wellness footnote.",
  },
];

const CREDENTIALS = [
  "200RYT Yoga Certification",
  "Certified Breathwork Facilitation",
  "Martha Beck Wayfinder Coach, in training",
  "Leadership Triangle Goodmon Fellow",
  "Co-Chair, Member Engagement, Durham Rotary Club",
  "Associate Director, Knox St Studios",
];

function PrimaryCTA({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={
        "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[var(--c-sea)] px-7 py-4 text-sm font-medium tracking-wide text-[var(--c-porcelain)] shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_8px_24px_-12px_rgba(77,113,119,0.55)] transition-colors duration-200 hover:bg-[var(--c-sea-deep)] focus-visible:bg-[var(--c-sea-deep)] " +
        className
      }
    >
      <span className="relative">{children}</span>
      <span aria-hidden className="relative transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

function SecondaryCTA({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={
        "inline-flex items-center justify-center gap-3 rounded-full border border-[var(--c-sea)]/25 bg-transparent px-7 py-4 text-sm font-medium tracking-wide text-[var(--c-sea)] transition-colors duration-200 hover:border-[var(--c-sea)]/50 hover:bg-[var(--c-eucalyptus)]/45 " +
        className
      }
    >
      {children}
    </a>
  );
}

function BronzeLink({ href, children }) {
  return (
    <a
      href={href}
      className="mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[var(--c-bronze)] transition-opacity duration-200 hover:opacity-80"
    >
      {children}
      <span aria-hidden>→</span>
    </a>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--c-willow)]">
      {children}
    </p>
  );
}

function Rule() {
  return <span aria-hidden className="inline-block h-px w-8 bg-[var(--c-willow)] align-middle" />;
}

function CompassWillow({ className = "h-6 w-6", tone = "sea" }) {
  const stroke = tone === "porcelain" ? "var(--c-porcelain)" : "var(--c-sea)";
  const leaf = tone === "porcelain" ? "var(--c-eucalyptus)" : "var(--c-willow)";
  const tick = "var(--c-bronze)";

  return (
    <svg
      viewBox="0 0 32 32"
      role="img"
      aria-label="Compass Willow mark"
      className={className}
    >
      <circle cx="16" cy="16" r="12.5" fill="none" stroke={stroke} strokeWidth="1.1" />
      <line x1="16" y1="3.5" x2="16" y2="6" stroke={tick} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="16" y1="26" x2="16" y2="28.5" stroke={stroke} strokeWidth="1" strokeLinecap="round" />
      <line x1="3.5" y1="16" x2="6" y2="16" stroke={stroke} strokeWidth="1" strokeLinecap="round" />
      <line x1="26" y1="16" x2="28.5" y2="16" stroke={stroke} strokeWidth="1" strokeLinecap="round" />
      <path
        d="M10 22 C 13 18, 14 14, 16 9 C 18 14, 19 18, 22 22"
        fill="none"
        stroke={leaf}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path d="M13.4 17.5 C 14.4 17.2, 15.3 16.6, 16 15.6" fill="none" stroke={leaf} strokeWidth="0.9" strokeLinecap="round" />
      <path d="M18.6 17.5 C 17.6 17.2, 16.7 16.6, 16 15.6" fill="none" stroke={leaf} strokeWidth="0.9" strokeLinecap="round" />
      <circle cx="16" cy="16" r="0.9" fill={tick} />
    </svg>
  );
}

function Header() {
  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[var(--c-sea)] focus:px-4 focus:py-2 focus:text-xs focus:font-medium focus:tracking-[0.18em] focus:text-[var(--c-porcelain)]"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-[var(--c-sea)]/10 bg-[var(--c-porcelain)]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
          <a href="#top" className="group inline-flex items-baseline gap-3">
            <CompassWillow className="h-5 w-5 translate-y-[3px]" />
            <span className="font-display text-base tracking-[0.28em] text-[var(--c-sea)]">
              THE&nbsp;WILLOW&nbsp;WELL
            </span>
          </a>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-7">
              {NAV_ITEMS.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={
                      "relative text-sm tracking-wide transition-colors " +
                      (i === 0
                        ? "text-[var(--c-sea)]"
                        : "text-[var(--c-sea)]/55 hover:text-[var(--c-sea)]")
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#book"
            className="rounded-full border border-[var(--c-sea)]/25 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--c-sea)] transition-colors duration-200 hover:border-[var(--c-sea)]/50 hover:bg-[var(--c-eucalyptus)]/45"
          >
            Book Call
          </a>
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--c-sea)]/10 bg-[var(--c-porcelain)]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#top" className="group inline-flex items-baseline gap-3">
              <CompassWillow className="h-5 w-5 translate-y-[3px]" />
              <span className="font-display text-base tracking-[0.28em] text-[var(--c-sea)]">
                THE&nbsp;WILLOW&nbsp;WELL
              </span>
            </a>
            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--c-sea-text)]/75">
              Somatic Strategy for high-performing teams. Workshops, cohort programs, and
              retreats, based in Durham, NC and available for travel.
            </p>
          </div>

          <div className="lg:col-span-3">
            <SectionLabel>Contact</SectionLabel>
            <ul className="mt-4 space-y-2 text-sm text-[var(--c-sea-text)]/80">
              <li>
                <a href="mailto:info@thewillowwellco.com" className="transition-colors hover:text-[var(--c-bronze)]">
                  info@thewillowwellco.com
                </a>
              </li>
              <li>
                <a href="tel:+19106912336" className="transition-colors hover:text-[var(--c-bronze)]">
                  910.691.2336
                </a>
              </li>
              <li>Durham, NC, available for travel</li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <SectionLabel>Navigate</SectionLabel>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm text-[var(--c-sea-text)]/80">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="transition-colors hover:text-[var(--c-bronze)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--c-eucalyptus)] pt-6 text-xs uppercase tracking-[0.22em] text-[var(--c-willow)] md:flex-row md:items-center md:justify-between">
          <p>© 2026 The Willow Well</p>
          <p>Clarity and capacity begin in the body.</p>
        </div>
      </div>
    </footer>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden texture-porcelain">
      <div className="pointer-events-none absolute inset-0 opacity-[0.75]" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-28 pt-20 lg:grid-cols-12 lg:pb-36 lg:pt-28">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3">
            <Rule />
            <SectionLabel>Somatic Strategy for High-Performing Teams</SectionLabel>
          </div>

          <h1 className="mt-7 font-display text-[2.6rem] font-light leading-[1.04] tracking-[-0.02em] text-[var(--c-sea)] sm:text-[3.2rem] md:text-[3.8rem] lg:text-[4.4rem]">
            Most organizations{" "}
            <em className="font-normal italic text-[var(--c-bronze)]">optimize</em>{" "}
            everything except the human doing the work.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-[1.75] text-[var(--c-sea-text)]/85">
            Workshops, cohort programs, and retreats designed to build capacity that
            lasts for leaders and teams excellent at their work and running on fumes.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryCTA href="#book">Book a Discovery Call</PrimaryCTA>
            <SecondaryCTA href="#services">Explore Services</SecondaryCTA>
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="relative h-full min-h-[260px] overflow-hidden rounded-[2rem] bg-[var(--c-sea)] p-8 text-[var(--c-porcelain)] texture-sea">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.32em] text-[var(--c-bronze)]">
              <span>Durham, NC</span>
              <span className="text-[var(--c-eucalyptus)]/85">Est. 2024</span>
            </div>
            <div className="mt-12 flex justify-center">
              <CompassWillow className="h-20 w-20 opacity-90" tone="porcelain" />
            </div>
            <p className="mt-12 font-display text-[1.25rem] font-light italic leading-snug text-[var(--c-porcelain)]/95">
              Clarity and capacity begin in the body.
            </p>
            <p className="mt-6 text-[10px] uppercase tracking-[0.32em] text-[var(--c-eucalyptus)]/80">
              A practice by Lee Gray
            </p>
          </div>
        </aside>
      </div>

      <div className="border-y border-[var(--c-sea)]/10 bg-[var(--c-rainfog)]/70">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 py-5 text-[11px] uppercase tracking-[0.28em] text-[var(--c-sea)]/65">
          <span>Workshops</span>
          <span aria-hidden>·</span>
          <span>Cohort Programs</span>
          <span aria-hidden>·</span>
          <span>Retreats</span>
          <span aria-hidden>·</span>
          <span>Available for travel</span>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section id="problem" className="mx-auto max-w-5xl px-6 py-28 md:py-36">
      <div className="flex items-center gap-3">
        <Rule />
        <SectionLabel>The Problem</SectionLabel>
      </div>
      <p className="mt-8 font-display text-[1.9rem] font-light leading-[1.3] tracking-[-0.012em] text-[var(--c-sea)] md:text-[2.6rem]">
        Your people aren’t underperforming. They’re{" "}
        <span className="italic text-[var(--c-bronze)]">under-resourced</span> at the
        nervous system level. And no amount of strategic planning fixes a dysregulated
        team. Somatic Strategy is how you change that.
      </p>
    </section>
  );
}

function Method() {
  return (
    <section id="method" className="bg-[var(--c-sea)] text-[var(--c-porcelain)] texture-sea">
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span aria-hidden className="inline-block h-px w-8 bg-[var(--c-eucalyptus)]/70 align-middle" />
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--c-eucalyptus)]">
                The Method
              </p>
            </div>
            <h2 className="mt-7 font-display text-[2.4rem] font-light leading-[1.05] tracking-[-0.02em] text-[var(--c-porcelain)] md:text-[3rem]">
              Somatic Strategy
            </h2>
            <p className="mt-6 text-lg leading-[1.85] text-[var(--c-porcelain)]/85">
              Somatic Strategy builds organizational performance capacity through the
              body by regulating the nervous system so leaders and teams can think
              clearly, decide confidently, and sustain output without burning out.
            </p>
            <p className="mt-6 text-base leading-[1.85] text-[var(--c-eucalyptus)]/80">
              Not a yoga class. Not executive coaching. Not corporate wellness.
              Operational infrastructure for the human doing the work.
            </p>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--c-eucalyptus)]">
              The Arc
            </p>
            <ol className="mt-6 grid gap-px overflow-hidden rounded-3xl bg-[var(--c-porcelain)]/10 sm:grid-cols-2">
              {ARC.map((step) => (
                <li
                  key={step.n}
                  className="bg-[var(--c-sea)]/60 p-7 transition-colors hover:bg-[var(--c-sea-deep)]/60"
                >
                  <p className="font-display text-2xl font-light text-[var(--c-bronze)]">
                    {step.n}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-normal text-[var(--c-porcelain)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.75] text-[var(--c-porcelain)]/80">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-28 md:py-36">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <Rule />
            <SectionLabel>Services</SectionLabel>
          </div>
          <h2 className="mt-7 font-display text-[2.2rem] font-light leading-[1.1] tracking-[-0.015em] text-[var(--c-sea)] md:text-[2.8rem]">
            Built for teams carrying more than their systems can hold.
          </h2>
          <p className="mt-6 max-w-md text-base leading-[1.85] text-[var(--c-sea-text)]/80">
            Three engagement shapes. One method. Every offering custom-scoped to the
            room it’s walking into. Never a template. Never a wellness add-on.
          </p>
        </div>

        <div className="grid gap-6 lg:col-span-7 lg:grid-cols-1">
          {SERVICES.map((s) => (
            <article
              key={s.n}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-[var(--c-sea)]/10 bg-[var(--c-porcelain-soft)] p-8 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--c-sea)]/30 hover:bg-[var(--c-rainfog)]"
            >
              <div className="flex items-baseline justify-between">
                <p className="font-display text-2xl font-light text-[var(--c-bronze)]">
                  {s.n}
                </p>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--c-willow)]">
                  {s.kicker}
                </p>
              </div>
              <h3 className="mt-5 font-display text-2xl font-normal text-[var(--c-sea)] md:text-[1.75rem]">
                {s.title}
              </h3>
              <p className="mt-4 text-base leading-[1.8] text-[var(--c-sea-text)]/85">
                {s.body}
              </p>
              <BronzeLink href="#book">Let’s talk</BronzeLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fit() {
  return (
    <section id="fit" className="bg-[var(--c-rainfog)]">
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <Rule />
              <SectionLabel>Who This Is For</SectionLabel>
            </div>
            <h2 className="mt-7 font-display text-[2.1rem] font-light leading-[1.1] tracking-[-0.015em] text-[var(--c-sea)] md:text-[2.6rem]">
              Built for organizations ready to move beyond generic wellness.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid gap-px overflow-hidden rounded-3xl bg-[var(--c-sea)]/10">
              {FIT.map((item) => (
                <li
                  key={item.title}
                  className="bg-[var(--c-porcelain)] p-7 transition-colors duration-200 hover:bg-[var(--c-eucalyptus)]/55"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-xl font-normal text-[var(--c-sea)]">
                      {item.title}
                    </h3>
                    <span aria-hidden className="text-[var(--c-bronze)]">
                      +
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-[1.8] text-[var(--c-sea-text)]/85">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section id="proof" className="px-6 py-24 md:py-32">
      <figure className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[var(--c-sea)] p-10 text-[var(--c-porcelain)] texture-sea md:p-16">
        <div className="flex items-center gap-4">
          <span
            aria-hidden
            className="font-display text-6xl font-light leading-none text-[var(--c-bronze)]"
          >
            “
          </span>
          <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--c-eucalyptus)]">
            Field Note
          </p>
        </div>

        <blockquote className="mt-7 font-display text-[1.7rem] font-light leading-[1.25] tracking-[-0.015em] text-[var(--c-porcelain)] md:text-[2.4rem]">
          We brought The Willow Well in for a startup founder retreat, and it was
          anything but typical.
          <span className="mt-6 block text-[1.2rem] leading-[1.55] text-[var(--c-porcelain)]/85 md:text-[1.45rem]">
            Lee’s intentional approach of combining movement, play, breathwork,
            internal dialogue, and rest helped create real clarity and alignment.
            Personally, I walked away with clarity on a challenge I’d been circling
            for two years and a clear path forward, and I’m incredibly grateful for
            the experience.
          </span>
        </blockquote>

        <figcaption className="mt-10 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[var(--c-eucalyptus)]/85">
          <span className="inline-block h-px w-8 bg-[var(--c-bronze)]/70" aria-hidden />
          Laura Zabinski · Executive Director, American Underground
        </figcaption>
      </figure>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28 md:py-32">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <Rule />
            <SectionLabel>About Lee</SectionLabel>
          </div>
          <h2 className="mt-7 font-display text-[2.4rem] font-light leading-[1.05] tracking-[-0.02em] text-[var(--c-sea)] md:text-[3rem]">
            Not a guru.
            <br />
            <span className="italic text-[var(--c-bronze)]">A guide.</span>
          </h2>

          <div className="mt-10">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--c-willow)]">
              Credentials
            </p>
            <ul className="mt-5 space-y-2 text-sm leading-[1.85] text-[var(--c-sea-text)]/85">
              {CREDENTIALS.map((c) => (
                <li key={c} className="flex gap-3">
                  <span aria-hidden className="mt-[10px] inline-block h-px w-4 shrink-0 bg-[var(--c-willow)]" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-8 text-lg leading-[1.85] text-[var(--c-sea-text)]/80 lg:col-span-7">
          <p className="font-display text-[1.5rem] font-light italic leading-[1.4] text-[var(--c-sea)] md:text-[1.8rem]">
            “I’m not an executive coach. I’m not a guru. I’m a guide, and there’s a
            meaningful difference.”
          </p>
          <p>
            The Willow Well is built from everything I know about what it actually
            costs to operate from survival mode at the level my clients operate at,
            and what shifts when you have the right tools. Not inspiration. Actual
            capacity.
          </p>
          <p>
            Lee Gray is the founder of The Willow Well and Associate Director at Knox
            St Studios. She has spent 20+ years working across corporate, nonprofit,
            and entrepreneurship ecosystems, and now works with leaders and teams who
            are excellent at their craft and ready to stop running on fumes.
          </p>
        </div>
      </div>
    </section>
  );
}

function Book() {
  return (
    <section id="book" className="bg-[var(--c-sea)] text-[var(--c-porcelain)] texture-sea">
      <div className="relative mx-auto max-w-5xl px-6 py-28 text-center md:py-36">
        <div className="pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <div className="relative">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="inline-block h-px w-8 bg-[var(--c-eucalyptus)]/70 align-middle" />
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--c-eucalyptus)]">
              Start Here
            </p>
            <span aria-hidden className="inline-block h-px w-8 bg-[var(--c-eucalyptus)]/70 align-middle" />
          </div>

          <h2 className="mx-auto mt-7 max-w-3xl font-display text-[2.4rem] font-light leading-[1.08] tracking-[-0.02em] text-[var(--c-porcelain)] md:text-[3.2rem]">
            Ready to build capacity that lasts?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-[1.85] text-[var(--c-porcelain)]/85">
            Every engagement starts with a 20-minute discovery call. No pitch. Just a
            real conversation about what your team needs and whether this is the right
            room for it.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:info@thewillowwellco.com?subject=Discovery%20Call%20Request"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[var(--c-porcelain)] px-7 py-4 text-sm font-medium tracking-wide text-[var(--c-sea)] transition-colors duration-200 hover:bg-[var(--c-eucalyptus)]"
            >
              <span className="relative">Request a Discovery Call</span>
              <span aria-hidden className="relative transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="mailto:info@thewillowwellco.com"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[var(--c-porcelain)]/40 px-7 py-4 text-sm font-medium tracking-wide text-[var(--c-porcelain)] transition-colors duration-200 hover:border-[var(--c-porcelain)]/70 hover:bg-[var(--c-porcelain)]/10"
            >
              Email directly
            </a>
          </div>

          <p className="mt-10 text-[11px] uppercase tracking-[0.32em] text-[var(--c-eucalyptus)]/80">
            Same-week engagements are reviewed by request only
          </p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-[var(--c-porcelain)] text-[var(--c-sea-text)]">
      <Header />
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
