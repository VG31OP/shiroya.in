import React from 'react';
import { Link } from 'react-router-dom';
import { useSectionNavigation } from '../hooks/useSectionNavigation';

const Navbar = () => {
  const { goToSection } = useSectionNavigation();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/70 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-5'
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
