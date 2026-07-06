import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const Tag = "a";

export function Logo() {
  return (
    <Tag href="#top" className="flex items-center">
      <img
        src="/ChatGPT_Image_6_lug_2026__10_00_44-removebg-preview.png"
        alt="Merit Ventures"
        className="h-15 w-auto"
        draggable={false}
      />
    </Tag>
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

const SOCIALS = [
  {
    label: "X",
    href: "#",
    path: "M18.9 2.2h3.4l-7.4 8.5 8.7 11.1h-6.8l-5.3-6.9-6.1 6.9H1.9l7.9-9L1.5 2.2h7l4.8 6.3 5.6-6.3Zm-1.2 17.6h1.9L7.4 4.1H5.4l12.3 15.7Z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M4.98 3.5a2.49 2.49 0 1 1 0 4.98 2.49 2.49 0 0 1 0-4.98ZM3 9.5h4v12H3v-12Zm6.5 0h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6v6.3h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7h-4v-12Z",
  },
];

export default function FinalCta() {
  return (
    <>
      {/* CTA */}
      <section id="apply" className="relative py-24 sm:py-32 text-center overflow-hidden">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <h2 className="text-gradient-v font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl max-w-2xl mx-auto">
              Build something people want. We&apos;ll notice.
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-lg text-muted">
              No intro. No pedigree. Just your work and the evidence behind it.
            </p>

            <div className="mt-9 flex justify-center">
              <Tag
                href="#/apply"
                className="cta-glow inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#6d8cff] to-[#b06cf7] px-6 py-2.5 text-[13px] font-medium tracking-wide text-white transition-transform duration-200 hover:scale-[1.02]"
              >
                Apply for Funding
                <ArrowRight size={14} className="opacity-90" />
              </Tag>
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
                We invest in execution, not pedigree. Building the world&apos;s most meritocratic
                venture capital platform.
              </p>

              {/* Social icons (inline SVG) */}
              <div className="mt-6 flex gap-2">
                {SOCIALS.map(({ label, href, path }) => (
                  <Tag
                    key={label}
                    href={href}
                    aria-label={label}
                    className="border border-line bg-zinc-900/40 backdrop-blur-sm grid size-10 place-items-center rounded-xl text-muted hover:text-fg transition-colors"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                      <path d={path} />
                    </svg>
                  </Tag>
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
              <Tag href="#" className="hover:text-fg">Privacy</Tag>
              <Tag href="#" className="hover:text-fg">Terms</Tag>
              <Tag href="#faq" className="hover:text-fg">FAQ</Tag>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
