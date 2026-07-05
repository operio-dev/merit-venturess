import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

// NOTE: the answers below are placeholders written in the site's voice.
// Replace them with the original copy from Lovable if it differs.
const FAQS = [
  {
    q: "Do I need an introduction?",
    a: "No. Cold applications go through exactly the same process as everyone else's. That's the whole point of Merit.",
  },
  {
    q: "Do I need an Ivy League degree?",
    a: "No. Where you studied has no bearing on our decision.",
  },
  {
    q: "Do I need previous exits?",
    a: "No. First-time founders are just as welcome as repeat founders.",
  },
  {
    q: "Can solo founders apply?",
    a: "Yes. We evaluate execution, not team size. Some of the strongest applications we see come from solo founders.",
  },
  {
    q: "What matters most?",
    a: "Evidence that customers genuinely value what you're building: a working product, real users, and measurable signals that people want what you're building.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow">FAQ</p>
            <h2 className="display mt-5 text-4xl text-[#e6ebf4] sm:text-5xl">Straight answers.</h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14">
            {FAQS.map(({ q, a }, i) => {
              const isOpen = open === i;
              return (
                <div key={q} className="border-b border-line">
                  <button
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[17px] font-semibold text-fg">{q}</span>
                    <ChevronDown
                      size={19}
                      className={`shrink-0 text-muted transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                    <div>
                      <p className="pb-6 text-[15.5px] leading-relaxed text-muted">{a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
