import React from 'react';

const HowItWorks = () => {
  const steps = [
    { title: "Choose tool", description: "Select the tool you need from our collection." },
    { title: "Use instantly", description: "All tools work in your browser, no setup needed." },
    { title: "Get results", description: "Download or share your files immediately." }
  ];

  return (
    <section className="section-padding py-32 bg-black overflow-hidden">
      <div className="text-center mb-20 animate-fade-in-up">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">How it Works</h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">Three simple steps to productivity. No complexity, just speed.</p>
      </div>
      
      <div className="relative grid md:grid-cols-3 gap-12 lg:gap-20 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center animate-fade-in-up transition-all hover:scale-105" style={{ animationDelay: `${index * 150}ms` }}>
            <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-3xl bg-primary/10 border border-primary/20 text-primary font-display font-bold text-2xl mb-8 relative group">
                <div className="absolute inset-0 bg-primary/5 blur-xl group-hover:bg-primary/10 transition-colors rounded-full" />
                <span className="relative z-10">{index + 1}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold mb-3">{step.title}</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
