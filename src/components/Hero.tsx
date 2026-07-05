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
    <div className="relative mx-auto mt-20 flex max-w-3xl items-center justify-center md:mt-24">
      <div aria-hidden className="orb-glow absolute -inset-24" />
      {imgOk ? (
        <img
          src="/orb.png"
          alt=""
          aria-hidden
          onError={() => setImgOk(false)}
          className="relative w-[320px] select-none md:w-[480px]"
          draggable={false}
        />
      ) : (
        <div aria-hidden className="orb-fallback relative h-[320px] w-[320px] md:h-[480px] md:w-[480px]" />
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-10 pt-40 md:pt-48">
      <Particles />

      <div className="relative mx-auto max-w-5xl px-5 text-center">
        <div className="mb-9 flex justify-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/70 px-4 py-2 text-sm text-[#c4ccd9]">
            <Sparkles size={15} className="text-accent" />
            We invest in execution, not pedigree
          </span>
        </div>

        <h1 className="display text-[42px] leading-[1.06] text-[#e6ebf4] sm:text-6xl md:text-7xl">
          The first Venture Capital built for founders,
          <span className="grad-text">not their networks.</span>
        </h1>

        <div className="mx-auto mt-9 max-w-2xl space-y-1.5 font-serif text-lg italic text-muted md:text-[21px]">
          <p>We don't care where you studied.</p>
          <p>We don't care who introduced you.</p>
          <p className="text-[#cfd6e2]">
            We care about one thing: can you build something people truly want?
          </p>
        </div>

        <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#apply"
            className="btn-grad inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-[16px] font-semibold"
          >
            Apply for Funding
            <ArrowRight size={18} />
          </a>
          <a
            href="#how-we-evaluate"
            className="btn-ghost inline-flex items-center rounded-xl px-7 py-3.5 text-[16px] font-medium"
          >
            How We Evaluate
          </a>
        </div>

        <Orb />
      </div>
    </section>
  );
}
