import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroOrb from "@/assets/hero-orb.png";

function Particles() {
  const dots = Array.from({ length: 22 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const left = (i * 47) % 100;
        const top = (i * 29) % 100;
        const delay = (i % 7) * 0.6;
        const dur = 6 + (i % 5);
        return (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/70"
            style={{ left: `${left}%`, top: `${top}%` }}
            animate={{ opacity: [0, 0.9, 0], y: [0, -22, 0] }}
            transition={{ duration: dur, delay, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      })}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* animated gradient background */}
      <div
        className="animate-drift absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="grid-lines absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <Particles />

      <div className="mx-auto max-w-4xl px-5 text-center">
        <motion.a
          href="#why"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <Sparkles className="size-3.5 text-primary" />
          We invest in execution, not pedigree
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient mt-7 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-[68px]"
        >
          The first Venture Capital built for founders—
          <span className="text-gradient-accent">not their networks.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-8 max-w-xl space-y-1 font-serif text-lg italic text-muted-foreground sm:text-xl"
        >
          <p>We don't care where you studied.</p>
          <p>We don't care who introduced you.</p>
          <p className="text-foreground">
            We care about one thing: can you build something people truly want?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button variant="hero" size="xl" asChild>
            <a href="#apply">
              Apply for Funding <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button variant="glass" size="xl" asChild>
            <a href="#evaluate">How We Evaluate</a>
          </Button>
        </motion.div>
      </div>

      {/* Floating orb visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-16 flex max-w-3xl justify-center px-6"
      >
        <div className="animate-float-slow relative">
          <div className="absolute inset-0 -z-10 blur-3xl" style={{ background: "var(--gradient-accent)", opacity: 0.35 }} />
          <img
            src={heroOrb}
            alt="Abstract execution-driven intelligence visualization"
            width={1280}
            height={1280}
            className="h-auto w-[min(520px,80vw)] select-none drop-shadow-2xl"
          />
        </div>
      </motion.div>
    </section>
  );
}
