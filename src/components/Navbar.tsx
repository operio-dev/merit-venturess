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
    <a href="#top" className="flex items-center gap-3">
      <span
        className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white"
        style={{ background: "linear-gradient(135deg, #6d8cff, #b06cf7)" }}
      >
        M
      </span>
      <span className="font-display text-[17px] font-semibold tracking-tight text-fg">
        Merit Ventures
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-ink/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] text-muted transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#apply"
            className="btn-grad inline-flex items-center rounded-xl px-5 py-2.5 text-[15px] font-semibold"
          >
            Apply for Funding
          </a>
        </div>

        <button
          className="text-fg lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-b border-line bg-ink/95 px-5 pb-6 pt-2 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[15px] text-muted transition-colors hover:text-fg"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#apply"
              onClick={() => setOpen(false)}
              className="btn-grad mt-2 inline-flex w-fit items-center rounded-xl px-5 py-2.5 text-[15px] font-semibold"
            >
              Apply for Funding
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
