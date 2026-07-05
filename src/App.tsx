import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // Senza parentesi graffe
import WhyWeExist from "./components/WhyWeExist"; // Senza parentesi graffe
import Principles from "./components/Principles";
import WhatWeLookFor from "./components/WhatWeLookFor";
import HowWeEvaluate from "./components/HowWeEvaluate";
import ExecutionScore from "./components/ExecutionScore";
import FounderStories from "./components/FounderStories";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink">
      <Navbar />
      <main>
        <Hero />
        <WhyWeExist />
        <Principles />
        <WhatWeLookFor />
        <HowWeEvaluate />
        <ExecutionScore />
        <FounderStories />
        <Faq />
        <FinalCta />
      </main>
    </div>
  );
}
