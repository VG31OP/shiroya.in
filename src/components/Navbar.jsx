import React from 'react';
import { Link } from 'react-router-dom';
import { useSectionNavigation } from '../hooks/useSectionNavigation';

const Navbar = () => {
  const { goToSection } = useSectionNavigation();
  const [isVisible, setIsVisible] = React.useState(true);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Detection for background state
      setIsScrolled(currentScrollY > 20);
      
      // Detection for show/hide logic
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down - hide
      } else {
        setIsVisible(true);  // Scrolling up - show
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed -top-[1px] left-0 right-0 z-50 transform-gpu will-change-transform transition-transform duration-300 ease-in-out py-4 pt-5 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-display font-bold text-white tracking-tight">
            shiroya<span className="text-primary">.in</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button 
                onClick={() => goToSection('tools')}
                className="text-sm font-medium text-gray-400 hover:text-primary transition-colors cursor-pointer"
          >
            Tools
          </button>
          <a href="mailto:vraj@shiroya.in" className="text-sm font-medium text-gray-400 hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
                onClick={() => goToSection('tools')}
                className="neon-btn neon-btn-primary !py-1.5 !px-5 text-sm cursor-pointer"
          >
            Try Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
