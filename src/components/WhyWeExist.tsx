import { GraduationCap, Handshake, Users, Building2, Rocket } from "lucide-react";
import Reveal from "./Reveal";

const PROXIES = [
  { icon: GraduationCap, label: "Elite universities" },
  { icon: Handshake, label: "Warm introductions" },
  { icon: Users, label: "Founder networks" },
  { icon: Building2, label: "Prestigious employers" },
  { icon: Rocket, label: "Famous accelerators" },
];

export default function WhyWeExist() {
  return (
    <section id="why-we-exist" className="relative py-28 sm:py-36 overflow-hidden">
      {/* max-w-4xl garantisce lo stesso contenitore di Lovable per spostare i testi più a destra rispetto alla griglia larga */}
      <div className="mx-auto max-w-4xl px-5 text-left">
        
        <Reveal>
          <p className="font-display text-xs font-medium uppercase tracking-[0.25em] text-[#4c8dff]">
            Why we exist
          </p>
        </Reveal>
        
        <Reveal delay={50}>
          <h2 className="display mt-5 max-w-3xl text-4xl text-[#e6ebf4] sm:text-5xl font-semibold leading-tight tracking-tight">
            Venture capital has always leaned on proxies.
          </h2>
        </Reveal>
        
        {/* Rimosso mx-auto: ora il testo non è più centrato e si sposta sul lato destro naturale della pagina */}
        <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-zinc-400 font-normal">
          <Reveal delay={100}>
            <p>
              Reviewing thousands of startups is genuinely hard. So the industry
              built shortcuts: pedigree and connections became convenient stand-ins
              for potential.
            </p>
          </Reveal>
          
          <Reveal delay={120}>
            <p>
              These signals are easy to check. They're also{" "}
              <span className="text-white font-medium">weak proxies</span> for whether a
              founder can actually build something people want.
            </p>
          </Reveal>
          
          <Reveal delay={140}>
            <p>
              Modern technology changes that. We can measure real execution
              directly so that{" "}
              <span className="text-white font-medium">
                execution matters more than introductions.
              </span>
            </p>
          </Reveal>
        </div>

        {/* I tag sbarrati (line-through) con le icone presi da Lovable */}
        <Reveal delay={160}>
          <div className="mt-14 flex flex-wrap gap-3">
            {PROXIES.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2.5 rounded-full border border-line bg-zinc-900/40 backdrop-blur-sm px-4 py-2 text-sm text-zinc-500 line-through decoration-rose-500/50"
                >
                  <Icon size={16} className="shrink-0 opacity-50" />
                  {p.label}
                </div>
              );
            })}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
