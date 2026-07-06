import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyWeExist from "./components/WhyWeExist";
import Principles from "./components/Principles";
import WhatWeLookFor from "./components/WhatWeLookFor";
import HowWeEvaluate from "./components/HowWeEvaluate";
import ExecutionScore from "./components/ExecutionScore";
import FounderStories from "./components/FounderStories";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import ApplyPage from "./components/ApplyPage";

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return hash;
}

export default function App() {
  const hash = useHashRoute();

  if (hash === "#/apply") {
    return <ApplyPage />;
  }

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
