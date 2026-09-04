import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, ArrowRightLeft, FileCheck, Sparkles, SlidersHorizontal, 
  Zap, Code, Globe, Terminal, FileCode, CheckCircle2, Eye, Copy, 
  RefreshCw, Star, UploadCloud, Check, ShieldCheck, Download, Layers, Play,
  FileText, Scissors, Minimize2, Image, MoveRight, ArrowUpRight, Radio
} from 'lucide-react';

/* --- TACTILE 3D CARD CONTAINER WITH CURSOR PARALLAX --- */
const TactileCard = ({ children, className = "", onClick, ...props }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -5; // Subtle 5deg tilt max
    const rotY = ((x - centerX) / centerX) * 5;
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/* ============================================================================
   TOOL VISUAL OBJECT 1: BGZERO (IMAGE → BACKGROUND REMOVED)
   ============================================================================ */
const BgZeroObject = () => {
  const [sliderPos, setSliderPos] = useState(55);
  const [isDragging, setIsDragging] = useState(false);
  const [activeSample, setActiveSample] = useState(0);
  const containerRef = useRef(null);

  const samples = [
    { icon: '📸', label: 'PORTRAIT PHOTOGRAPHY', tag: 'AI CUTOUT' },
    { icon: '👟', label: 'PRODUCT SHOWCASE', tag: 'TRANSPARENT PNG' },
    { icon: '🎨', label: 'CREATIVE ASSET', tag: 'EDGE DETECTION' }
  ];

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  return (
    <div className="space-y-3">
      {/* Concept Pipeline Header */}
      <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2 text-gray-300">
          <Image className="w-3.5 h-3.5 text-[#20E070]" />
          <span className="font-bold">IMAGE</span>
          <MoveRight className="w-3 h-3 text-[#20E070]" />
          <span className="text-[#20E070] font-bold">BACKGROUND REMOVED</span>
        </div>
        <span className="text-[10px] font-mono text-gray-500 uppercase">100% LOCAL CANVAS</span>
      </div>

      {/* Interactive Before/After Visual Canvas */}
      <div
        ref={containerRef}
        onMouseMove={(e) => isDragging && handleMove(e.clientX)}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        className="relative w-full h-72 rounded-2xl overflow-hidden bg-[#0A0D12] border border-white/10 select-none cursor-ew-resize group"
      >
        {/* Original Photo Layer (Left Side / Full Width) */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-emerald-950/60 to-slate-950 flex flex-col items-center justify-center">
          <div className="w-24 h-24 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-5xl shadow-xl mb-3">
            {samples[activeSample].icon}
          </div>
          <span className="text-[10px] font-mono text-amber-300/80 font-bold uppercase tracking-widest bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
            ORIGINAL BACKGROUND
          </span>
        </div>

        {/* Removed Background Cutout Layer (Right Side with ClipPath) */}
        <div
          className="absolute inset-0 w-full h-full lab-dot-matrix bg-[#090C10] flex flex-col items-center justify-center z-10"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <div className="w-24 h-24 rounded-2xl bg-[#20E070]/15 border-2 border-[#20E070] flex items-center justify-center text-5xl shadow-[0_0_35px_rgba(32,224,112,0.35)] mb-3 animate-pulse">
            {samples[activeSample].icon}
          </div>
          <span className="text-[10px] font-mono text-[#20E070] font-bold uppercase tracking-widest bg-[#0B3D25] px-2.5 py-0.5 rounded border border-[#20E070]/40">
            ✨ TRANSPARENT PNG CUTOUT
          </span>
        </div>

        {/* Laser Divider Line */}
        <div
          className="absolute inset-y-0 z-20 w-0.5 bg-[#20E070] shadow-[0_0_15px_#20E070] pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        />

        {/* Drag Slider Handle */}
        <div
          className="absolute inset-y-0 z-30 flex items-center justify-center pointer-events-none"
          style={{ left: `calc(${sliderPos}% - 14px)` }}
        >
          <div className="w-7 h-7 rounded-full bg-[#20E070] text-black shadow-[0_0_20px_#20E070] flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">
            <SlidersHorizontal className="w-3.5 h-3.5 text-black" />
          </div>
        </div>

        {/* Helper Badge */}
        <div className="absolute bottom-3 right-3 z-30 px-2 py-1 rounded bg-black/80 backdrop-blur text-[9px] font-mono text-gray-300 border border-white/10">
          DRAG TO REMOVE BG
        </div>
      </div>

      {/* Sample Switcher Buttons */}
      <div className="flex items-center gap-2 pt-1">
        {samples.map((s, i) => (
          <button
            key={i}
            onClick={() => setActiveSample(i)}
            className={`flex-1 py-1.5 px-2 rounded-lg font-mono text-[10px] border text-center transition-colors cursor-pointer ${
              activeSample === i
                ? 'border-[#20E070] bg-[#20E070]/10 text-white font-bold'
                : 'border-white/10 text-gray-400 hover:text-white'
            }`}
          >
            {s.icon} {s.label.split(' ')[0]}
          </button>
        ))}
      </div>
    </div>
  );
};

/* ============================================================================
   TOOL VISUAL OBJECT 2: DROP (FILE → DROP → SHARE P2P)
   ============================================================================ */
const DropObject = () => {
  const [activeFile, setActiveFile] = useState(0);
  const [isTransferring, setIsTransferring] = useState(false);
  const [progress, setProgress] = useState(100);

  const files = [
    { name: 'presentation_deck.pdf', size: '34.2 MB', icon: '📄', type: 'PDF' },
    { name: '4k_footage_clip.mp4', size: '185.0 MB', icon: '🎬', type: 'VIDEO' },
    { name: 'source_build.zip', size: '62.8 MB', icon: '📦', type: 'ZIP' }
  ];

  const triggerTransfer = (index) => {
    setActiveFile(index);
    setIsTransferring(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsTransferring(false);
          return 100;
        }
        return prev + 25;
      });
    }, 120);
  };

  return (
    <div className="space-y-3">
      {/* Concept Pipeline Header */}
      <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2 text-gray-300">
          <UploadCloud className="w-3.5 h-3.5 text-[#20E070]" />
          <span className="font-bold">FILE</span>
          <MoveRight className="w-3 h-3 text-[#20E070]" />
          <span className="font-bold text-[#20E070]">P2P BEAM</span>
          <MoveRight className="w-3 h-3 text-[#20E070]" />
          <span className="font-bold text-white">SHARE</span>
        </div>
        <span className="text-[10px] font-mono text-[#20E070] bg-[#0B3D25] px-2 py-0.5 rounded border border-[#20E070]/30 font-bold">
          WEBRTC ENCRYPTED
        </span>
      </div>

      {/* Interactive Drop & Beam Conduit */}
      <div className="p-4 rounded-2xl bg-[#090C11] border border-white/10 space-y-4">
        {/* Floating File Objects Drop Zone */}
        <div className="grid grid-cols-3 gap-2">
          {files.map((file, i) => (
            <div
              key={i}
              onClick={() => triggerTransfer(i)}
              className={`p-3 rounded-xl border text-left font-mono cursor-pointer transition-all ${
                activeFile === i
                  ? 'border-[#20E070] bg-[#20E070]/10 text-white shadow-[0_0_20px_rgba(32,224,112,0.2)] scale-[1.02]'
                  : 'border-white/10 bg-black/40 text-gray-400 hover:border-white/20'
              }`}
            >
              <div className="text-xl mb-1">{file.icon}</div>
              <div className="text-[11px] font-bold truncate text-white">{file.name}</div>
              <div className="text-[9px] text-[#20E070] font-bold mt-0.5">{file.size}</div>
            </div>
          ))}
        </div>

        {/* P2P Conduit Beam Path */}
        <div className="p-3 rounded-xl bg-black/80 border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-[10px] font-mono">
            <span className="text-gray-400">STATUS: {isTransferring ? 'BEAMING PACKETS...' : 'P2P DIRECT LINK ACTIVE'}</span>
            <span className="text-[#20E070] font-bold">{progress}% SENT</span>
          </div>

          <div className="h-2 bg-white/10 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-[#20E070]/40 via-[#20E070] to-[#20E070] transition-all duration-150 shadow-[0_0_12px_#20E070]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between items-center text-[9px] font-mono text-gray-500 pt-1">
            <span>SENDER: BROWSER ALFA</span>
            <span className="text-[#20E070]">SPEED: 72.4 MB/s</span>
            <span>RECEIVER: BROWSER BETA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   TOOL VISUAL OBJECT 3: PDF TOOLS (PDF → MERGE / SPLIT / COMPRESS)
   ============================================================================ */
const PdfToolsObject = () => {
  const [mode, setMode] = useState('merge'); // merge | split | compress
  const [compressionRatio, setCompressionRatio] = useState(45);

  return (
    <div className="space-y-3">
      {/* Concept Pipeline Header */}
      <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2 text-gray-300">
          <FileText className="w-3.5 h-3.5 text-[#20E070]" />
          <span className="font-bold">PDF</span>
          <MoveRight className="w-3 h-3 text-[#20E070]" />
          <span className="text-[#20E070] font-bold uppercase">{mode.toUpperCase()}</span>
        </div>
        <span className="text-[10px] font-mono text-gray-400">ZERO SERVER UPLOAD</span>
      </div>

      {/* Mode Action Buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => setMode('merge')}
          className={`flex-1 py-1.5 px-3 rounded-lg font-mono text-xs font-bold border transition-all cursor-pointer ${
            mode === 'merge' ? 'border-[#20E070] bg-[#20E070] text-black shadow-[0_0_15px_#20E070]' : 'border-white/10 text-gray-300 bg-black/40 hover:text-white'
          }`}
        >
          MERGE
        </button>
        <button
          onClick={() => setMode('split')}
          className={`flex-1 py-1.5 px-3 rounded-lg font-mono text-xs font-bold border transition-all cursor-pointer ${
            mode === 'split' ? 'border-[#20E070] bg-[#20E070] text-black shadow-[0_0_15px_#20E070]' : 'border-white/10 text-gray-300 bg-black/40 hover:text-white'
          }`}
        >
          SPLIT
        </button>
        <button
          onClick={() => setMode('compress')}
          className={`flex-1 py-1.5 px-3 rounded-lg font-mono text-xs font-bold border transition-all cursor-pointer ${
            mode === 'compress' ? 'border-[#20E070] bg-[#20E070] text-black shadow-[0_0_15px_#20E070]' : 'border-white/10 text-gray-300 bg-black/40 hover:text-white'
          }`}
        >
          COMPRESS
        </button>
      </div>

      {/* Page Transformation Canvas */}
      <div className="p-5 rounded-2xl bg-[#090C11] border border-white/10 h-52 flex flex-col justify-between relative overflow-hidden">
        {/* Dynamic Paper Stacking State Visualizer */}
        <div className="relative my-auto h-32 flex items-center justify-center">
          {mode === 'merge' && (
            <div className="relative flex items-center justify-center">
              <motion.div
                initial={{ x: -60, rotate: -12 }}
                animate={{ x: -15, rotate: -4 }}
                className="w-24 h-32 rounded-lg bg-slate-900 border border-white/20 p-2.5 space-y-1.5 shadow-lg"
              >
                <div className="w-8 h-1 bg-[#20E070] rounded" />
                <div className="w-full h-1 bg-white/20 rounded" />
                <div className="w-3/4 h-1 bg-white/20 rounded" />
                <div className="text-[8px] font-mono text-gray-500 pt-6">PART_1.PDF</div>
              </motion.div>

              <motion.div
                initial={{ x: 60, rotate: 12 }}
                animate={{ x: 15, rotate: 4 }}
                className="w-24 h-32 rounded-lg bg-slate-800 border-2 border-[#20E070] p-2.5 space-y-1.5 shadow-[0_0_25px_rgba(32,224,112,0.3)] z-10"
              >
                <div className="w-10 h-1 bg-[#20E070] rounded" />
                <div className="w-full h-1 bg-white/30 rounded" />
                <div className="w-5/6 h-1 bg-white/30 rounded" />
                <div className="text-[8px] font-mono text-[#20E070] pt-6 font-bold">COMBINED.PDF</div>
              </motion.div>
            </div>
          )}

          {mode === 'split' && (
            <div className="flex items-center gap-6">
              <motion.div initial={{ scale: 0.9 }} animate={{ x: -20, rotate: -8 }} className="w-20 h-28 rounded-lg bg-slate-900 border border-[#20E070] p-2 space-y-1">
                <div className="w-6 h-1 bg-[#20E070] rounded" />
                <div className="w-full h-1 bg-white/20 rounded" />
                <div className="text-[7px] font-mono text-[#20E070] pt-4">PAGE 1</div>
              </motion.div>

              <div className="text-[#20E070] font-mono font-bold text-xs">✂️ SPLIT</div>

              <motion.div initial={{ scale: 0.9 }} animate={{ x: 20, rotate: 8 }} className="w-20 h-28 rounded-lg bg-slate-900 border border-[#20E070] p-2 space-y-1">
                <div className="w-6 h-1 bg-[#20E070] rounded" />
                <div className="w-full h-1 bg-white/20 rounded" />
                <div className="text-[7px] font-mono text-[#20E070] pt-4">PAGE 2</div>
              </motion.div>
            </div>
          )}

          {mode === 'compress' && (
            <div className="w-full space-y-3 px-4">
              <div className="flex justify-between text-xs font-mono text-gray-300">
                <span>COMPRESSION RATIO:</span>
                <span className="text-[#20E070] font-bold">-{compressionRatio}% (-5.4 MB)</span>
              </div>
              <input
                type="range"
                min="10"
                max="85"
                value={compressionRatio}
                onChange={(e) => setCompressionRatio(e.target.value)}
                className="w-full accent-[#20E070] cursor-pointer"
              />
              <div className="text-[10px] font-mono text-gray-400 text-center">
                ORIGINAL: 12.0 MB → OPTIMIZED: {(12 * (1 - compressionRatio / 100)).toFixed(1)} MB
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   TOOL VISUAL OBJECT 4: WEB SHIROYA (URL → WEBSITE → SOURCE CODE)
   ============================================================================ */
const WebShiroyaObject = () => {
  const [urlInput, setUrlInput] = useState('https://web.shiroya.in');
  const [activeCodeTab, setActiveCodeTab] = useState('html');
  const [activeElement, setActiveElement] = useState('hero');

  const presetUrls = ['https://web.shiroya.in', 'https://shiroya.in', 'https://react.dev'];

  return (
    <div className="space-y-4">
      {/* Concept Pipeline Header */}
      <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2 text-gray-300">
          <Globe className="w-3.5 h-3.5 text-[#20E070]" />
          <span className="font-bold">URL</span>
          <MoveRight className="w-3 h-3 text-[#20E070]" />
          <span className="font-bold text-white">WEBSITE</span>
          <MoveRight className="w-3 h-3 text-[#20E070]" />
          <span className="text-[#20E070] font-bold">SOURCE CODE</span>
        </div>
        <span className="text-[10px] font-mono text-[#20E070] bg-[#0B3D25] px-2 py-0.5 rounded border border-[#20E070]/30 font-bold">
          INSTANT EXTRACTOR
        </span>
      </div>

      {/* URL Input Bar & Quick Selectors */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 p-3 rounded-xl bg-black/80 border border-[#20E070]/50 focus-within:border-[#20E070] shadow-[0_0_20px_rgba(32,224,112,0.15)]">
          <Globe className="w-4 h-4 text-[#20E070] shrink-0" />
          <input
            type="text"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            className="flex-1 bg-transparent font-mono text-xs sm:text-sm text-white font-bold outline-none"
            placeholder="Paste website URL..."
          />
          <span className="text-[10px] font-mono text-black bg-[#20E070] px-2.5 py-1 rounded font-bold uppercase shadow-[0_0_10px_#20E070]">
            EXTRACT 200 OK
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400">
          <span className="text-gray-500 font-bold">QUICK SAMPLE URLS:</span>
          {presetUrls.map((url, i) => (
            <button
              key={i}
              onClick={() => setUrlInput(url)}
              className={`px-2.5 py-0.5 rounded border transition-colors cursor-pointer ${
                urlInput === url ? 'border-[#20E070] text-[#20E070] bg-[#20E070]/10 font-bold' : 'border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              {url.replace('https://', '')}
            </button>
          ))}
        </div>
      </div>

      {/* Split Workstation Inspector */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
        {/* Left Column: Interactive DOM Selector */}
        <div className="sm:col-span-5 p-3.5 rounded-xl bg-[#090C11] border border-white/10 space-y-2 font-mono text-xs">
          <div className="flex items-center justify-between text-gray-400 border-b border-white/10 pb-2 mb-1">
            <span className="flex items-center gap-1 font-bold text-gray-200">
              <Eye className="w-3.5 h-3.5 text-[#20E070]" />
              <span>DOM SELECTOR</span>
            </span>
            <span className="text-[9px] text-[#20E070]">HOVER TO VIEW</span>
          </div>

          <div
            onMouseEnter={() => setActiveElement('hero')}
            onClick={() => setActiveElement('hero')}
            className={`p-2.5 rounded-lg border transition-all cursor-pointer ${
              activeElement === 'hero' ? 'border-[#20E070] bg-[#20E070]/15 text-white font-bold' : 'border-white/10 bg-white/5 text-gray-400'
            }`}
          >
            <div className="flex justify-between items-center">
              <span>&lt;HeroSection /&gt;</span>
              <span className="text-[9px] text-[#20E070]">#HERO-NODE</span>
            </div>
          </div>

          <div
            onMouseEnter={() => setActiveElement('nav')}
            onClick={() => setActiveElement('nav')}
            className={`p-2.5 rounded-lg border transition-all cursor-pointer ${
              activeElement === 'nav' ? 'border-[#20E070] bg-[#20E070]/15 text-white font-bold' : 'border-white/10 bg-white/5 text-gray-400'
            }`}
          >
            <div className="flex justify-between items-center">
              <span>&lt;NavDock /&gt;</span>
              <span className="text-[9px] text-[#20E070]">#NAVBAR</span>
            </div>
          </div>

          <div
            onMouseEnter={() => setActiveElement('grid')}
            onClick={() => setActiveElement('grid')}
            className={`p-2.5 rounded-lg border transition-all cursor-pointer ${
              activeElement === 'grid' ? 'border-[#20E070] bg-[#20E070]/15 text-white font-bold' : 'border-white/10 bg-white/5 text-gray-400'
            }`}
          >
            <div className="flex justify-between items-center">
              <span>&lt;ToolLabGrid /&gt;</span>
              <span className="text-[9px] text-[#20E070]">#TOOL-GRID</span>
            </div>
          </div>
        </div>

        {/* Right Column: Code Stream Viewer */}
        <div className="sm:col-span-7 p-3.5 rounded-xl bg-[#060D09] border border-[#20E070]/40 font-mono text-xs space-y-2 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5 text-[#20E070] font-bold">
              <FileCode className="w-4 h-4" />
              <span>PARSED SOURCE CODE</span>
            </div>

            <div className="flex gap-1">
              {['html', 'css', 'react'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveCodeTab(tab)}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase transition-colors cursor-pointer ${
                    activeCodeTab === tab ? 'bg-[#20E070] text-black' : 'bg-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 rounded bg-black/90 border border-white/10 text-[11px] leading-relaxed text-[#20E070] overflow-x-auto min-h-24 font-mono">
            {activeCodeTab === 'html' && (
              <div>
                <span className="text-purple-400">&lt;section</span> <span className="text-amber-300">id</span>=<span className="text-emerald-300">"{activeElement}-target"</span>&gt;<br />
                &nbsp;&nbsp;<span className="text-purple-400">&lt;div</span> <span className="text-amber-300">class</span>=<span className="text-emerald-300">"shiroya-extracted-element"</span>&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- Parsed from {urlInput} --&gt;<br />
                &nbsp;&nbsp;<span className="text-purple-400">&lt;/div&gt;</span><br />
                <span className="text-purple-400">&lt;/section&gt;</span>
              </div>
            )}

            {activeCodeTab === 'css' && (
              <div className="text-sky-300">
                <span className="text-amber-300">#{activeElement}-target</span> &#123;<br />
                &nbsp;&nbsp;<span className="text-purple-300">accent-color</span>: <span className="text-emerald-300">#20E070</span>;<br />
                &nbsp;&nbsp;<span className="text-purple-300">backdrop-filter</span>: <span className="text-emerald-300">blur(16px)</span>;<br />
                &#125;
              </div>
            )}

            {activeCodeTab === 'react' && (
              <div className="text-indigo-300">
                <span className="text-purple-400">import React</span> <span className="text-purple-400">from</span> <span className="text-emerald-300">'react'</span>;<br /><br />
                <span className="text-purple-400">export default function</span> <span className="text-amber-300">{activeElement.toUpperCase()}Component</span>() &#123;...&#125;
              </div>
            )}
          </div>

          <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1">
            <span className="flex items-center gap-1 text-[#20E070]">
              <CheckCircle2 className="w-3 h-3" />
              <span>LIVE PARSING COMPLETE</span>
            </span>
            <span className="text-gray-500 font-mono">LATENCY: 0.08s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   MAIN TOOL LAB SECTION CONTAINER (EDITORIAL & ASYMMETRIC LAYOUT)
   ============================================================================ */
const InteractiveToolLab = () => {
  const [filter, setFilter] = useState('all'); // all | highlights

  const liveTools = [
    {
      id: "01",
      name: "WEB SHIROYA",
      domainUrl: "web.shiroya.in",
      category: "SOURCE CODE ENGINE",
      isHighlight: true,
      layoutType: "hero-wide",
      description: "Paste any website URL to extract its clean source code, inspect interactive DOM components, and study modern web engineering instantly in your browser.",
      url: "https://web.shiroya.in",
      visualComponent: <WebShiroyaObject />
    },
    {
      id: "02",
      name: "DROP",
      domainUrl: "drop.shiroya.in",
      category: "PEER-TO-PEER BEAM",
      isHighlight: true,
      layoutType: "split-7",
      description: "Direct P2P file sharing between web browsers using WebRTC end-to-end encryption. Unlimited file sizes with zero cloud storage footprint.",
      url: "https://drop.shiroya.in",
      visualComponent: <DropObject />
    },
    {
      id: "03",
      name: "BGZERO",
      domainUrl: "bgzero.shiroya.in",
      category: "AI IMAGE CUTOUT",
      isHighlight: false,
      layoutType: "split-5",
      description: "Instant browser-based background removal engine. Zero image upload to external servers — fast, private, high precision.",
      url: "https://bgzero.shiroya.in",
      visualComponent: <BgZeroObject />
    },
    {
      id: "04",
      name: "PDF TOOLS",
      domainUrl: "pdf.shiroya.in",
      category: "DOCUMENT UTILITY",
      isHighlight: false,
      layoutType: "full-wide",
      description: "Merge, split, re-order, and compress PDF documents locally inside your browser canvas with total data privacy.",
      url: "https://pdf.shiroya.in",
      visualComponent: <PdfToolsObject />
    }
  ];

  const displayedTools = filter === 'highlights' 
    ? liveTools.filter(t => t.isHighlight) 
    : liveTools;

  return (
    <section id="tools" className="relative py-32 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#20E070]/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#0B3D25]/30 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Editorial Section Header */}
      <div className="mb-20 space-y-6 border-b border-[#20E070]/20 pb-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-[#20E070]/10 border border-[#20E070]/30 text-[#20E070]">
              <Radio className="w-4 h-4 animate-pulse" />
            </div>
            <span className="text-xs font-mono text-[#20E070] tracking-widest uppercase font-bold">
              [ THE HEART OF SHIROYA // {liveTools.length} LIVE UTILITIES ]
            </span>
          </div>

          {/* Integrated Status Filter Pills */}
          <div className="flex items-center gap-2 p-1 rounded-xl lab-glass border border-white/10">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#20E070] text-black shadow-[0_0_15px_#20E070]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              ALL TOOLS ({liveTools.length})
            </button>
            <button
              onClick={() => setFilter('highlights')}
              className={`px-4 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                filter === 'highlights'
                  ? 'bg-[#20E070] text-black shadow-[0_0_15px_#20E070]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>MAIN HIGHLIGHTS (2)</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="text-5xl sm:text-7xl font-display font-black text-white tracking-tight leading-none">
              INTERACTIVE <br />
              <span className="text-[#20E070] relative inline-block">
                TOOL OBJECTS.
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#20E070] rounded-full" />
              </span>
            </h2>
          </div>
          <p className="text-gray-300 font-mono text-xs sm:text-sm max-w-lg leading-relaxed">
            Every utility in this collection is a living browser object. Test their live inputs, inspect transformations, and launch direct tool links.
          </p>
        </div>
      </div>

      {/* Editorial Asymmetric Live Tool Layout */}
      <div className="space-y-16">
        {/* TOOL 01: HERO SHOWCASE (WEB SHIROYA - 12 Columns Full-Width) */}
        {displayedTools.some(t => t.id === "01") && (() => {
          const tool = liveTools.find(t => t.id === "01");
          return (
            <TactileCard
              key={tool.id}
              className="p-8 sm:p-10 rounded-3xl lab-glass border-2 border-[#20E070]/60 space-y-8 relative overflow-hidden group shadow-[0_0_60px_rgba(32,224,112,0.15)]"
            >
              <div className="flex flex-col lg:flex-row justify-between gap-8 border-b border-white/10 pb-8">
                <div className="space-y-4 max-w-xl">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-display font-black text-[#20E070] font-mono">{tool.id}</span>
                    <span className="px-3 py-1 rounded-full bg-[#20E070] text-black font-mono font-bold text-xs uppercase flex items-center gap-1.5 shadow-[0_0_15px_#20E070]">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>FEATURED HIGHLIGHT</span>
                    </span>
                    <span className="text-xs font-mono text-gray-400 border border-white/10 px-3 py-1 rounded-full">
                      {tool.category}
                    </span>
                  </div>

                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl sm:text-6xl font-display font-black text-white hover:text-[#20E070] transition-colors tracking-tight flex items-center gap-3 group/link"
                  >
                    <span>{tool.domainUrl}</span>
                    <ArrowUpRight className="w-8 h-8 text-[#20E070] group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>

                  <p className="text-gray-300 font-sans text-base sm:text-lg leading-relaxed">
                    {tool.description}
                  </p>

                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[#20E070] text-black font-mono font-bold text-xs uppercase hover:bg-white hover:shadow-[0_0_30px_rgba(32,224,112,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span>LAUNCH WEB.SHIROYA.IN</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Right Interactive Object */}
                <div className="lg:w-[540px] shrink-0">
                  {tool.visualComponent}
                </div>
              </div>
            </TactileCard>
          );
        })()}

        {/* ASYMMETRIC GRID: TOOL 02 (DROP 7-COL) & TOOL 03 (BGZERO 5-COL) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* TOOL 02: DROP (7-COL) */}
          {displayedTools.some(t => t.id === "02") && (() => {
            const tool = liveTools.find(t => t.id === "02");
            return (
              <TactileCard
                key={tool.id}
                className="lg:col-span-7 p-7 sm:p-8 rounded-3xl lab-glass border-2 border-[#20E070]/40 space-y-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#20E070] shadow-[0_0_35px_rgba(32,224,112,0.1)]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-display font-black text-[#20E070] font-mono">{tool.id}</span>
                      <span className="text-xs font-mono text-gray-300 border border-white/10 px-3 py-1 rounded-full bg-white/5">
                        {tool.category}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-black font-bold bg-[#20E070] px-2.5 py-0.5 rounded shadow-[0_0_10px_#20E070]">
                      MAIN HIGHLIGHT
                    </span>
                  </div>

                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl sm:text-5xl font-display font-black text-white hover:text-[#20E070] transition-colors tracking-tight flex items-center gap-2"
                  >
                    <span>{tool.domainUrl}</span>
                    <ArrowUpRight className="w-6 h-6 text-[#20E070]" />
                  </a>

                  <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                <div>
                  {tool.visualComponent}
                </div>

                <div className="pt-2">
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#20E070] text-black font-mono font-bold text-xs uppercase hover:bg-white hover:shadow-[0_0_25px_rgba(32,224,112,0.5)] transition-all duration-300"
                  >
                    <span>OPEN DROP.SHIROYA.IN</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </TactileCard>
            );
          })()}

          {/* TOOL 03: BGZERO (5-COL) */}
          {displayedTools.some(t => t.id === "03") && (() => {
            const tool = liveTools.find(t => t.id === "03");
            return (
              <TactileCard
                key={tool.id}
                className="lg:col-span-5 p-7 sm:p-8 rounded-3xl lab-glass border border-white/10 space-y-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#20E070]/50"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-display font-black text-[#20E070] font-mono">{tool.id}</span>
                    <span className="text-xs font-mono text-gray-300 border border-white/10 px-3 py-1 rounded-full bg-white/5">
                      {tool.category}
                    </span>
                  </div>

                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl sm:text-4xl font-display font-black text-white hover:text-[#20E070] transition-colors tracking-tight flex items-center gap-2"
                  >
                    <span>{tool.domainUrl}</span>
                    <ArrowUpRight className="w-6 h-6 text-[#20E070]" />
                  </a>

                  <p className="text-gray-300 font-sans text-xs sm:text-sm leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                <div>
                  {tool.visualComponent}
                </div>

                <div className="pt-2">
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white/10 text-white font-mono font-bold text-xs uppercase hover:bg-[#20E070] hover:text-black transition-all duration-300 border border-white/10 hover:border-[#20E070]"
                  >
                    <span>OPEN BGZERO.SHIROYA.IN</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </TactileCard>
            );
          })()}
        </div>

        {/* TOOL 04: PDF TOOLS (FULL WIDE 12-COL EDITORIAL CARD) */}
        {displayedTools.some(t => t.id === "04") && (() => {
          const tool = liveTools.find(t => t.id === "04");
          return (
            <TactileCard
              key={tool.id}
              className="p-8 sm:p-10 rounded-3xl lab-glass border border-white/10 space-y-8 relative overflow-hidden group hover:border-[#20E070]/50"
            >
              <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="space-y-4 max-w-xl">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-display font-black text-[#20E070] font-mono">{tool.id}</span>
                    <span className="text-xs font-mono text-gray-300 border border-white/10 px-3 py-1 rounded-full bg-white/5">
                      {tool.category}
                    </span>
                  </div>

                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl sm:text-5xl font-display font-black text-white hover:text-[#20E070] transition-colors tracking-tight flex items-center gap-3"
                  >
                    <span>{tool.domainUrl}</span>
                    <ArrowUpRight className="w-7 h-7 text-[#20E070]" />
                  </a>

                  <p className="text-gray-300 font-sans text-base leading-relaxed">
                    {tool.description}
                  </p>

                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white/10 text-white font-mono font-bold text-xs uppercase hover:bg-[#20E070] hover:text-black transition-all duration-300 border border-white/10 hover:border-[#20E070]"
                  >
                    <span>OPEN PDF.SHIROYA.IN</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Right Visual Object */}
                <div className="lg:w-[500px] shrink-0">
                  {tool.visualComponent}
                </div>
              </div>
            </TactileCard>
          );
        })()}
      </div>

      {/* ============================================================================
         SIMPLE MINIMAL "COMING SOON" MOMENT AT THE END OF TOOLS SECTION
         ============================================================================ */}
      <div className="mt-28 pt-16 border-t border-dashed border-[#20E070]/30 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full lab-glass border border-[#20E070]/40 text-xs font-mono text-[#20E070]">
          <span className="w-2 h-2 rounded-full bg-[#20E070] animate-ping" />
          <span>COMING SOON</span>
        </div>

        <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
          More useful tools are on the way.
        </h3>

        <div className="flex items-center justify-center gap-2 text-xs font-mono text-gray-500 pt-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#20E070]/60" />
          <span>SHIROYA TOOL LAB // IN ACTIVE DEVELOPMENT</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#20E070]/60" />
        </div>
      </div>
    </section>
  );
};

export default InteractiveToolLab;
