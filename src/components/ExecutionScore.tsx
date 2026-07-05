import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const METRICS = [
  { label: "Product progress", value: 92 },
  { label: "Growth consistency", value: 79 },
  { label: "Retention", value: 84 },
  { label: "Long-term execution", value: 86 },
  { label: "Customer validation", value: 88 },
  { label: "Founder commitment", value: 95 },
  { label: "Learning speed", value: 90 },
];

const SCORE = 89;
const RADIUS = 74;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function useInView<T extends HTMLElement>(threshold = 0.35) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function ScoreRing({ animate }: { animate: boolean }) {
  const offset = animate ? CIRCUMFERENCE * (1 - SCORE / 100) : CIRCUMFERENCE;

  return (
    <div className="card flex flex-col items-center justify-center p-10">
      <div className="relative h-[180px] w-[180px]">
        <svg viewBox="0 0 180 180" className="h-full w-full -rotate-90">
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#35d6ec" />
              <stop offset="100%" stopColor="#3e7bfa" />
            </linearGradient>
          </defs>
          <circle
            cx="90"
            cy="90"
            r={RADIUS}
            fill="none"
            stroke="rgba(148,163,184,0.15)"
            strokeWidth="10"
          />
          <circle
            className="ring-progress"
            cx="90"
            cy="90"
            r={RADIUS}
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-5xl font-semibold text-fg">{SCORE}</span>
          <span className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
            Execution Score
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ExecutionScore() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="execution-score" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="eyebrow">The Execution Score</p>
          <h2 className="display mt-5 max-w-2xl text-4xl text-[#e6ebf4] sm:text-5xl">
            One score. Built entirely from evidence.
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
            We synthesize real signals into a single, transparent measure of how well a team
            turns effort into outcomes customers value.
          </p>
        </Reveal>

        <div ref={ref} className="mt-14 grid items-center gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
          <Reveal>
            <ScoreRing animate={inView} />
          </Reveal>

          <Reveal delay={100}>
            <div className="grid gap-x-14 gap-y-8 sm:grid-cols-2">
              {METRICS.map(({ label, value }) => (
                <div key={label}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-[15.5px] text-[#d6dce7]">{label}</span>
                    <span className="text-[14px] text-muted">{value}</span>
                  </div>
                  <div className="bar-track mt-3">
                    <div
                      className="bar-fill"
                      style={{ width: inView ? `${value}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
