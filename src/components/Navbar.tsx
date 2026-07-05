import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Why we exist", href: "#why-we-exist" },
  { label: "Principles", href: "#principles" },
  { label: "How we evaluate", href: "#how-we-evaluate" },
  { label: "Execution Score", href: "#execution-score" },
  { label: "FAQ", href: "#faq" },
];

export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      {/* Testo del logo rimpicciolito da 17px a 15px come Lovable */}
      <span className="font-display text-[15px] font-semibold tracking-tight text-fg">
        Merit Ventures
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Struttura flessibile con pt-4 per distanziarla dall'alto come Lovable
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-5 ${
          scrolled 
            ? "border border-line bg-ink/80 backdrop-blur-md shadow-lg" 
            : "border border-transparent bg-transparent"
        }`}
      >
        <Logo />

        {/* Links della Navbar ridotti da 15px a text-sm (14px) e alleggeriti */}
        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted font-normal transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Bottone Destro alleggerito dal font-semibold pesante di Claude */}
        <div className="hidden lg:block">
          <a
            href="#apply"
            className="btn-grad inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium tracking-wide"
          >
            Apply for Funding
          </a>
        </div>

        <button
          className="grid h-9 w-9 place-items-center rounded-lg text-fg lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Menu Mobile */}
      {open && (
        <div className="border border-line bg-ink/95 absolute inset-x-4 top-20 z-50 rounded-2xl p-4 backdrop-blur-md lg:hidden shadow-xl">
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-fg"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#apply"
              onClick={() => setOpen(false)}
              className="btn-grad mt-2 inline-flex w-full justify-center items-center rounded-xl px-4 py-2.5 text-sm font-medium"
            >
              Apply for Funding
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
