import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useSectionNavigation } from '../hooks/useSectionNavigation';
import shiroyaLogo from '../assets/shiroya-logo-transparent.png';

const LabNavDock = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { goToSection } = useSectionNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSectionClick = (id) => {
    setMobileOpen(false);
    goToSection(id);
  };

  return (
    <>
      {/* Top Floating Spatial Dock Bar */}
      <header className="fixed top-6 inset-x-0 z-50 px-4 sm:px-8 max-w-6xl mx-auto pointer-events-none">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto w-full px-5 py-2.5 rounded-full transition-all duration-300 flex items-center justify-between border ${
            scrolled 
              ? 'lab-nav-dock-scrolled border-[#20E070]/40 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.95),0_0_20px_rgba(32,224,112,0.15)]' 
              : 'lab-nav-dock border-white/15 shadow-[0_12px_35px_-10px_rgba(0,0,0,0.85)]'
          }`}
        >
          {/* Brand Logo Image (Transparent Cutout) */}
          <Link 
            to="/" 
            aria-label="SHIROYA.in Home"
            className="flex items-center gap-2 group"
          >
            <img
              src={shiroyaLogo}
              alt="SHIROYA.in Home"
              width={160}
              height={36}
              className="h-8 sm:h-9 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 font-mono text-xs text-gray-300">
            <button
              type="button"
              onClick={() => handleSectionClick('tools')}
              className="px-4 py-1.5 rounded-full hover:text-[#20E070] hover:bg-white/5 transition-colors cursor-pointer"
            >
              [ 01. TOOL LAB ]
            </button>
            <Link
              to="/about"
              className={`px-4 py-1.5 rounded-full transition-colors ${
                location.pathname === '/about'
                  ? 'text-[#20E070] bg-[#20E070]/10 border border-[#20E070]/30 font-bold'
                  : 'hover:text-[#20E070] hover:bg-white/5'
              }`}
            >
              [ 02. ABOUT VRAJ ]
            </Link>
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
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            className="md:hidden p-2 text-white hover:text-[#20E070] focus:outline-none cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
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
            className="fixed inset-x-4 top-24 z-40 p-6 rounded-2xl lab-nav-drawer border border-[#20E070]/40 space-y-4 md:hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)]"
          >
            <div className="space-y-3 font-mono text-sm">
              <button
                type="button"
                onClick={() => handleSectionClick('tools')}
                className="w-full text-left p-3 rounded-xl bg-white/5 text-white hover:text-[#20E070] cursor-pointer"
              >
                01. INTERACTIVE TOOL LAB
              </button>
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className={`w-full block text-left p-3 rounded-xl transition-colors ${
                  location.pathname === '/about'
                    ? 'bg-[#20E070]/15 border border-[#20E070]/40 text-[#20E070] font-bold'
                    : 'bg-white/5 text-white hover:text-[#20E070]'
                }`}
              >
                02. ABOUT VRAJ SHIROYA (DOSSIER)
              </Link>
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
