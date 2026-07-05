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
    <section id="why-we-exist" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="max-w-3xl">
        <Reveal>
          <p className="eyebrow">Why we exist</p>
          <h2 className="display mt-5 text-4xl text-[#e6ebf4] sm:text-5xl">
            Venture capital has always leaned on proxies.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-9 space-y-6 text-[17px] leading-relaxed text-muted">
            <p>
              Reviewing thousands of startups is genuinely hard. So the industry built
              shortcuts—pedigree and connections became convenient stand-ins for potential.
            </p>
            <p>
              These signals are easy to check. They're also{" "}
              <strong className="font-semibold text-fg">weak proxies</strong> for whether a
              founder can actually build something people want.
            </p>
            <p>
              Modern technology changes that. We can measure real execution directly—so{" "}
              <strong className="font-semibold text-fg">
                execution matters more than introductions.
              </strong>
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-12 flex flex-wrap gap-3">
            {PROXIES.map(({ icon: Icon, label }) => (
              <span key={label} className="pill pill--struck">
                <Icon size={15} />
                {label}
              </span>
            ))}
          </div>
        </Reveal>
      </div></div>
    </section>
  );
}
