import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const METRICS = [
  { label: "Product progress", value: 92 },
  { label: "Customer validation", value: 88 },
  { label: "Growth consistency", value: 79 },
  { label: "Founder commitment", value: 95 },
  { label: "Retention", value: 84 },
  { label: "Learning speed", value: 90 },
  { label: "Long-term execution", value: 86 },
];

const SCORE = 89;
const SIZE = 220; // Dimensione esatta di Lovable
const STROKE = 12; // Spessore anello Lovable
const RADIUS = (SIZE - STROKE) / 2;
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
    // Rimosso il box pesante .card. Ora il cerchio fluttua libero come su Lovable
    <div className="relative flex items-center justify-center py-6">
      
      {/* Effetto alone luminoso dietro il cerchio (Il bagliore Lovable che mancava) */}
      <div 
        className="absolute h-48 w-48 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "linear-gradient(135deg, #6d8cff, #b06cf7)" }}
      />
      
      {/* Grafico SVG proporzionato a 220px */}
      <div className="relative h-[220px] w-[220px] z-10">
        <svg viewBox="0 0 220 220" className="h-full w-full -rotate-90">
          <defs>
            <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6d8cff" />
              <stop offset="100%" stopColor="#b06cf7" />
            </linearGradient>
          </defs>
          <circle
            cx="110"
            cy="110"
            r={RADIUS}
            fill="none"
            stroke="rgba(148,163,184,0.1)"
            strokeWidth={STROKE}
          />
          <circle
            className="ring-progress"
            cx="110"
            cy="110"
            r={RADIUS}
            fill="none"
            stroke="url(#scoreGrad)"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-5xl font-semibold tracking-tight text-fg">{SCORE}</span>
          <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
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
    <section id="execution-score" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <Reveal>
            <p className="font-display text-xs font-medium uppercase tracking-[0.25em] text-[#4c8dff]">
              The Execution Score
            </p>
            <h2 className="display mt-5 text-4xl text-[#e6ebf4] sm:text-5xl">
              One score. Built entirely from evidence.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-muted">
              We synthesize real signals into a single, transparent measure of how well a team
              turns effort into outcomes customers value.
            </p>
          </Reveal>
        </div>

        {/* Layout a due colonne perfettamente allineato e bilanciato */}
        <div ref={ref} className="mt-16 grid items-center gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
          <Reveal>
            <ScoreRing animate={inView} />
          </Reveal>

          <Reveal delay={100}>
            <div className="grid gap-x-12 gap-y-6 sm:grid-cols-2">
              {METRICS.map(({ label, value }) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-[#edf1f8]/90 font-normal">{label}</span>
                    <span className="font-display text-muted font-normal">{value}</span>
                  </div>
                  {/* Barre di avanzamento ad altezza ridotta e arrotondate in stile Lovable */}
                  <div className="h-2 overflow-hidden rounded-full bg-slate-800/40">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: inView ? `${value}%` : "0%",
                        background: "linear-gradient(90deg, #6d8cff, #b06cf7)"
                      }}
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
