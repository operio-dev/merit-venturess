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
    <div className="relative mx-auto mt-16 flex max-w-3xl items-center justify-center">
      <div aria-hidden className="orb-glow absolute -inset-24 opacity-35" />
      {imgOk ? (
        <img
          src="/heroorb.png"
          alt="Abstract execution-driven intelligence visualization"
          aria-hidden
          onError={() => setImgOk(false)}
          className="relative h-auto w-[min(520px,80vw)] select-none drop-shadow-2xl"
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
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <Particles />

      {/* Ridotto max-w da 5xl a 4xl come Lovable */}
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        
        {/* Badge superiore con margini ridotti */}
        <div className="mb-7 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-4 py-1.5 text-xs text-[#c4ccd9]">
            <Sparkles size={14} className="text-accent" />
            We invest in execution, not pedigree
          </span>
        </div>

        {/* Titolo rimpicciolito usando le classi esatte di Lovable */}
        <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-[#e6ebf4] sm:text-6xl md:text-[68px]">
          The first Venture Capital built for founders—
          <span className="grad-text">not their networks.</span>
        </h1>

        {/* Sottotitolo corsivo con max-w limitata per andare a capo identico */}
        <div className="mx-auto mt-8 max-w-xl space-y-1 font-serif text-lg italic text-muted sm:text-xl">
          <p>We don't care where you studied.</p>
          <p>We don't care who introduced you.</p>
          <p className="text-[#cfd6e2]">
            We care about one thing: can you build something people truly want?
          </p>
        </div>

        {/* Bottoni in perfetto stile Lovable */}
<div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row z-10">
  {/* Primo bottone: Sfumatura ad angolazione specifica, font bilanciato e testo ridotto */}
  <a
    href="#apply"
    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#6d8cff] to-[#b06cf7] px-6 py-2.5 text-[13px] font-medium tracking-wide text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
  >
    Apply for Funding
    <ArrowRight size={14} className="opacity-90" />
  </a>

  {/* Secondo bottone: Effetto vetro semitrasparente (glass), bordo sottile scuro e font leggero */}
  <a
    href="#how-we-evaluate"
    className="inline-flex items-center rounded-full border border-zinc-800/80 bg-zinc-900/40 px-6 py-2.5 text-[13px] font-medium tracking-wide text-zinc-400 backdrop-blur-sm transition-colors duration-200 hover:bg-zinc-800/60 hover:text-zinc-200"
  >
    How We Evaluate
  </a>
</div>

        {/* Render dell'immagine Orb con il nuovo percorso */}
        <Orb />
      </div>
    </section>
  );
}
