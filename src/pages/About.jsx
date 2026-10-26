import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Terminal, ExternalLink, GitPullRequest, ShieldCheck, 
  Cpu, Sparkles, BookOpen, Layers, CheckCircle2, ArrowLeft,
  Mail, Globe, Lock, Code2, ArrowUpRight, GraduationCap, Award
} from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

const About = () => {
  usePageMeta({
    title: "About Vraj Shiroya | Open-Source Developer & AI Engineer",
    description: "Official profile and technical dossier of Vraj Shiroya (VG31OP) — Open-Source Developer, AI Engineer, and Cybersecurity Researcher from Gujarat, India. Verified contributions to Google Artemis, Vercel SWR, and client-side privacy tools.",
    canonicalUrl: "https://shiroya.in/about"
  });

  const verifiedContributions = [
    {
      repo: "google/artemis",
      prNumber: "#186",
      prTitle: "fix(llm): normalize message part order for Vertex AI Gemini tool turns (fixes #156)",
      url: "https://github.com/google/artemis/pull/186",
      impact: "Normalized message part ordering for LLM tool call turns in Google Artemis to strictly comply with Vertex AI Gemini conversational turn specifications.",
      tags: ["Vertex AI", "Gemini", "LLM Tool Turns", "Python", "Google OSS"],
      status: "Verified Open-Source PR"
    },
    {
      repo: "vercel/swr",
      prNumber: "#4362",
      prTitle: "fix: avoid redundant _k cache write on mount",
      url: "https://github.com/vercel/swr/pull/4362",
      impact: "Optimized SWR data-fetching lifecycle by eliminating superfluous cache mutations on initial mount, improving client memory efficiency.",
      tags: ["React", "TypeScript", "Cache Optimization", "Vercel OSS"],
      status: "Verified Open-Source PR"
    },
    {
      repo: "ollama/ollama-vscode",
      prNumber: "#91",
      prTitle: "Show thinking settings in Ollama: Diagnose Models (closes #81)",
      url: "https://github.com/ollama/ollama-vscode/pull/91",
      impact: "Added display of thinking settings to Diagnose Models command output and improved long chat stream error handling.",
      tags: ["Ollama", "Local AI", "VS Code Extension", "Developer Tools"],
      status: "Merged Upstream PR"
    }
  ];

  const coreProjects = [
    {
      name: "Drop",
      url: "https://drop.shiroya.in",
      repo: "https://github.com/VG31OP/drop",
      repoName: "VG31OP/drop",
      category: "Encrypted P2P File Sharing",
      description: "Direct device-to-device file transfer engine utilizing WebRTC DataChannels with DTLS end-to-end encryption. Operates with zero cloud storage, unlimited file sizes, and no intermediate servers.",
      stack: ["WebRTC", "TypeScript", "React", "Fastify", "DTLS/SCTP"]
    },
    {
      name: "BgZero",
      url: "https://bgzero.shiroya.in",
      repo: "https://github.com/VG31OP/BGZero",
      repoName: "VG31OP/BGZero",
      category: "In-Browser Computer Vision",
      description: "Client-side AI image background remover and transparent PNG export engine. Executes image segmentation entirely inside local browser memory with zero image uploads.",
      stack: ["React 18", "TypeScript", "HTML5 Canvas", "Computer Vision"]
    },
    {
      name: "Web Shiroya",
      url: "https://web.shiroya.in",
      repo: "https://github.com/VG31OP/web-installer",
      repoName: "VG31OP/web-installer",
      category: "Website Downloader & Asset Extractor",
      description: "Self-hosted web crawler and source downloader that packages complete website HTML, CSS, JavaScript, and assets into downloadable ZIP archives.",
      stack: ["Node.js", "Express", "Socket.io", "wget"]
    },
    {
      name: "Network-Speed-Combiner",
      url: "https://github.com/VG31OP/Network-Speed-Combiner",
      repo: "https://github.com/VG31OP/Network-Speed-Combiner",
      repoName: "VG31OP/Network-Speed-Combiner",
      category: "Desktop Download Manager & Bonding",
      description: "Desktop download manager application that splits file downloads into chunks across concurrent network adapters (Wi-Fi, Ethernet, cellular) to accelerate target file assembly.",
      stack: ["Electron", "Node.js", "Networking", "Socket Programming"]
    },
    {
      name: "PDF Tools",
      url: "https://pdf.shiroya.in",
      repo: "https://github.com/VG31OP/shiroya.in",
      repoName: "VG31OP/shiroya.in",
      category: "Document Security & Privacy",
      description: "In-memory browser PDF merger, splitter, page organizer, and compression utility keeping sensitive legal and academic documents strictly on the client device.",
      stack: ["WebAssembly", "JavaScript", "PDF.js", "Client RAM"]
    },
    {
      name: "Shiroya.in Platform",
      url: "https://shiroya.in/",
      repo: "https://github.com/VG31OP/shiroya.in",
      repoName: "VG31OP/shiroya.in",
      category: "Personal Brand & Tool Lab",
      description: "High-performance web architecture, kinetic UI, and technical SEO platform engineered for discoverability, machine-readable specifications, and zero tracking.",
      stack: ["React 19", "Vite", "Tailwind CSS", "Framer Motion", "JSON-LD"]
    }
  ];

  const identityPillars = [
    {
      title: "Open-Source Developer & Contributor",
      description: "Active contributor to prominent open-source ecosystems including Google Artemis, Vercel SWR, and Ollama. Creator and maintainer of open tools under the MIT License on GitHub (@VG31OP)."
    },
    {
      title: "AI Engineer & Systems Builder",
      description: "Google Gemini Student Ambassador exploring multimodal AI, LLM tool-calling conversational turn normalization, and client-side computer vision segmentation models."
    },
    {
      title: "Cybersecurity & Privacy Researcher",
      description: "Specializing in defensive privacy engineering: client-side zero-storage sandboxes, WebRTC end-to-end encrypted tunnels, network traffic routing, and OSINT exploration."
    },
    {
      title: "Software Developer & Indie Builder",
      description: "Founder of Orbitra Solution and architect of the Shiroya Tool Lab, building focused, zero-friction web applications engineered for performance, security, and developer productivity."
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#08080A] text-white selection:bg-[#20E070] selection:text-black pt-28 pb-20 px-4 sm:px-8 max-w-6xl mx-auto z-10">
      {/* Background Ambient Glows */}
      <div className="absolute top-32 left-10 w-96 h-96 bg-[#20E070]/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-[#0B3D25]/30 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Back Link */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-[#20E070] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>RETURN TO SHIROYA TOOL LAB</span>
        </Link>
      </div>

      {/* Header Dossier Section */}
      <header className="border-b border-white/10 pb-12 mb-16 space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full lab-glass border border-[#20E070]/40 text-xs font-mono text-[#20E070]">
            <span className="w-2 h-2 rounded-full bg-[#20E070] animate-ping" />
            <span>ACTIVE DEVELOPER // GUJARAT, INDIA</span>
          </div>
          <span className="text-xs font-mono text-gray-500">GITHUB: @VG31OP</span>
          <span className="text-xs font-mono text-gray-500">•</span>
          <span className="text-xs font-mono text-gray-500">DOSSIER v2.4</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-white leading-tight">
            About <span className="text-[#20E070]">Vraj Shiroya</span>
          </h1>
          <p className="text-xl sm:text-2xl font-display font-light text-gray-300">
            Open-Source Developer, AI Engineer &amp; Cybersecurity Researcher
          </p>
        </div>

        <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed max-w-3xl">
          Vraj Shiroya is a software developer, open-source contributor, and AI-focused builder from Gujarat, India. He develops software products, AI-powered applications, developer tools, and experiments across intelligent systems and cybersecurity.
        </p>

        {/* Quick Credentials Badge Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
          <div className="p-3.5 rounded-xl lab-glass border border-white/10 space-y-1">
            <span className="text-[10px] font-mono text-gray-400 block uppercase">Identity</span>
            <span className="text-xs font-mono font-bold text-white">Vraj Shiroya (VG31OP)</span>
          </div>
          <div className="p-3.5 rounded-xl lab-glass border border-white/10 space-y-1">
            <span className="text-[10px] font-mono text-gray-400 block uppercase">Ambassadorship</span>
            <span className="text-xs font-mono font-bold text-[#20E070]">Google Gemini Ambassador</span>
          </div>
          <div className="p-3.5 rounded-xl lab-glass border border-white/10 space-y-1">
            <span className="text-[10px] font-mono text-gray-400 block uppercase">Education</span>
            <span className="text-xs font-mono font-bold text-white">B.Tech CSE (GTU)</span>
          </div>
          <div className="p-3.5 rounded-xl lab-glass border border-white/10 space-y-1">
            <span className="text-[10px] font-mono text-gray-400 block uppercase">Venture</span>
            <span className="text-xs font-mono font-bold text-white">Orbitra Solution</span>
          </div>
        </div>

        {/* Verified Links Action Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://github.com/VG31OP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#20E070] text-black font-mono font-bold text-xs uppercase hover:bg-white hover:shadow-[0_0_25px_rgba(32,224,112,0.6)] transition-all"
          >
            <span>Vraj Shiroya on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/vrajshiroya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl lab-glass border border-white/10 text-white font-mono font-bold text-xs uppercase hover:border-[#20E070] hover:text-[#20E070] transition-all"
          >
            <span>Vraj Shiroya on LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://vraj.shiroya.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl lab-glass border border-white/10 text-white font-mono font-bold text-xs uppercase hover:border-[#20E070] hover:text-[#20E070] transition-all"
          >
            <span>Personal Portfolio (vraj.shiroya.in)</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#20E070]" />
          </a>
          <a
            href="mailto:vraj@shiroya.in"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl lab-glass border border-white/10 text-gray-300 font-mono text-xs hover:border-[#20E070] hover:text-[#20E070] transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>vraj@shiroya.in</span>
          </a>
        </div>
      </header>

      {/* Section 1: Professional Positioning & Connected Roles */}
      <section className="mb-20 space-y-6">
        <div className="flex items-center gap-3">
          <Terminal className="w-5 h-5 text-[#20E070]" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Professional Identity &amp; Engineering Focus
          </h2>
        </div>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Search engines and technology communities encounter Vraj Shiroya across diverse engineering domains. Rather than disparate disciplines, these specializations represent a coherent software engineering philosophy centered on user agency, client-side efficiency, open standards, and high-integrity code:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {identityPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl lab-glass border border-white/10 space-y-2 hover:border-[#20E070]/50 transition-all"
            >
              <h3 className="text-base font-display font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#20E070] shrink-0" />
                <span>{pillar.title}</span>
              </h3>
              <p className="text-xs sm:text-sm font-sans text-gray-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Verified Open-Source Contributions */}
      <section className="mb-20 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <GitPullRequest className="w-5 h-5 text-[#20E070]" />
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                Verified Open-Source Contributions
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 font-mono">
              Real pull requests submitted to upstream open-source codebases.
            </p>
          </div>
          <a
            href="https://github.com/VG31OP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#20E070] hover:underline"
          >
            <span>Open-source contributions by Vraj Shiroya</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="space-y-4">
          {verifiedContributions.map((contrib, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl lab-glass border border-white/10 hover:border-[#20E070]/60 transition-all space-y-4 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-[#20E070]/10 border border-[#20E070]/30 text-[#20E070]">
                    <GitPullRequest className="w-4 h-4" />
                  </span>
                  <div>
                    <a
                      href={contrib.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-base font-bold text-white hover:text-[#20E070] transition-colors flex items-center gap-2"
                    >
                      <span>{contrib.repo}</span>
                      <span className="text-[#20E070] font-normal">{contrib.prNumber}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                    </a>
                    <span className="text-xs font-mono text-gray-400 block mt-0.5">
                      {contrib.prTitle}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#20E070] bg-[#0B3D25] px-2.5 py-1 rounded border border-[#20E070]/30 self-start sm:self-auto">
                  {contrib.status}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                {contrib.impact}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {contrib.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-gray-400 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: AI Development & Intelligent Systems */}
      <section className="mb-20 space-y-6">
        <div className="flex items-center gap-3">
          <Cpu className="w-5 h-5 text-[#20E070]" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            AI Engineering &amp; Intelligent Systems
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl lab-glass border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-[#20E070]">
              <Sparkles className="w-4 h-4" />
              <h3 className="font-display font-bold text-white text-base">Client-Side AI &amp; Computer Vision</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              With <strong>BgZero</strong> (bgzero.shiroya.in), Vraj developed an in-browser AI segmentation system that extracts image subjects and produces transparent cutouts entirely within browser memory. By eliminating remote server API calls, the tool offers complete privacy, instantaneous execution, and zero user data retention.
            </p>
          </div>

          <div className="p-6 rounded-2xl lab-glass border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-[#20E070]">
              <Award className="w-4 h-4" />
              <h3 className="font-display font-bold text-white text-base">Google Gemini Student Ambassador</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Selected as a Google Gemini Student Ambassador, Vraj conducts developer demonstrations, explores multimodal Gemini API applications, and advances understanding of structured tool use, system instruction engineering, and LLM turn normalization.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Cybersecurity Research & Privacy Engineering */}
      <section className="mb-20 space-y-6">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-[#20E070]" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Cybersecurity Research &amp; Privacy Engineering
          </h2>
        </div>

        <div className="p-6 rounded-2xl lab-glass border border-[#20E070]/30 space-y-4">
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            In cybersecurity, Vraj Shiroya focuses on <strong>defensive privacy architecture, secure protocols, and client-side sandboxing</strong> rather than unsubstantiated offensive claims. His work demonstrates that security is best achieved by eliminating unnecessary server trust:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
              <span className="font-mono text-xs font-bold text-[#20E070] flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                Zero Cloud Egress
              </span>
              <p className="text-xs text-gray-400 leading-relaxed">
                Tools run in the browser's local sandbox; confidential documents and images never touch multi-tenant cloud storage.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
              <span className="font-mono text-xs font-bold text-[#20E070] flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                WebRTC DTLS/SCTP
              </span>
              <p className="text-xs text-gray-400 leading-relaxed">
                Direct device-to-device transport in Drop prevents man-in-the-middle inspection on transit payloads.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
              <span className="font-mono text-xs font-bold text-[#20E070] flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                Network Bonding
              </span>
              <p className="text-xs text-gray-400 leading-relaxed">
                Resilience research via Network-Speed-Combiner, routing traffic across redundant physical adapters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Featured Projects & Public Repositories */}
      <section className="mb-20 space-y-6">
        <div className="flex items-center gap-3">
          <Layers className="w-5 h-5 text-[#20E070]" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Software Products &amp; Public Repositories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreProjects.map((project, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl lab-glass border border-white/10 hover:border-[#20E070]/60 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-[#20E070] transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-[10px] font-mono text-[#20E070] bg-[#0B3D25] px-2 py-0.5 rounded border border-[#20E070]/30">
                    {project.category}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((item, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-gray-400 border border-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1 text-xs font-mono">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#20E070] flex items-center gap-1 transition-colors"
                  >
                    <span>{project.repoName}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#20E070] hover:underline flex items-center gap-1 font-bold"
                    >
                      <span>LIVE DEMO</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Education & Verified Credentials */}
      <section className="mb-20 space-y-6">
        <div className="flex items-center gap-3">
          <GraduationCap className="w-5 h-5 text-[#20E070]" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Education &amp; Verified Affiliations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl lab-glass border border-white/10 space-y-2">
            <span className="text-xs font-mono text-[#20E070] block uppercase">ACADEMIC DEGREE</span>
            <h3 className="text-base font-display font-bold text-white">B.Tech in Computer Science &amp; Engineering</h3>
            <p className="text-xs font-mono text-gray-400">Gujarat Technological University (GTU)</p>
            <p className="text-xs text-gray-400 pt-1">
              Curriculum focus on Algorithms, Operating Systems, Web Engineering, and Network Security.
            </p>
          </div>

          <div className="p-6 rounded-2xl lab-glass border border-white/10 space-y-2">
            <span className="text-xs font-mono text-[#20E070] block uppercase">PROGRAM RECOGNITION</span>
            <h3 className="text-base font-display font-bold text-white">Google Gemini Student Ambassador</h3>
            <p className="text-xs font-mono text-gray-400">Google Developer Community</p>
            <p className="text-xs text-gray-400 pt-1">
              Selected campus advocate for Google AI technologies and developer tool evangelism.
            </p>
          </div>

          <div className="p-6 rounded-2xl lab-glass border border-white/10 space-y-2">
            <span className="text-xs font-mono text-[#20E070] block uppercase">VENTURE</span>
            <h3 className="text-base font-display font-bold text-white">Orbitra Solution</h3>
            <p className="text-xs font-mono text-gray-400">Founder &amp; Technical Lead</p>
            <p className="text-xs text-gray-400 pt-1">
              Independent software product incubator focusing on automation, web tools, and business software.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Verified Public Profiles & Connect */}
      <section className="p-8 rounded-3xl lab-glass border-2 border-[#20E070]/40 space-y-6 text-center">
        <div className="space-y-2 max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white">
            Connect with Vraj Shiroya
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
            Direct channels to review authentic code, follow open-source progress, or inquire regarding technical collaboration.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="https://github.com/VG31OP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#20E070] text-black font-mono font-bold text-xs uppercase hover:bg-white hover:shadow-[0_0_25px_rgba(32,224,112,0.6)] transition-all"
          >
            <span>GitHub Profile (@VG31OP)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/vrajshiroya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl lab-glass border border-white/10 text-white font-mono font-bold text-xs uppercase hover:border-[#20E070] hover:text-[#20E070] transition-all"
          >
            <span>LinkedIn Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://x.com/vraj_shiroya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl lab-glass border border-white/10 text-white font-mono font-bold text-xs uppercase hover:border-[#20E070] hover:text-[#20E070] transition-all"
          >
            <span>X / Twitter</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="mailto:vraj@shiroya.in"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl lab-glass border border-white/10 text-gray-300 font-mono text-xs hover:border-[#20E070] hover:text-[#20E070] transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>vraj@shiroya.in</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
