import React from 'react';
import { motion } from 'framer-motion';
import { useSectionNavigation } from '../hooks/useSectionNavigation';

const Hero = () => {
  const { goToSection } = useSectionNavigation();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="section-padding text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Fast, Simple, Browser-based
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 tracking-tight"
        >
          Everything you need.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300">
            One domain.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Fast, simple tools — no login required. Experience the power of 
          web-based utilities for instant productivity.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => goToSection('tools')}
            className="neon-btn neon-btn-primary w-full sm:w-auto text-center cursor-pointer"
          >
            Start Using →
          </button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-gray-500 font-medium">
          <span className="flex items-center gap-2">⚡ Instant access</span>
          <span className="flex items-center gap-2 border-l border-white/10 pl-8">🔒 Private</span>
          <span className="flex items-center gap-2 border-l border-white/10 pl-8">🚀 No signup</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
