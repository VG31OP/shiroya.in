import React from 'react';
import KineticHero from '../components/KineticHero';
import InteractiveToolLab from '../components/InteractiveToolLab';
import CreatorLab from '../components/CreatorLab';
import { usePageMeta } from '../hooks/usePageMeta';

const Home = () => {
  usePageMeta({
    title: "shiroya.in — Fast, Private Browser Tools & Developer Lab | Vraj Shiroya",
    description: "Free, private, browser-first tools engineered by Vraj Shiroya (VG31OP). Features Web Shiroya source code engine, Drop encrypted P2P file sharing, BgZero AI background remover, and local PDF tools. 100% client-side with zero cloud uploads.",
    canonicalUrl: "https://shiroya.in/"
  });

  const scrollToTools = () => {
    const el = document.getElementById('tools');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#08080A] text-white selection:bg-[#20E070] selection:text-black">
      {/* Act I: Kinetic Spatial Hero */}
      <KineticHero onExploreClick={scrollToTools} />

      {/* Act II: The Main Attraction — Interactive Tool Objects */}
      <InteractiveToolLab />

      {/* Act III: The Creator & Philosophy */}
      <CreatorLab />
    </div>
  );
};

export default Home;
