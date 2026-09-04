import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Terminal, ArrowDownRight, Compass, ShieldCheck, Zap } from 'lucide-react';

const KineticHero = ({ onExploreClick }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [6, -6]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);

  const floatingX1 = useTransform(mouseX, [-300, 300], [-15, 15]);
  const floatingY1 = useTransform(mouseY, [-300, 300], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden z-10 select-none">
      {/* Top Floating Spatial Coordinates Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-400 border-b border-white/10 pb-4"
      >
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#20E070] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#20E070]"></span>
          </span>
          <span className="tracking-widest uppercase text-white font-medium">LAB STATUS: ONLINE</span>
          <span className="text-gray-600 hidden sm:inline">|</span>
          <span className="hidden sm:inline text-gray-400">CLIENT-SIDE ENGINE 2.0</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-gray-400 hover:text-[#20E070] transition-colors cursor-pointer">
            <ShieldCheck className="w-3.5 h-3.5 text-[#20E070]" />
            <span>0% SERVER STORAGE</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-400">
            <Zap className="w-3.5 h-3.5 text-[#20E070]" />
            <span>ZERO FRICTION</span>
          </div>
        </div>
      </motion.div>

      {/* Main Kinetic Centered Typography Composition */}
      <div className="my-auto py-8 relative flex flex-col items-center justify-center text-center">
        {/* Top Floating Spatial Badge */}
        <motion.div
          style={{ x: floatingX1, y: floatingY1 }}
          className="mb-6 inline-flex items-center gap-3 lab-glass px-4 py-2 rounded-full text-xs font-mono text-white shadow-2xl border border-[#20E070]/40"
        >
          <Terminal className="w-3.5 h-3.5 text-[#20E070]" />
          <span>PERSONAL INTERNET LAB</span>
        </motion.div>

        {/* 3D Perspective Centered Kinetic Logo Artwork Wrapper */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="relative text-center flex flex-col items-center justify-center cursor-default space-y-6 max-w-4xl mx-auto"
        >
          {/* Centered Transparent Cutout Logo Artwork */}
          <div className="relative inline-flex justify-center items-center max-w-full mx-auto">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              src="/shiroya-logo-transparent.png"
              alt="SHIROYA.in"
              className="w-full max-w-xl sm:max-w-2xl h-auto drop-shadow-[0_0_40px_rgba(32,224,112,0.35)] object-contain pointer-events-none mx-auto"
            />
          </div>

          {/* Subtitle Journey Centered Tagline */}
          <div className="space-y-6 max-w-2xl mx-auto flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-xl sm:text-2xl lg:text-3xl font-display font-light text-gray-300 leading-relaxed text-center">
                A small corner of the web where <span className="text-white font-medium border-b-2 border-[#20E070]">useful browser tools</span> live & evolve.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col items-center justify-center gap-5 text-center"
            >
              <p className="text-xs sm:text-sm text-gray-400 font-mono leading-relaxed max-w-md text-center">
                No accounts. No trackers. Pure client-side utilities engineered for instant productivity.
              </p>
              
              <button
                onClick={onExploreClick}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#20E070] text-black font-display font-bold text-sm hover:bg-white hover:shadow-[0_0_35px_rgba(32,224,112,0.6)] transition-all duration-300 cursor-pointer active:scale-95 shadow-xl"
              >
                <span>EXPLORE TOOL LAB</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Spatial Ticker & Scroll Guide */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400"
      >
        <div className="flex items-center gap-6 overflow-hidden max-w-full">
          <div className="flex items-center gap-2 text-gray-300">
            <Compass className="w-4 h-4 text-[#20E070] animate-spin-slow" />
            <span className="uppercase font-semibold tracking-wider text-white">SPATIAL TOOL OBJECTS</span>
          </div>
          <span className="text-gray-700 hidden sm:inline">•</span>
          <span className="text-gray-400 hidden md:inline">HOVER OBJECTS TO ACTIVATE VISUAL DYNAMICS</span>
        </div>

        <div className="flex items-center gap-2 text-gray-300">
          <span className="animate-bounce text-[#20E070]">↓</span>
          <span className="tracking-widest text-[10px] uppercase">SCROLL TO DISCOVER</span>
        </div>
      </motion.div>
    </section>
  );
};

export default KineticHero;
