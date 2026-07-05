import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import Reveal from "./Reveal";

const REQUIRED = ["Working product", "Real users", "Some validation", "Clear long-term vision"];

const NOT_REQUIRED = [
  "Ivy League degree",
  "Y Combinator",
  "Famous investors",
  "Warm introductions",
  "Big LinkedIn network",
];

const VALIDATION = [
  "Paying customers",
  "Recurring revenue",
  "User growth",
  "Active users",
  "Waitlists",
  "Partnerships",
  "Strong engagement",
  "Open-source adoption",
  "Measurable traction",
];

export default function WhatWeLookFor() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % VALIDATION.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="what-we-look-for" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="eyebrow">What we look for</p>
          <h2 className="display mt-5 max-w-3xl text-4xl text-[#e6ebf4] sm:text-5xl">
            Pre-seed &amp; Seed. One thing matters:{" "}
            <span className="grad-text">evidence of validation.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-9">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(76,141,255,0.14)] text-accent">
                  <Check size={16} />
                </span>
                <span className="text-[16px] font-medium text-accent">Minimum requirements</span>
              </div>
              <ul className="mt-8 space-y-5">
                {REQUIRED.map((item) => (
                  <li key={item} className="flex items-center gap-4 text-[16px] text-[#d6dce7]">
                    <Check size={17} className="shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card h-full p-9">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(148,163,184,0.12)] text-muted">
                  <X size={16} />
                </span>
                <span className="text-[16px] font-medium text-muted">We do NOT require</span>
              </div>
              <ul className="mt-8 space-y-5">
                {NOT_REQUIRED.map((item) => (
                  <li key={item} className="flex items-center gap-4 text-[16px] text-muted">
                    <X size={17} className="shrink-0 text-muted-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="card mt-5 p-9">
            <p className="text-[15px] text-muted">Validation can look like any of these</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {VALIDATION.map((item, i) => (
                <span key={item} className={`pill ${i === active ? "pill--active" : ""}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
