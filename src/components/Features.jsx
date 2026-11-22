import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const tools = [
    {
      title: "Drop",
      description: "Share files instantly. No login required. Fast, secure, and peer-to-peer file sharing directly in your browser.",
      cta: "Open Drop →",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2v10" /><path d="m16 8-4 4-4-4" /><path d="M20 12.5v4.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4.5" /></svg>
      )
    },
    {
      title: "Certificate Generator",
      description: "Automated bulk certificate generator and SMTP email distribution. Generate credentials from Excel/CSV rosters with customizable templates.",
      cta: "Open Generator →",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
      )
    },
    {
      title: "More tools",
      description: "We are constantly building more tools to help you work faster. Stay tuned for new browser-based utilities.",
      cta: "Coming Soon",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 20v-6M9 20v-10M12 4v4M18 20V4M6 20v-4" /></svg>
      )
    }
  ];

  return (
    <section id="tools" className="section-padding py-32 bg-dark-surface/30">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Powerful Tools, Zero Friction</h2>
        <p className="text-gray-400 max-w-xl mx-auto">Instant access to tools without any setup or logins.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tools.map((tool, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glow-card group p-8 rounded-3xl bg-black/40 backdrop-blur-sm"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:scale-110 transition-transform">
              {tool.icon}
            </div>
            <h3 className="text-2xl font-display font-bold mb-3">{tool.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">{tool.description}</p>
            {tool.cta !== "Coming Soon" ? (
              <a href={tool.title === "Drop" ? "https://drop.shiroya.in" : "https://certificate.shiroya.in"} target="_blank" rel="noopener noreferrer" className="neon-btn neon-btn-secondary text-sm group-hover:bg-primary/10 group-hover:text-primary transition-colors text-center inline-block">
                {tool.cta}
              </a>
            ) : (
              <button className="neon-btn neon-btn-secondary opacity-50 cursor-not-allowed text-sm text-center inline-block">
                {tool.cta}
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
