import React from 'react';
import { Link } from 'react-router-dom';
import { useSectionNavigation } from '../hooks/useSectionNavigation';
import shiroyaLogo from '../assets/shiroya-logo-transparent.png';

const Footer = () => {
  const { goToSection } = useSectionNavigation();

  return (
    <footer id="contact" className="section-padding py-16 bg-black">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link to="/" aria-label="SHIROYA.in Home" className="flex items-center gap-2 group">
            <img
              src={shiroyaLogo}
              alt="SHIROYA.in Home"
              width={160}
              height={36}
              className="h-8 sm:h-9 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>
          <p className="text-gray-400 text-sm max-w-sm text-center md:text-left">
            Fast, browser-based tools. No login. No complexity.
          </p>
          <div className="text-gray-400 text-xs mt-2 space-y-1">
            <div>
              Built by <Link to="/about" className="text-[#20E070] font-medium hover:underline">Vraj Shiroya</Link> — Open-Source Developer &amp; AI Engineer
            </div>
            <div className="text-gray-500 text-[11px]">
              Gujarat, India • Founder, Orbitra Solution • Google Gemini Ambassador
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4 mt-2">
            <a 
              href="https://github.com/VG31OP" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Vraj Shiroya on GitHub (@VG31OP)" 
              title="Vraj Shiroya on GitHub" 
              className="text-gray-400 hover:text-[#20E070] transition-colors"
            >
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/vrajshiroya" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Vraj Shiroya on LinkedIn" 
              title="Vraj Shiroya on LinkedIn" 
              className="text-gray-400 hover:text-[#20E070] transition-colors"
            >
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.732s.784-1.732 1.75-1.732 1.75.779 1.75 1.732-.784 1.732-1.75 1.732zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a 
              href="https://vraj.shiroya.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Vraj Shiroya Portfolio Website" 
              title="Vraj Shiroya Portfolio" 
              className="text-gray-400 hover:text-[#20E070] text-xs font-mono transition-colors"
            >
              vraj.shiroya.in
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-mono">
          <button
            type="button"
            onClick={() => goToSection('tools')}
            className="text-gray-400 hover:text-[#20E070] transition-colors cursor-pointer"
          >
            [ TOOL LAB ]
          </button>
          <Link to="/about" className="text-gray-300 hover:text-[#20E070] transition-colors">
            [ ABOUT VRAJ SHIROYA ]
          </Link>
          <a href="https://github.com/VG31OP" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#20E070] transition-colors">
            [ OPEN SOURCE ]
          </a>
          <a href="mailto:vraj@shiroya.in" className="text-gray-400 hover:text-[#20E070] transition-colors">
            [ CONTACT ]
          </a>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto px-6 text-[10px] text-gray-500 font-mono uppercase tracking-[2px]">
        <span>&copy; {new Date().getFullYear()} Vraj Shiroya • Shiroya.in</span>
        <div className="flex gap-6 items-center">
          <a href="https://github.com/VG31OP/shiroya.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#20E070] transition-colors">Source Code</a>
          <Link to="/about" className="hover:text-[#20E070] transition-colors">About</Link>
          <Link to="/privacy" className="hover:text-[#20E070] transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-[#20E070] transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
