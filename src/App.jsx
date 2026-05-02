const services = [
  {
    title: "Workshops",
    copy:
      "Half-day and full-day intensives for corporate teams, accelerator cohorts, and organizational off-sites. Every session follows the Somatic Strategy arc and delivers a tool participants take back to work the same day.",
  },
  {
    title: "Cohort Programs",
    copy:
      "Ongoing programs that build capacity over time. Built for organizations ready to invest in their people beyond a single event.",
  },
  {
    title: "Retreats",
    copy:
      "Half-day to two-day immersive experiences for teams ready to do the deeper work. Breathwork, somatic movement, values clarification, strategic wayfinding, and closing ceremony.",
  },
];

const arc = [
  ["01", "Arrive", "Regulate the room. Nervous system first before any agenda item."],
  ["02", "Move", "Somatic practice that shifts state through breath, body, and intentional movement."],
  ["03", "Excavate", "Strategic clarity work around values, patterns, and what is driving behavior."],
  ["04", "Commit", "Leave with a real tool and a real intention, not inspiration that evaporates."],
];

export default function App() {
  return (
    <main className="min-h-screen bg-[#F5F1EA] text-[#3A4A42]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="text-sm font-medium tracking-[0.28em]">THE WILLOW WELL</div>
        <a href="#book" className="rounded-full bg-[#C8943E] px-5 py-3 text-sm font-medium text-white">
          Book a Discovery Call
        </a>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-[#8FA68A]">
            Somatic Strategy for high-performing teams
          </p>
          <h1 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] text-[#3A4A42] md:text-7xl">
            Most organizations optimize everything except the human doing the work.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-[#3A4A42]/80">
            Workshops, cohort programs, and retreats designed to build capacity that lasts.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#book" className="rounded-full bg-[#C8943E] px-7 py-4 text-center text-sm font-medium text-white">
              Book a Discovery Call
            </a>
            <a href="#services" className="rounded-full border border-[#3A4A42]/25 px-7 py-4 text-center text-sm font-medium">
              Explore Services
            </a>
          </div>
        </div>

        <div className="min-h-[420px] rounded-[2rem] bg-[#3A4A42] p-8 text-[#F5F1EA] shadow-2xl">
          <div className="h-full rounded-[1.5rem] border border-[#F5F1EA]/20 bg-[radial-gradient(circle_at_30%_20%,rgba(200,148,62,0.35),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(143,166,138,0.45),transparent_35%),linear-gradient(145deg,#3A4A42,#26332D)] p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-[#C8943E]">Durham, NC</p>
            <p className="mt-44 text-3xl leading-tight">
              Clarity and capacity begin in the body.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-3xl leading-tight tracking-[-0.03em] md:text-5xl">
          Your people aren't underperforming. They're under-resourced at the nervous system level.
          And no amount of strategic planning fixes a dysregulated team. Somatic Strategy is how you change that.
        </p>
      </section>

      <section className="bg-[#3A4A42] px-6 py-24 text-[#F5F1EA]">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#C8943E]">The Method</p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">Somatic Strategy</h2>
            <p className="text-xl leading-8 text-[#F5F1EA]/80">
              Somatic Strategy builds organizational performance capacity through the body by regulating the nervous system so leaders and teams can think clearly, decide confidently, and sustain output without burning out.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-4">
            {arc.map(([num, title, copy]) => (
              <div key={title} className="rounded-3xl border border-[#F5F1EA]/15 bg-[#F5F1EA]/5 p-6">
                <p className="text-sm font-medium text-[#C8943E]">{num}</p>
                <h3 className="mt-5 text-2xl font-medium">{title}</h3>
                <p className="mt-4 leading-7 text-[#F5F1EA]/75">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#8FA68A]">Services</p>
        <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">
          Built for teams carrying more than their systems can hold.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-[#3A4A42]/10 bg-white/35 p-7 shadow-sm">
              <h3 className="text-2xl font-medium">{service.title}</h3>
              <p className="mt-5 leading-7 text-[#3A4A42]/75">{service.copy}</p>
              <a href="#book" className="mt-8 inline-block text-sm font-medium text-[#C8943E]">
                Let's Talk
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {["High-growth companies", "ESOs and accelerator programs", "Mission-driven nonprofits"].map((item) => (
            <div key={item} className="rounded-3xl bg-[#8FA68A]/20 p-7">
              <h3 className="text-2xl font-medium">{item}</h3>
              <p className="mt-4 leading-7 text-[#3A4A42]/75">
                For organizations ready to move beyond generic wellness and build sustainable capacity into how people work.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F5F1EA] px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#3A4A42] p-10 text-[#F5F1EA] md:p-16">
          <p className="text-3xl leading-tight tracking-[-0.03em] md:text-5xl">
            “We brought The Willow Well in for a startup founder retreat, and it was anything but typical.”
          </p>
          <p className="mt-8 leading-8 text-[#F5F1EA]/75">
            Lee's intentional approach of combining movement, play, breathwork, internal dialogue, and rest helped create real clarity and alignment. Personally, I walked away with clarity on a challenge I'd been circling for two years and a clear path forward.
          </p>
          <p className="mt-8 text-sm uppercase tracking-[0.24em] text-[#C8943E]">
            Laura Zabinski, Executive Director, American Underground
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#8FA68A]">About Lee</p>
          <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] md:text-6xl">Not a guru. A guide.</h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-[#3A4A42]/80">
          <p>
            I'm not an executive coach. I'm not a guru. I'm a guide, and there's a meaningful difference. The Willow Well is built from everything I know about what it actually costs to operate from survival mode at the level my clients operate at, and what shifts when you have the right tools. Not inspiration. Actual capacity.
          </p>
          <p>
            Lee Gray is the founder of The Willow Well and Associate Director at Knox St Studios. She holds a 200RYT yoga certification, Certified Breathwork Facilitation, and is a Martha Beck Wayfinder Coach in training. She is a Leadership Triangle Goodmon Fellow, Co-Chair of Member Engagement at Durham Rotary Club, and has spent 20+ years working across corporate, nonprofit, and entrepreneurship ecosystems.
          </p>
        </div>
      </section>

      <section id="book" className="bg-[#3A4A42] px-6 py-24 text-[#F5F1EA]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#C8943E]">Start here</p>
          <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] md:text-6xl">
            Ready to build capacity that lasts?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#F5F1EA]/75">
            Every engagement starts with a 20-minute discovery call. No pitch. Just a real conversation.
          </p>
          <div className="mt-10 rounded-3xl border border-[#F5F1EA]/15 bg-[#F5F1EA]/5 p-6 text-left">
            <p className="text-lg font-medium">Discovery Call Request</p>
            <p className="mt-3 text-[#F5F1EA]/70">
              Form integration placeholder: name, organization, role, email, phone, service interest, timeline, budget range, decision-maker status, and what success would look like.
            </p>
            <p className="mt-4 text-sm text-[#C8943E]">
              Same-week engagements are reviewed by request only.
            </p>
          </div>
          <a href="mailto:info@thewillowwellco.com" className="mt-8 inline-block rounded-full bg-[#C8943E] px-8 py-4 text-sm font-medium text-white">
            Book a Discovery Call
          </a>
          <p className="mt-8 text-sm text-[#F5F1EA]/70">
            info@thewillowwellco.com • 910.691.2336 • Durham, NC — available for travel
          </p>
        </div>
      </section>
    </main>
  );
}
