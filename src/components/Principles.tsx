import { Zap, LineChart, Scale, Eye, Hourglass, FlaskConical } from "lucide-react";
import Reveal from "./Reveal";

const PRINCIPLES = [
  {
    icon: Zap,
    title: "Execution over pedigree",
    text: "What you've built tells us more than where you've been.",
  },
  {
    icon: LineChart,
    title: "Traction over storytelling",
    text: "A great narrative is nice. Real users are the proof.",
  },
  {
    icon: Scale,
    title: "Merit over connections",
    text: "You don't need a warm intro to reach us. You need results.",
  },
  {
    icon: Eye,
    title: "Vision over hype",
    text: "We back durable ideas, not the loudest room in the market.",
  },
  {
    icon: Hourglass,
    title: "Long-term thinking over quick exits",
    text: "We're patient capital for founders building for decades.",
  },
  {
    icon: FlaskConical,
    title: "Evidence over assumptions",
    text: "Every conviction we hold should be backed by data.",
  },
];

function handleMove(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

export default function Principles() {
  return (
    <section id="principles" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="eyebrow">Our principles</p>
          <h2 className="display mt-5 max-w-2xl text-4xl text-[#e6ebf4] sm:text-5xl">
            The convictions that guide every decision.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 70}>
              <article
                onMouseMove={handleMove}
                className="card card-spotlight h-full p-8 transition-colors duration-300 hover:border-[rgba(139,122,255,0.35)]"
              >
                <span className="icon-tile">
                  <Icon size={22} />
                </span>
                <h3 className="mt-8 font-display text-[19px] font-semibold text-fg">{title}</h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-muted">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
