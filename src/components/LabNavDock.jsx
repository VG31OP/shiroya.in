import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const LabNavDock = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Floating Spatial Dock Bar */}
      <header className="fixed top-6 inset-x-0 z-50 px-4 sm:px-8 max-w-6xl mx-auto pointer-events-none">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto w-full px-5 py-2.5 rounded-full lab-glass transition-all duration-300 flex items-center justify-between border ${
            scrolled ? 'border-[#20E070]/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' : 'border-white/10'
          }`}
        >
          {/* Brand Logo Image (Transparent Cutout) */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
          >
            <img
              src="/shiroya-logo-transparent.png"
              alt="SHIROYA.in"
              className="h-8 sm:h-9 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 font-mono text-xs text-gray-300">
            <button
              onClick={() => scrollToSection('tools')}
              className="px-4 py-1.5 rounded-full hover:text-[#20E070] hover:bg-white/5 transition-colors cursor-pointer"
            >
              [ 01. TOOL LAB ]
            </button>
            <button
              onClick={() => scrollToSection('creator')}
              className="px-4 py-1.5 rounded-full hover:text-[#20E070] hover:bg-white/5 transition-colors cursor-pointer"
            >
              [ 02. CREATOR ]
            </button>
          </nav>

          {/* Direct Fast Jump Tools Trigger */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="https://web.shiroya.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#20E070] hover:text-[#20E070] text-xs font-mono text-gray-300 transition-colors flex items-center gap-1"
            >
              <span>WEB</span>
              <ArrowUpRight className="w-3 h-3 text-[#20E070]" />
            </a>
            <a
              href="https://drop.shiroya.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#20E070] hover:text-[#20E070] text-xs font-mono text-gray-300 transition-colors flex items-center gap-1"
            >
              <span>DROP</span>
              <ArrowUpRight className="w-3 h-3 text-[#20E070]" />
            </a>
            <a
              href="https://pdf.shiroya.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#20E070] hover:text-[#20E070] text-xs font-mono text-gray-300 transition-colors flex items-center gap-1"
            >
              <span>PDF</span>
              <ArrowUpRight className="w-3 h-3 text-[#20E070]" />
            </a>
          </div>

          {/* Mobile Menu Toggle button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white hover:text-[#20E070] focus:outline-none"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 z-40 p-6 rounded-2xl lab-glass border border-[#20E070]/30 space-y-4 md:hidden shadow-2xl"
          >
            <div className="space-y-3 font-mono text-sm">
              <button
                onClick={() => scrollToSection('tools')}
                className="w-full text-left p-3 rounded-xl bg-white/5 text-white hover:text-[#20E070]"
              >
                01. INTERACTIVE TOOL LAB
              </button>
              <button
                onClick={() => scrollToSection('creator')}
                className="w-full text-left p-3 rounded-xl bg-white/5 text-white hover:text-[#20E070]"
              >
                02. CREATOR & PHILOSOPHY
              </button>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
              <a
                href="https://web.shiroya.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-[#20E070] text-black font-mono font-bold text-xs text-center"
              >
                WEB SHIROYA
              </a>
              <a
                href="https://drop.shiroya.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-white/10 text-white font-mono font-bold text-xs text-center border border-white/10"
              >
                DROP
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LabNavDock;
