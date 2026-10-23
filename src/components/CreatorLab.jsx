import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, ShieldCheck, Zap, Lock, Code2, Mail, Terminal, 
  Sparkles, CheckCircle2, GitPullRequest, ArrowUpRight, Cpu, GraduationCap, Award
} from 'lucide-react';

const CreatorLab = () => {
  const principles = [
    {
      id: "01",
      icon: <Lock className="w-5 h-5 text-[#20E070]" />,
      title: "ZERO DATA FOOTPRINT",
      tag: "PRIVACY FIRST",
      description: "Your files never leave your browser. Processing occurs strictly in local client memory using HTML5 and WebAssembly APIs."
    },
    {
      id: "02",
      icon: <Zap className="w-5 h-5 text-[#20E070]" />,
      title: "NO ACCOUNTS, EVER",
      tag: "ZERO FRICTION",
      description: "No signups, paywalls, or tracking cookies. Instant tool execution with zero credential gatekeeping."
    },
    {
      id: "03",
      icon: <Code2 className="w-5 h-5 text-[#20E070]" />,
      title: "CLIENT-SIDE SPEED",
      tag: "NATIVE COMPUTE",
      description: "Leverages modern WebAssembly, WebRTC, and Canvas for hardware-accelerated, native-speed performance without cloud queues."
    }
  ];

  const verifiedPrs = [
    {
      repo: "google/artemis",
      pr: "#186",
      title: "fix(llm): normalize message part order for Vertex AI Gemini tool turns",
      url: "https://github.com/google/artemis/pull/186",
      impact: "Normalized tool turn message parts to match Google Vertex AI Gemini conversational turn specifications.",
      tag: "Vertex AI / Gemini"
    },
    {
      repo: "vercel/swr",
      pr: "#4362",
      title: "fix: avoid redundant _k cache write on mount",
      url: "https://github.com/vercel/swr/pull/4362",
      impact: "Prevented redundant cache mutations during SWR component mount lifecycle in React/Next.js.",
      tag: "React / SWR Cache"
    },
    {
      repo: "ollama/ollama-vscode",
      pr: "Contributor",
      title: "Local LLM Tooling & Editor Integrations",
      url: "https://github.com/ollama/ollama-vscode",
      impact: "Contributed to developer experience tooling for running open-source local LLMs in editor workflows.",
      tag: "Local AI Tooling"
    }
  ];

  const featuredRepos = [
    {
      name: "drop",
      repo: "VG31OP/drop",
      url: "https://github.com/VG31OP/drop",
      demoUrl: "https://drop.shiroya.in",
      description: "Peer-to-peer encrypted file sharing web app using WebRTC data channels with zero server storage.",
      tags: ["WebRTC", "TypeScript", "React", "DTLS/SCTP"]
    },
    {
      name: "BGZero",
      repo: "VG31OP/BGZero",
      url: "https://github.com/VG31OP/BGZero",
      demoUrl: "https://bgzero.shiroya.in",
      description: "Client-side AI image background remover and target-size compressor with 100% local processing.",
      tags: ["React 18", "TypeScript", "Vite", "Canvas"]
    },
    {
      name: "web-installer",
      repo: "VG31OP/web-installer",
      url: "https://github.com/VG31OP/web-installer",
      demoUrl: "https://web.shiroya.in",
      description: "Self-hosted web utility to crawl, download, and mirror complete websites for offline use with live logs.",
      tags: ["Node.js", "Express", "Socket.io", "wget"]
    },
    {
      name: "Network-Speed-Combiner",
      repo: "VG31OP/Network-Speed-Combiner",
      url: "https://github.com/VG31OP/Network-Speed-Combiner",
      demoUrl: "https://github.com/VG31OP/Network-Speed-Combiner",
      description: "Bandwidth bonding and network redundancy tool routing traffic across concurrent network interfaces.",
      tags: ["Networking", "Routing", "Socket Programming"]
    },
    {
      name: "shiroya.in",
      repo: "VG31OP/shiroya.in",
      url: "https://github.com/VG31OP/shiroya.in",
      demoUrl: "https://shiroya.in",
      description: "High-performance personal internet tool lab platform, technical SEO architecture, and kinetic UI.",
      tags: ["React 19", "Vite", "Tailwind CSS", "Framer Motion"]
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
            [ SECTION 03 // ARCHITECT &amp; ENGINEERING IDENTITY ]
          </span>
        </div>
        <span className="hidden sm:block font-mono text-xs text-gray-500">
          SHIROYA LAB CORE // v2.4
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

            <p className="text-lg font-display text-gray-300">
              Open-Source Developer, AI Engineer &amp; Cybersecurity Researcher
            </p>
          </div>

          <p className="text-gray-300 font-sans leading-relaxed text-base sm:text-lg">
            Vraj Shiroya is a software developer, open-source contributor, and AI-focused builder from Gujarat, India. He develops software products, AI-powered applications, developer tools, and experiments across intelligent systems and cybersecurity.
          </p>

          {/* Interactive Lab System Console Card */}
          <div className="p-5 rounded-2xl lab-glass border border-[#20E070]/30 space-y-3 relative overflow-hidden group hover:border-[#20E070] transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#20E070]/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#20E070] shadow-[0_0_8px_#20E070]" />
                <span className="font-mono text-xs font-bold text-white tracking-wider">VERIFIED CREDENTIALS</span>
              </div>
              <span className="font-mono text-[10px] text-[#20E070] bg-[#0B3D25] px-2 py-0.5 rounded border border-[#20E070]/30">ONLINE &amp; ACTIVE</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-1">
              <div>
                <span className="text-gray-500 block text-[10px]">GITHUB HANDLE</span>
                <a href="https://github.com/VG31OP" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-[#20E070] font-bold">
                  @VG31OP ↗
                </a>
              </div>
              <div>
                <span className="text-gray-500 block text-[10px]">AMBASSADORSHIP</span>
                <span className="text-[#20E070]">Google Gemini Ambassador</span>
              </div>
              <div>
                <span className="text-gray-500 block text-[10px]">EDUCATION</span>
                <span className="text-gray-200">B.Tech CSE (GTU, India)</span>
              </div>
              <div>
                <span className="text-gray-500 block text-[10px]">INCUBATOR</span>
                <span className="text-gray-200">Orbitra Solution</span>
              </div>
            </div>
          </div>

          {/* Social & Contact Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#20E070] text-black font-mono font-bold text-xs uppercase hover:bg-white hover:shadow-[0_0_25px_rgba(32,224,112,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>READ ABOUT VRAJ SHIROYA</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="https://github.com/VG31OP"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vraj Shiroya on GitHub (@VG31OP)"
              className="p-3.5 rounded-xl lab-glass border border-white/10 text-gray-300 hover:text-[#20E070] hover:border-[#20E070] hover:shadow-[0_0_15px_rgba(32,224,112,0.25)] transition-all duration-300 transform hover:-translate-y-0.5"
              title="Vraj Shiroya on GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>

            <a
              href="https://www.linkedin.com/in/vrajshiroya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vraj Shiroya on LinkedIn"
              className="p-3.5 rounded-xl lab-glass border border-white/10 text-gray-300 hover:text-[#20E070] hover:border-[#20E070] hover:shadow-[0_0_15px_rgba(32,224,112,0.25)] transition-all duration-300 transform hover:-translate-y-0.5"
              title="Vraj Shiroya on LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.732s.784-1.732 1.75-1.732 1.75.779 1.75 1.732-.784 1.732-1.75 1.732zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>

            <a
              href="mailto:vraj@shiroya.in"
              aria-label="Send email to vraj@shiroya.in"
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

      {/* Verified Upstream Open Source Contributions Section */}
      <div className="mt-20 pt-12 border-t border-white/10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <GitPullRequest className="w-4 h-4 text-[#20E070]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#20E070]">
                UPSTREAM CONTRIBUTIONS
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              Verified Open-Source Contributions by Vraj Shiroya
            </h3>
          </div>
          <a
            href="https://github.com/VG31OP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#20E070] hover:underline"
          >
            <span>VRAJ SHIROYA ON GITHUB (@VG31OP)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {verifiedPrs.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl lab-glass border border-white/10 hover:border-[#20E070]/50 transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm font-bold text-white hover:text-[#20E070] flex items-center gap-1.5"
                  >
                    <span>{item.repo}</span>
                    <span className="text-[#20E070]">{item.pr}</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                  <span className="text-[10px] font-mono text-[#20E070] bg-[#0B3D25] px-2 py-0.5 rounded border border-[#20E070]/30">
                    {item.tag}
                  </span>
                </div>
                <h4 className="text-xs font-mono text-gray-300 font-semibold line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-xs font-sans text-gray-400 leading-relaxed">
                  {item.impact}
                </p>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#20E070] flex items-center gap-1"
                >
                  <span>View PR on GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#20E070]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Public Open Source Repositories Showcase */}
      <div className="mt-16 pt-12 border-t border-white/10 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#20E070]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#20E070]">
                OPEN SOURCE ECOSYSTEM
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              Featured Public Repositories by Vraj Shiroya
            </h3>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#20E070] hover:underline"
          >
            <span>LEARN MORE IN ABOUT DOSSIER →</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRepos.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl lab-glass border border-white/10 hover:border-[#20E070]/60 transition-all duration-300 flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm font-bold text-white group-hover:text-[#20E070] transition-colors flex items-center gap-1.5"
                  >
                    <span>{item.repo}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                  {item.demoUrl && item.demoUrl !== item.url && (
                    <a
                      href={item.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-mono text-[#20E070] bg-[#0B3D25] px-2 py-0.5 rounded border border-[#20E070]/30 hover:bg-[#20E070] hover:text-black transition-colors"
                    >
                      LIVE DEMO ↗
                    </a>
                  )}
                </div>

                <p className="text-xs font-sans text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/5 text-[10px] font-mono">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#20E070] flex items-center gap-1 font-bold transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  <span>github</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorLab;
