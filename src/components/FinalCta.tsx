import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="font-display text-[15px] font-semibold tracking-tight text-fg">
        Merit Ventures
      </span>
    </a>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
  };

  return (
    <div className="max-w-sm">
      <p className="font-display text-[15px] font-medium text-fg">Stay in the loop</p>
      <p className="mt-1.5 text-sm text-muted">
        Occasional notes on merit-based investing.
      </p>

      <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-2.5 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full rounded-full border border-line bg-panel px-4 py-2 text-sm text-fg placeholder:text-muted-2 focus:border-[rgba(76,141,255,0.4)] focus:outline-none sm:max-w-[240px]"
          aria-label="Email address"
        />

        <button
          type="submit"
          className="btn-grad shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-colors"
        >
          {done ? "Subscribed" : "Subscribe"}
        </button>
      </form>
    </div>
  );
}

export default function FinalCta() {
  return (
    <>
      {/* CTA */}
      <section id="apply" className="relative py-24 sm:py-32 text-center overflow-hidden">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[#e6ebf4] sm:text-5xl max-w-2xl mx-auto">
              Build something people want. We'll notice.
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-lg text-muted">
              No intro. No pedigree. Just your work and the evidence behind it.
            </p>

            <div className="mt-9 flex justify-center">
              <a
                href="mailto:apply@meritventures.com"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#6d8cff] to-[#b06cf7] px-6 py-2.5 text-[13px] font-medium tracking-wide text-white transition-transform duration-200 hover:scale-[1.02]"
              >
                Apply for Funding
                <ArrowRight size={14} className="opacity-90" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-line">
        <div className="mx-auto max-w-6xl px-5 pb-14">
          <div className="grid gap-10 border-t border-line pt-14 md:grid-cols-[1.4fr_1fr]">
            
            <div className="max-w-sm text-left">
              <Logo />

              <p className="mt-4 font-serif text-lg italic leading-relaxed text-muted">
                We invest in execution, not pedigree. Building the world's most meritocratic
                venture capital platform.
              </p>

              {/* Social icons SAFE (no lucide issues) */}
              <div className="mt-6 flex gap-2">
                {["T", "L", "G"].map((label, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social link"
                    className="border border-line bg-zinc-900/40 backdrop-blur-sm grid size-10 place-items-center rounded-xl text-muted hover:text-fg transition-colors"
                  >
                    <span className="text-xs font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="md:justify-self-end text-left w-full sm:w-auto">
              <Newsletter />
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-muted sm:flex-row">
            <p>© {new Date().getFullYear()} Merit Ventures. All rights reserved.</p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-fg">Privacy</a>
              <a href="#" className="hover:text-fg">Terms</a>
              <a href="#faq" className="hover:text-fg">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
