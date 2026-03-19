import React from 'react';

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
      title: "PDF Tools",
      description: "Merge, split, and compress PDFs instantly. Powerful document processing tools that work entirely in your browser.",
      cta: "Open Tools →",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
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
    <section id="tools" className="section-padding py-32 bg-dark-surface/30 border-y border-dark-border">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Powerful Tools, Zero Friction</h2>
        <p className="text-gray-400 max-w-xl mx-auto">Instant access to tools without any setup or logins.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="glow-card group p-8 rounded-3xl bg-black/40 backdrop-blur-sm"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:scale-110 transition-transform">
              {tool.icon}
            </div>
            <h3 className="text-2xl font-display font-bold mb-3">{tool.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">{tool.description}</p>
            {tool.cta !== "Coming Soon" ? (
              <a href={tool.title === "Drop" ? "https://drop.shiroya.in" : "https://pdf.shiroya.in"} target="_blank" rel="noopener noreferrer" className="neon-btn neon-btn-secondary text-sm group-hover:bg-primary/10 group-hover:text-primary transition-colors text-center inline-block">
                {tool.cta}
              </a>
            ) : (
              <button className="neon-btn neon-btn-secondary opacity-50 cursor-not-allowed text-sm text-center inline-block">
                {tool.cta}
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
