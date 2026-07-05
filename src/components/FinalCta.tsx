import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { Logo } from "./Navbar";


function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M18.9 2.2h3.4l-7.4 8.5 8.7 11.1h-6.8l-5.3-6.9-6.1 6.9H1.9l7.9-9L1.5 2.2h7l4.8 6.3 5.6-6.3Zm-1.2 17.6h1.9L7.4 4.1H5.4l12.3 15.7Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.49 2.49 0 1 1 0 4.98 2.49 2.49 0 0 1 0-4.98ZM3 9.5h4v12H3v-12Zm6.5 0h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6v6.3h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7h-4v-12Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M12 .8a11.2 11.2 0 0 0-3.5 21.8c.5.1.7-.2.7-.5v-2c-3.1.7-3.7-1.3-3.7-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7 0-.7 0-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.4-2.5-.3-5-1.3-5-5.6 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3 0 0 .9-.3 3.1 1.1a10.6 10.6 0 0 1 5.6 0C17 5.5 18 5.8 18 5.8c.6 1.5.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.3-5 5.6.4.3.7 1 .7 2v3c0 .3.2.6.7.5A11.2 11.2 0 0 0 12 .8Z" />
    </svg>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire this to your form backend (e.g. Formspree):
    // fetch("https://formspree.io/f/YOUR_FORM_ID", { method: "POST", body: JSON.stringify({ email }), headers: { "Content-Type": "application/json" } })
    setDone(true);
  };

  return (
    <div>
      <p className="font-display text-[16px] font-semibold text-fg">Stay in the loop</p>
      <p className="mt-2 text-[14.5px] text-muted">Occasional notes on merit-based investing.</p>
      {done ? (
        <p className="mt-5 text-[15px] text-accent">Subscribed. Talk soon.</p>
      ) : (
        <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full rounded-xl border border-line bg-panel px-4 py-3 text-[15px] text-fg placeholder:text-muted-2 focus:border-[rgba(76,141,255,0.5)] focus:outline-none sm:max-w-[280px]"
          />
          <button
            type="submit"
            className="btn-grad shrink-0 rounded-xl px-6 py-3 text-[15px] font-semibold"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}

export default function FinalCta() {
  return (
    <>
      <section id="apply" className="relative pb-16 pt-28 md:pt-36">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <h2 className="display text-4xl text-[#e6ebf4] sm:text-[52px] sm:leading-[1.12]">
              Build something people want.
              <br />
              We'll notice.
            </h2>
            <p className="mx-auto mt-7 max-w-md text-[17px] leading-relaxed text-muted">
              No intro. No pedigree. Just your work and the evidence behind it.
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href="mailto:apply@meritventures.com"
                className="btn-grad inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-[16px] font-semibold"
              >
                Apply for Funding
                <ArrowRight size={18} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="relative">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 border-t border-line py-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <Logo />
              <p className="mt-6 max-w-sm font-serif text-[17px] italic leading-relaxed text-muted">
                We invest in execution, not pedigree—building the world's most meritocratic
                venture capital platform.
              </p>
              <div className="mt-8 flex gap-3">
                {[
                  { Icon: TwitterIcon, href: "#", label: "Twitter" },
                  { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
                  { Icon: GithubIcon, href: "#", label: "GitHub" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="btn-ghost flex h-11 w-11 items-center justify-center rounded-full text-muted hover:text-fg"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:justify-self-end">
              <Newsletter />
            </div>
          </div>

          <div className="border-t border-line py-7">
            <p className="text-[13.5px] text-muted-2">
              © {new Date().getFullYear()} Merit Ventures. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
