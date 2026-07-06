import Reveal from "./Reveal";

const STORIES = [
  {
    quote:
      "I never worked at a big tech company and had no investor contacts. Merit looked at our retention curve and 2,000 paying users and said yes in a week.",
    initials: "AO",
    name: "Amara Okafor",
    role: "Founder, Ledgerly",
    meta: "Self-taught · Bootstrapped to $40k MRR",
    gradient: "linear-gradient(135deg, #7f9dff, #c98df6)",
  },
  {
    quote:
      "Every other fund asked who introduced me. Merit connected our GitHub and Stripe, saw the growth, and evaluated the work itself.",
    initials: "DF",
    name: "Diego Fernández",
    role: "Solo founder, Cadence Dev Tools",
    meta: "Open-source · 18k stars, 300 teams",
    gradient: "linear-gradient(135deg, #8f8bff, #e07ce8)",
  },
  {
    quote:
      "No accelerator, no degree from a name school. Just a product people couldn't stop using. For the first time that was enough.",
    initials: "PN",
    name: "Priya Nandakumar",
    role: "Founder, Rootwork",
    meta: "First-time founder · 92% weekly retention",
    gradient: "linear-gradient(135deg, #9a86ff, #d982f2)",
  },
];

export default function FounderStories() {
  return (
    <section id="founder-stories" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">Founder stories</p>
          </Reveal>
          <Reveal delay={50}>
            <h2 className="display mt-5 text-3xl text-[#e6ebf4] sm:text-5xl">
              Extraordinary founders exist everywhere.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {STORIES.map(({ quote, initials, name, role, meta, gradient }, i) => (
            <Reveal key={name} delay={i * 80}>
              <figure className="card flex h-full flex-col p-7">
                <blockquote className="flex-1 font-serif text-lg leading-relaxed text-[#dbe1ec]">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3.5 border-t border-line pt-6">
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-[13px] font-semibold text-white"
                    style={{ background: gradient }}
                  >
                    {initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-fg">{name}</p>
                    <p className="text-xs text-muted">{role}</p>
                    <p className="mt-0.5 text-[11px] font-medium text-accent">{meta}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
