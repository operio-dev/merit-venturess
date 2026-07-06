import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "Do I need an introduction?",
    a: "No. There are no warm intros required—apply directly and let your work speak.",
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
    a: "Yes. Solo founders are welcome and evaluated on the same evidence-based criteria.",
  },
  {
    q: "What matters most?",
    a: "Evidence that customers genuinely value what you're building—paying users, retention, growth, engagement, or adoption.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <Reveal>
            <p className="eyebrow">FAQ</p>
          </Reveal>
          <Reveal delay={50}>
            <h2 className="display mt-5 text-3xl text-[#e6ebf4] sm:text-4xl">Straight answers.</h2>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="mt-12">
            {FAQS.map(({ q, a }, i) => {
              const isOpen = open === i;
              return (
                <div key={q} className="border-b border-line">
                  <button
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-medium text-fg">{q}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-muted transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                    <div>
                      <p className="pb-5 text-[15px] leading-relaxed text-muted">{a}</p>
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
