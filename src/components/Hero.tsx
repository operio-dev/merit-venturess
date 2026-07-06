import { useMemo, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

function Particles({ count = 22 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 3 + 1.5,
        delay: Math.random() * 5,
        duration: Math.random() * 4 + 4,
      })),
    [count]
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d) => (
        <span
          key={d.id}
          className="particle"
          style={{
            top: `${d.top}%`,
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

function Orb() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <div className="relative mx-auto mt-16 flex max-w-3xl justify-center px-6 pointer-events-none select-none">
      <div className="animate-float-slow orb-container">
        <div aria-hidden className="orb-glow" />
        {imgOk ? (
          <img
            src="/heroorb.png"
            alt="Abstract execution-driven intelligence visualization"
            onError={() => setImgOk(false)}
            className="h-auto w-[min(520px,80vw)] drop-shadow-2xl orb-image"
            draggable={false}
          />
        ) : (
          <div aria-hidden className="orb-fallback relative h-[320px] w-[320px] md:h-[480px] md:w-[480px]" />
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <Particles />

      <div className="relative mx-auto max-w-4xl px-5 text-center">
        
        <div className="mb-7 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-4 py-1.5 text-xs text-[#c4ccd9]">
            <Sparkles size={14} className="text-accent" />
            We invest in execution, not pedigree
          </span>
        </div>

        <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-[#e6ebf4] sm:text-6xl md:text-[68px]">
  A venture fund built for founders .{" "}
  <span className="grad-text">Not pedigree, network, or narrative.</span>
</h1>

<div className="mx-auto mt-8 max-w-xl space-y-1 font-serif text-lg italic text-muted sm:text-xl">
  <p>We back founders through evidence of execution. Not proximity, prestige, or introductions.</p>
  <p className="text-[#cfd6e2]">
  Can you build something people truly want? 
  </p>
</div>


        <div className="relative z-20 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#apply" className="btn-grad inline-flex items-center gap-2">
            Apply for Funding
            <ArrowRight size={14} className="opacity-90" />
          </a>
          <a href="#how-we-evaluate" className="btn-ghost inline-flex items-center">
            How We Evaluate
          </a>
        </div>

        <Orb />
      </div>
    </section>
  );
}
