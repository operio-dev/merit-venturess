import Reveal from "./Reveal";

const STORIES = [
  {
    quote:
      "I never worked at a big tech company and had no investor contacts. Merit looked at our retention curve and 2,000 paying users—and said yes in a week.",
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
    <section id="founder-stories" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="eyebrow">Founder stories</p>
          <h2 className="display mt-5 max-w-2xl text-4xl text-[#e6ebf4] sm:text-5xl">
            Extraordinary founders exist everywhere.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {STORIES.map(({ quote, initials, name, role, meta, gradient }, i) => (
            <Reveal key={name} delay={i * 90}>
              <figure className="card flex h-full flex-col p-9">
                <blockquote className="font-serif text-[19px] leading-relaxed text-[#dbe1ec]">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto border-t border-line pt-7">
                  <div className="mt-1 flex items-center gap-4">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold text-white"
                      style={{ background: gradient }}
                    >
                      {initials}
                    </span>
                    <div>
                      <p className="text-[15.5px] font-semibold text-fg">{name}</p>
                      <p className="mt-0.5 text-[14px] text-muted">{role}</p>
                      <p className="mt-1 text-[13.5px] text-accent">{meta}</p>
                    </div>
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
