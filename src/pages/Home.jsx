import React from 'react';
import KineticHero from '../components/KineticHero';
import InteractiveToolLab from '../components/InteractiveToolLab';
import CreatorLab from '../components/CreatorLab';
import { usePageMeta } from '../hooks/usePageMeta';

const Home = () => {
  usePageMeta({
    title: "Vraj Shiroya | Open-Source Developer, AI Engineer & Cybersecurity Researcher — shiroya.in",
    description: "Official website and tool lab of Vraj Shiroya (VG31OP) — Open-Source Developer, AI Engineer, and Cybersecurity Researcher from Gujarat, India. Client-side privacy tools, verified open-source contributions, and AI systems.",
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
