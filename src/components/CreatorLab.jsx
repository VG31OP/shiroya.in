import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck, Zap, Lock, Code2, Mail, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';

const CreatorLab = () => {
  const principles = [
    {
      id: "01",
      icon: <Lock className="w-5 h-5 text-[#20E070]" />,
      title: "ZERO DATA FOOTPRINT",
      tag: "PRIVACY FIRST",
      description: "Your files never leave your browser. Processing occurs strictly in local memory using HTML5 APIs."
    },
    {
      id: "02",
      icon: <Zap className="w-5 h-5 text-[#20E070]" />,
      title: "NO ACCOUNTS, EVER",
      tag: "INSTANT ACCESS",
      description: "No signups, paywalls, or friction. Instant tool execution with zero data tracking or credentials."
    },
    {
      id: "03",
      icon: <Code2 className="w-5 h-5 text-[#20E070]" />,
      title: "CLIENT-SIDE SPEED",
      tag: "NATIVE PERFORMANCE",
      description: "Leverages modern WebAssembly, WebRTC, and Canvas for hardware-accelerated, native-speed performance."
    }
  ];

  return (
    <section id="creator" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-10 border-t border-[#20E070]/20">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#20E070]/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#0B3D25]/40 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Section Header Tag */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#20E070]/10 border border-[#20E070]/30 text-[#20E070]">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#20E070]">
            [ SECTION 03 // ARCHITECT & PRINCIPLES ]
          </span>
        </div>
        <span className="hidden sm:block font-mono text-xs text-gray-500">
          SHIROYA LAB CORE // v2.0
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Creator Identity & Philosophy */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full lab-glass border border-[#20E070]/40 text-xs font-mono text-[#20E070]">
              <span className="w-2 h-2 rounded-full bg-[#20E070] animate-ping" />
              <span>THE ARCHITECT</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight leading-tight">
              BUILT BY <br />
              <span className="text-[#20E070] relative inline-block">
                VRAJ SHIROYA
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#20E070] to-transparent rounded-full" />
              </span>
            </h2>

            <div className="pt-1">
              <span className="font-script text-[#20E070] text-2xl rotate-[-2deg] inline-block">
                "No ads. No tracking. Pure web craft."
              </span>
            </div>
          </div>

          <p className="text-gray-300 font-sans leading-relaxed text-base sm:text-lg">
            SHIROYA is a personal internet tool lab — a digital playground built to house lightweight, powerful browser utilities that simplify everyday digital workflows without server friction.
          </p>

          {/* Interactive Lab System Console Card */}
          <div className="p-5 rounded-2xl lab-glass border border-[#20E070]/30 space-y-3 relative overflow-hidden group hover:border-[#20E070] transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#20E070]/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#20E070] shadow-[0_0_8px_#20E070]" />
                <span className="font-mono text-xs font-bold text-white tracking-wider">LAB SYSTEM STATUS</span>
              </div>
              <span className="font-mono text-[10px] text-[#20E070] bg-[#0B3D25] px-2 py-0.5 rounded border border-[#20E070]/30">ONLINE & ACTIVE</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-1">
              <div>
                <span className="text-gray-500 block text-[10px]">ENGINEERING</span>
                <span className="text-gray-200">100% Client-Side</span>
              </div>
              <div>
                <span className="text-gray-500 block text-[10px]">PRIVACY</span>
                <span className="text-[#20E070]">Zero Server Logs</span>
              </div>
              <div>
                <span className="text-gray-500 block text-[10px]">LOCATION</span>
                <span className="text-gray-200">India 🇮🇳</span>
              </div>
              <div>
                <span className="text-gray-500 block text-[10px]">CREATOR WEBSITE</span>
                <a href="https://vraj.shiroya.in" target="_blank" rel="noopener noreferrer" className="text-[#20E070] hover:underline flex items-center gap-1">
                  vraj.shiroya.in <ExternalLink className="w-3 h-3 inline" />
                </a>
              </div>
            </div>
          </div>

          {/* Social & Contact Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://vraj.shiroya.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#20E070] text-black font-mono font-bold text-xs uppercase hover:bg-white hover:shadow-[0_0_25px_rgba(32,224,112,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>VRAJ.SHIROYA.IN</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/vg31op"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl lab-glass border border-white/10 text-gray-300 hover:text-[#20E070] hover:border-[#20E070] hover:shadow-[0_0_15px_rgba(32,224,112,0.25)] transition-all duration-300 transform hover:-translate-y-0.5"
              title="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>

            <a
              href="https://instagram.com/shiroya.in"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl lab-glass border border-white/10 text-gray-300 hover:text-[#20E070] hover:border-[#20E070] hover:shadow-[0_0_15px_rgba(32,224,112,0.25)] transition-all duration-300 transform hover:-translate-y-0.5"
              title="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.149 3.227-1.664 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.264-.149-4.771-1.665-4.919-4.919-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.28-.073-1.689-.073-4.948s.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>

            <a
              href="https://linkedin.com/in/vraj-shiroya-70b927287"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl lab-glass border border-white/10 text-gray-300 hover:text-[#20E070] hover:border-[#20E070] hover:shadow-[0_0_15px_rgba(32,224,112,0.25)] transition-all duration-300 transform hover:-translate-y-0.5"
              title="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.732s.784-1.732 1.75-1.732 1.75.779 1.75 1.732-.784 1.732-1.75 1.732zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>

            <a
              href="mailto:vraj@shiroya.in"
              className="p-3.5 rounded-xl lab-glass border border-white/10 text-gray-300 hover:text-[#20E070] hover:border-[#20E070] hover:shadow-[0_0_15px_rgba(32,224,112,0.25)] transition-all duration-300 transform hover:-translate-y-0.5"
              title="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Lab Principles Cards */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#20E070]" />
            <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">LAB OPERATING MANIFESTO</span>
          </div>

          {principles.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="lab-glass-interactive p-6 rounded-2xl flex items-start gap-5 border border-white/10 hover:border-[#20E070]/50 relative overflow-hidden group"
            >
              {/* Subtle green glow bar on card left */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#20E070]/0 group-hover:bg-[#20E070] transition-all duration-300" />

              <div className="p-3 rounded-xl bg-[#20E070]/10 border border-[#20E070]/30 shrink-0 shadow-[0_0_15px_rgba(32,224,112,0.2)] group-hover:scale-110 transition-transform duration-300">
                {p.icon}
              </div>

              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-display font-bold text-white tracking-wide group-hover:text-[#20E070] transition-colors">
                    {p.title}
                  </h4>
                  <span className="font-mono text-[10px] text-[#20E070] bg-[#0B3D25] px-2 py-0.5 rounded border border-[#20E070]/30">
                    {p.tag}
                  </span>
                </div>
                <p className="text-xs font-mono text-gray-400 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <span className="font-mono text-xl font-bold text-[#20E070]/20 group-hover:text-[#20E070]/40 transition-colors shrink-0">
                {p.id}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorLab;
