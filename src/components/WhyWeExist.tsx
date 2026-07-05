import Reveal from "./Reveal";

export default function WhyWeExist() {
  return (
    <section id="why-we-exist" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5">
        
        {/* Il titolo della sezione */}
        <Reveal>
          <p className="eyebrow">Why we exist</p>
          <h2 className="display mt-5 text-4xl text-[#e6ebf4] sm:text-5xl max-w-2xl">
            Venture capital has always leaned on proxies.
          </h2>
        </Reveal>

        {/* CONTENITORE MODIFICATO: max-w-2xl stringe il testo lateralmente e space-y-8 aumenta lo spazio verticale come Lovable */}
        <div className="mx-auto mt-12 max-w-2xl space-y-8 text-left">
          
          <Reveal delay={50}>
            {/* Schiarito il testo da muto a text-zinc-400, con font sottile e interlinea rilassata */}
            <p className="text-[16px] md:text-[17px] font-normal leading-relaxed text-zinc-400">
              Reviewing thousands of startups is genuinely hard. So the industry built shortcuts—pedigree 
              and connections became convenient stand-ins for potential.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-[16px] md:text-[17px] font-normal leading-relaxed text-zinc-400">
              These signals are easy to check. They're also{" "}
              {/* Testo in evidenza bianco brillante e font-medium, senza eccessivo grassetto */}
              <span className="text-white font-medium">weak proxies</span> for whether a founder 
              can actually build something people want.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <p className="text-[16px] md:text-[17px] font-normal leading-relaxed text-zinc-400">
              Modern technology changes that. We can measure real execution directly—so{" "}
              <span className="text-white font-medium">
                execution matters more than introductions.
              </span>
            </p>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
