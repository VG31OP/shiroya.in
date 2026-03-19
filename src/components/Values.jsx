import React from 'react';
import { motion } from 'framer-motion';
import { useSectionNavigation } from '../hooks/useSectionNavigation';

const Values = () => {
  const { goToSection } = useSectionNavigation();
  const values = [
    {
      title: "No login required", icon: (
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
      )
    },
    {
      title: "Instant browser access", icon: (
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2z"></path></svg>
      )
    },
    {
      title: "Clean minimal UI", icon: (
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
      )
    },
    {
      title: "Fast performance", icon: (
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
      )
    }
  ];

  return (
    <section className="section-padding py-32 bg-dark-surface">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Built for speed.<br />Designed for simplicity.</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {values.map((value, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center gap-4 p-6 rounded-2xl bg-black border border-dark-border hover:border-primary/30 transition-colors group"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/5 group-hover:bg-primary/10 transition-colors">
              {value.icon}
            </div>
            <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{value.title}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <h3 className="text-3xl md:text-5xl font-display font-bold mb-8">Start using Shiroya today</h3>
        <button 
              onClick={() => goToSection('tools')}
              className="neon-btn neon-btn-primary group h-14 !px-10 inline-flex items-center justify-center cursor-pointer"
        >
          Explore Now <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→ shiroya.in</span>
        </button>
      </div>
    </section>
  );
};

export default Values;
