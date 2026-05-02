import { useEffect, useState } from "react";

const NAV = [
  { id: "method", label: "Method" },
  { id: "services", label: "Services" },
  { id: "fit", label: "Fit" },
  { id: "about", label: "About" },
  { id: "book", label: "Book" },
];

const ARC = [
  {
    num: "01",
    title: "Arrive",
    copy: "Regulate the room. Nervous system first, before any agenda item.",
  },
  {
    num: "02",
    title: "Move",
    copy: "Somatic practice that shifts state through breath, body, and intentional movement.",
  },
  {
    num: "03",
    title: "Excavate",
    copy: "Strategic clarity work around values, patterns, and what is driving behavior.",
  },
  {
    num: "04",
    title: "Commit",
    copy: "Leave with a real tool and a real intention, not inspiration that evaporates.",
  },
];

const SERVICES = [
  {
    eyebrow: "Half-day · Full-day",
    title: "Workshops",
    copy:
      "Intensives for corporate teams, accelerator cohorts, and organizational off-sites. Every session follows the Somatic Strategy arc and delivers a tool participants take back to work the same day. Custom-scoped for your context.",
  },
  {
    eyebrow: "Multi-month",
    title: "Cohort Programs",
    copy:
      "Ongoing programs that build capacity over time. Designed for organizations ready to invest in their people beyond a single event — measurable behavioral change, not a one-off.",
  },
  {
    eyebrow: "Half-day · Two-day",
    title: "Retreats",
    copy:
      "Immersive engagements for teams ready to do the deeper work: breathwork, somatic movement, values clarification, strategic wayfinding, closing ceremony. The engagements teams mark time by.",
  },
];

const FIT = [
  {
    title: "High-growth companies",
    copy: "People & Culture leaders, CHROs, and L&D directors at organizations where the team is excellent but running on fumes.",
  },
  {
    title: "ESOs & accelerators",
    copy: "Founder ecosystems and cohort programs that need their leaders to think clearly and decide confidently under pressure.",
  },
  {
    title: "Mission-driven nonprofits",
    copy: "Teams carrying the weight of the work — where compassion fatigue is a load-bearing wall, not a wellness footnote.",
  },
];

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

function Wordmark() {
  return (
    <a href="#top" className="group inline-flex items-baseline gap-3" aria-label="The Willow Well home">
      <span
        aria-hidden="true"
        className="block h-[1.05em] w-px translate-y-[0.15em] bg-[var(--c-gold)] transition-all group-hover:h-[1.4em]"
      />
      <span className="font-display text-[15px] uppercase tracking-[0.34em] text-[var(--c-slate)]">
        The Willow Well
      </span>
    </a>
  );
}

function Nav() {
  const active = useScrollSpy(NAV.map((n) => n.id));

  return (
    <nav aria-label="Primary" className="hidden md:block">
      <ul className="flex items-center gap-8">
        {NAV.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`relative text-sm tracking-wide transition-colors ${
                active === item.id
                  ? "text-[var(--c-slate)]"
                  : "text-[var(--c-slate)]/55 hover:text-[var(--c-slate)]"
              }`}
            >
              {item.label}
              <span
                aria-hidden="true"
                className={`absolute -bottom-1 left-0 h-px bg-[var(--c-gold)] transition-all ${
                  active === item.id ? "w-full" : "w-0"
                }`}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function SectionLabel({ children, tone = "sage" }) {
  const color = tone === "gold" ? "text-[var(--c-gold)]" : "text-[var(--c-sage)]";

  return (
    <p className={`text-[11px] font-medium uppercase tracking-[0.36em] ${color}`}>
      <span aria-hidden="true" className="mr-3 inline-block h-px w-6 align-middle bg-current opacity-60" />
      {children}
    </p>
  );
}

function GoldButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[var(--c-gold)] px-7 py-4 text-sm font-medium tracking-wide text-white transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--c-gold)] ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span aria-hidden="true" className="relative z-10 transition-transform group-hover:translate-x-1">
        →
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
    </a>
  );
}

