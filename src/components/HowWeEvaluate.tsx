import { FileText, Plug, BrainCircuit, Users, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const INTEGRATIONS = [
  "Stripe",
  "GitHub",
  "Google Analytics",
  "Shopify",
  "Mixpanel",
  "App Store",
  "Play Store",
];

const STEPS = [
  {
    icon: FileText,
    title: "Submit your startup",
    text: "A short, honest application. No deck polish required.",
  },
  {
    icon: Plug,
    title: "Connect your metrics",
    text: "Optional integrations pull real data straight from the source.",
    pills: INTEGRATIONS,
  },
  {
    icon: BrainCircuit,
    title: "AI analyzes execution",
    text: "We evaluate signal, not storytelling—data over presentation.",
  },
  {
    icon: Users,
    title: "Investment committee reviews",
    text: "Humans review the strongest cases surfaced by evidence.",
  },
  {
    icon: CheckCircle2,
    title: "Funding decision",
    text: "A clear answer, grounded in what you've actually built.",
  },
];

export default function HowWeEvaluate() {
  return (
    <section id="how-we-evaluate" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="eyebrow">How we evaluate</p>
          <h2 className="display mt-5 max-w-3xl text-4xl text-[#e6ebf4] sm:text-5xl">
            A process where data matters more than presentation.
          </h2>
        </Reveal>

        <div className="relative mt-16 max-w-3xl">
          <div aria-hidden className="timeline-line" />
          <ol className="space-y-12">
            {STEPS.map(({ icon: Icon, title, text, pills }, i) => (
              <li key={title}>
                <Reveal delay={i * 80}>
                  <div className="relative flex gap-7">
                    <span className="icon-tile relative z-10 shrink-0 bg-panel">
                      <Icon size={22} />
                    </span>
                    <div className="pt-1">
                      <h3 className="font-display text-[20px] font-semibold text-fg">
                        <span className="mr-3 text-[15px] font-semibold text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {title}
                      </h3>
                      <p className="mt-2.5 text-[16px] leading-relaxed text-muted">{text}</p>
                      {pills && (
                        <div className="mt-5 flex flex-wrap gap-2.5">
                          {pills.map((p) => (
                            <span
                              key={p}
                              className="rounded-full border border-line bg-panel/60 px-4 py-1.5 text-[13.5px] text-[#c4ccd9]"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