function GhostButton({ href, children, className = "", invert = false }) {
  const base = invert
    ? "border-[var(--c-cream)]/30 text-[var(--c-cream)] hover:border-[var(--c-cream)]/60"
    : "border-[var(--c-slate)]/25 text-[var(--c-slate)] hover:border-[var(--c-slate)]/55";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-3 rounded-full border px-7 py-4 text-sm font-medium tracking-wide transition-colors ${base} ${className}`}
    >
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-[var(--c-cream)] text-[var(--c-slate)] antialiased">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[var(--c-slate)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--c-cream)]"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-[var(--c-slate)]/10 bg-[var(--c-cream)]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Wordmark />
          <Nav />
          <a
            href="#book"
            className="rounded-full border border-[var(--c-slate)]/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--c-slate)] transition-colors hover:border-[var(--c-gold)] hover:text-[var(--c-gold)]"
          >
            Book Call
          </a>
        </div>
      </header>

      <main>
        <section id="hero" className="relative overflow-hidden texture-cream">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.75]"
            style={{
              background:
                "radial-gradient(1100px 600px at 85% -10%, rgba(143,166,138,0.28), transparent 55%), radial-gradient(700px 480px at -10% 110%, rgba(200,148,62,0.18), transparent 55%)",
            }}
          />

          <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-28 pt-20 lg:grid-cols-12 lg:pb-36 lg:pt-28">
            <div className="lg:col-span-8">
              <SectionLabel>Somatic Strategy for high-performing teams</SectionLabel>

              <h1 className="mt-7 font-display text-[2.6rem] font-light leading-[1.02] tracking-[-0.025em] text-[var(--c-slate)] sm:text-[3.4rem] md:text-[4.4rem] lg:text-[5.6rem]">
                Most organizations <em className="italic text-[var(--c-gold)]/95">optimize</em> everything
                <br className="hidden sm:block" /> except the human doing the work.
              </h1>

              <p className="mt-10 max-w-2xl text-lg leading-[1.7] text-[var(--c-slate)]/75 md:text-xl">
                Workshops, cohort programs, and retreats designed to build capacity that lasts for leaders and
                teams excellent at their work and running on fumes.
              </p>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <GoldButton href="#book">Book a Discovery Call</GoldButton>
                <GhostButton href="#services">Explore Services</GhostButton>
              </div>
            </div>

            <aside className="relative lg:col-span-4">
              <div className="relative h-full min-h-[360px] overflow-hidden rounded-[2rem] border border-[var(--c-slate)]/10 bg-[var(--c-slate)] p-1 shadow-2xl shadow-[var(--c-slate)]/10">
                <div
                  className="relative flex h-full flex-col justify-between rounded-[1.7rem] p-8 text-[var(--c-cream)]"
                  style={{
                    background:
                      "radial-gradient(420px 260px at 25% 15%, rgba(200,148,62,0.32), transparent 60%), radial-gradient(380px 280px at 85% 5%, rgba(143,166,138,0.42), transparent 60%), linear-gradient(160deg,#3A4A42 0%,#2A3731 100%)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--c-gold)]">Durham, NC</p>
                    <span aria-hidden="true" className="text-[10px] tracking-[0.3em] text-[var(--c-cream)]/40">
                      EST. 2024
                    </span>
                  </div>

                  <div>
                    <p className="font-display text-[1.6rem] leading-[1.18] tracking-[-0.01em]">
                      Clarity and capacity begin in the body.
                    </p>
                    <div className="mt-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[var(--c-cream)]/55">
                      <span className="h-px w-8 bg-[var(--c-gold)]" />
                      A practice by Lee Gray
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="border-y border-[var(--c-slate)]/10 bg-[var(--c-cream)]/70">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-3 px-6 py-4 text-[11px] uppercase tracking-[0.3em] text-[var(--c-slate)]/55">
              <span>Workshops</span>
              <span aria-hidden="true">·</span>
              <span>Cohort Programs</span>
              <span aria-hidden="true">·</span>
              <span>Retreats</span>
              <span aria-hidden="true">·</span>
              <span>Available for travel</span>
            </div>
          </div>
        </section>

        <section id="problem" className="mx-auto max-w-5xl px-6 py-28 md:py-36">
          <SectionLabel>The Problem</SectionLabel>
          <p className="mt-8 font-display text-[1.9rem] font-light leading-[1.18] tracking-[-0.02em] text-[var(--c-slate)] sm:text-[2.4rem] md:text-[3.1rem]">
            Your people aren’t underperforming. They’re{" "}
            <span className="relative">
              under-resourced
              <span aria-hidden="true" className="absolute inset-x-0 bottom-1 -z-10 h-2 bg-[var(--c-gold)]/30" />
            </span>{" "}
            at the nervous system level. And no amount of strategic planning fixes a dysregulated team.
            Somatic Strategy is how you change that.
          </p>
        </section>

        <section id="method" className="bg-[var(--c-slate)] text-[var(--c-cream)]">
          <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <SectionLabel tone="gold">The Method</SectionLabel>
                <h2 className="mt-7 font-display text-[2.4rem] font-light leading-[1.02] tracking-[-0.02em] text-[var(--c-cream)] md:text-[3.6rem]">
                  Somatic <em className="italic text-[var(--c-gold)]">Strategy</em>
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-lg leading-[1.8] text-[var(--c-cream)]/80 md:text-xl">
                  Somatic Strategy builds organizational performance capacity through the body by regulating
                  the nervous system so leaders and teams can think clearly, decide confidently, and sustain
                  output without burning out.
                </p>
                <p className="mt-6 text-base leading-[1.8] text-[var(--c-cream)]/60">
                  Not a yoga class. Not executive coaching. Not corporate wellness. Operational infrastructure
                  for the human doing the work.
                </p>
              </div>
            </div>

            <div id="arc" className="mt-20 md:mt-24">
              <div className="mb-8 flex items-end justify-between">
                <SectionLabel tone="gold">The Arc</SectionLabel>
                <span className="hidden text-[11px] uppercase tracking-[0.3em] text-[var(--c-cream)]/45 md:inline">
                  Every session · Every engagement
                </span>
              </div>
              <div className="grid gap-px overflow-hidden rounded-3xl bg-[var(--c-cream)]/10 md:grid-cols-4">
                {ARC.map((step) => (
                  <div key={step.title} className="group relative bg-[var(--c-slate)] p-8 transition-colors hover:bg-[#324039]">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-3xl text-[var(--c-gold)]">{step.num}</span>
                      <span
                        aria-hidden="true"
                        className="h-px w-10 bg-[var(--c-cream)]/20 transition-all group-hover:w-16 group-hover:bg-[var(--c-gold)]"
                      />
                    </div>
                    <h3 className="mt-10 font-display text-2xl font-light tracking-[-0.01em] text-[var(--c-cream)]">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-[1.7] text-[var(--c-cream)]/70">{step.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-28 md:py-36">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionLabel>Services</SectionLabel>
              <h2 className="mt-7 font-display text-[2.4rem] font-light leading-[1.02] tracking-[-0.02em] md:text-[3.4rem]">
                Built for teams carrying more than their systems can hold.
              </h2>
            </div>
            <p className="text-lg leading-[1.8] text-[var(--c-slate)]/75 lg:col-span-7 lg:pt-16">
              Three engagement shapes. One method. Every offering custom-scoped to the room it’s walking into.
              Never a template. Never a wellness add-on.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {SERVICES.map((service, i) => (
              <article
                key={service.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-[var(--c-slate)]/10 bg-white/40 p-8 transition-all hover:-translate-y-1 hover:border-[var(--c-gold)]/40 hover:bg-white/60"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm text-[var(--c-slate)]/45">0{i + 1}</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--c-sage)]">{service.eyebrow}</span>
                </div>
                <h3 className="mt-10 font-display text-3xl font-light tracking-[-0.015em]">{service.title}</h3>
                <p className="mt-5 flex-1 text-[15px] leading-[1.75] text-[var(--c-slate)]/75">{service.copy}</p>
                <a href="#book" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--c-gold)]">
                  Let’s talk <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="fit" className="bg-[var(--c-cream)]">
          <div className="mx-auto max-w-7xl px-6 py-28 md:py-32">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <SectionLabel>Who this is for</SectionLabel>
                <h2 className="mt-7 font-display text-[2.2rem] font-light leading-[1.05] tracking-[-0.02em] md:text-[3rem]">
                  Built for organizations ready to move beyond generic wellness.
                </h2>
              </div>
              <div className="lg:col-span-7">
                <ul className="grid gap-px overflow-hidden rounded-3xl bg-[var(--c-slate)]/10">
                  {FIT.map((item) => (
                    <li key={item.title} className="bg-[var(--c-cream)] p-7 transition-colors hover:bg-[var(--c-sage)]/15">
                      <div className="flex items-baseline justify-between gap-6">
                        <h3 className="font-display text-xl font-light tracking-[-0.01em]">{item.title}</h3>
                        <span aria-hidden="true" className="text-[var(--c-gold)]">+</span>
                      </div>
                      <p className="mt-3 text-[15px] leading-[1.7] text-[var(--c-slate)]/70">{item.copy}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="proof" className="px-6 py-24 md:py-32">
          <figure className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[var(--c-slate)] p-10 text-[var(--c-cream)] md:p-16">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-6 -top-16 select-none font-display text-[18rem] leading-none text-[var(--c-gold)]/15"
            >
              “
            </span>
            <SectionLabel tone="gold">Field note</SectionLabel>
            <blockquote className="mt-7 font-display text-[1.7rem] font-light leading-[1.25] tracking-[-0.015em] text-[var(--c-cream)] md:text-[2.4rem]">
              We brought The Willow Well in for a startup founder retreat, and it was anything but typical.
            </blockquote>
            <p className="mt-8 max-w-3xl text-[15px] leading-[1.85] text-[var(--c-cream)]/75">
              Lee’s intentional approach of combining movement, play, breathwork, internal dialogue, and rest
              helped create real clarity and alignment. Personally, I walked away with clarity on a challenge
              I’d been circling for two years and a clear path forward, and I’m incredibly grateful for the experience.
            </p>
            <figcaption className="mt-10 flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-[var(--c-gold)]">
              <span aria-hidden="true" className="h-px w-10 bg-[var(--c-gold)]" />
              Laura Zabinski · Executive Director, American Underground
            </figcaption>
          </figure>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-28 md:py-32">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionLabel>About Lee</SectionLabel>
              <h2 className="mt-7 font-display text-[2.4rem] font-light leading-[1.02] tracking-[-0.02em] md:text-[3.6rem]">
                Not a guru. <br />
                <em className="italic text-[var(--c-gold)]">A guide.</em>
              </h2>
              <div className="mt-10 space-y-3 text-sm leading-[1.85] text-[var(--c-slate)]/70">
                <p className="font-medium uppercase tracking-[0.12em] text-[var(--c-slate)]">Credentials</p>
                <ul className="space-y-2">
                  <li>200RYT Yoga Certification</li>
                  <li>Certified Breathwork Facilitation</li>
                  <li>Martha Beck Wayfinder Coach, in training</li>
                  <li>Leadership Triangle Goodmon Fellow</li>
                  <li>Co-Chair, Member Engagement, Durham Rotary Club</li>
                  <li>Associate Director, Knox St Studios</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8 text-lg leading-[1.85] text-[var(--c-slate)]/80 lg:col-span-7">
              <p className="font-display text-[1.4rem] font-light leading-[1.4] tracking-[-0.01em] text-[var(--c-slate)] md:text-[1.7rem]">
                “I’m not an executive coach. I’m not a guru. I’m a guide, and there’s a meaningful difference.”
              </p>
              <p>
                The Willow Well is built from everything I know about what it actually costs to operate from survival
                mode at the level my clients operate at, and what shifts when you have the right tools. Not inspiration.
                Actual capacity.
              </p>
              <p>
                Lee Gray is the founder of The Willow Well and Associate Director at Knox St Studios. She has spent
                20+ years working across corporate, nonprofit, and entrepreneurship ecosystems, and now works with
                leaders and teams who are excellent at their craft and ready to stop running on fumes.
              </p>
            </div>
          </div>
        </section>

        <section id="book" className="bg-[var(--c-slate)] text-[var(--c-cream)]">
          <div className="relative mx-auto max-w-5xl px-6 py-28 text-center md:py-36">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                background: "radial-gradient(600px 320px at 50% -10%, rgba(200,148,62,0.22), transparent 60%)",
              }}
            />
            <div className="relative">
              <SectionLabel tone="gold">Start here</SectionLabel>
              <h2 className="mx-auto mt-7 max-w-3xl font-display text-[2.4rem] font-light leading-[1.02] tracking-[-0.02em] text-[var(--c-cream)] md:text-[3.8rem]">
                Ready to build capacity <br className="hidden md:block" />
                <em className="italic text-[var(--c-gold)]">that lasts?</em>
              </h2>
              <p className="mx-auto mt-8 max-w-xl text-lg leading-[1.7] text-[var(--c-cream)]/75">
                Every engagement starts with a 20-minute discovery call. No pitch. Just a real conversation about
                what your team needs and whether this is the right room for it.
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <GoldButton href="mailto:info@thewillowwellco.com?subject=Discovery%20Call%20Request">
                  Request a Discovery Call
                </GoldButton>
                <GhostButton href="mailto:info@thewillowwellco.com" invert>
                  Email directly
                </GhostButton>
              </div>

              <p className="mt-10 text-[11px] uppercase tracking-[0.3em] text-[var(--c-cream)]/50">
                Same-week engagements are reviewed by request only
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--c-slate)]/10 bg-[var(--c-cream)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-xs text-sm leading-[1.75] text-[var(--c-slate)]/65">
              Somatic Strategy for high-performing teams. Workshops, cohort programs, and retreats, based in Durham,
              NC and available for travel.
            </p>
          </div>

          <div className="text-sm leading-[1.9] text-[var(--c-slate)]/75">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--c-slate)]/50">Contact</p>
            <p className="mt-3">
              <a className="hover:text-[var(--c-gold)]" href="mailto:info@thewillowwellco.com">
                info@thewillowwellco.com
              </a>
            </p>
            <p>
              <a className="hover:text-[var(--c-gold)]" href="tel:+19106912336">
                910.691.2336
              </a>
            </p>
            <p className="text-[var(--c-slate)]/55">Durham, NC, available for travel</p>
          </div>

          <div className="text-sm leading-[1.9] text-[var(--c-slate)]/75">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--c-slate)]/50">Navigate</p>
            <ul className="mt-3 space-y-1">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a className="hover:text-[var(--c-gold)]" href={`#${item.id}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--c-slate)]/10">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 text-[11px] uppercase tracking-[0.3em] text-[var(--c-slate)]/45 md:flex-row md:items-center">
            <span>© {new Date().getFullYear()} The Willow Well</span>
            <span>Clarity and capacity begin in the body.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
