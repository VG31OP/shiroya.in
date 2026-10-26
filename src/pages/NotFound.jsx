import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Home, ArrowLeft } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

const NotFound = () => {
  usePageMeta({
    title: "404 — Page Not Found | shiroya.in",
    description: "The requested tool or page could not be located in Shiroya Tool Lab.",
    canonicalUrl: null,
    robots: "noindex, nofollow"
  });

  return (
    <section className="section-padding py-40 min-h-screen max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center">
      <div className="p-3 rounded-2xl bg-[#20E070]/10 border border-[#20E070]/30 text-[#20E070] mb-6">
        <Terminal className="w-8 h-8" />
      </div>

      <span className="font-mono text-xs uppercase tracking-widest text-[#20E070] mb-3">
        [ ERROR 404 // ROUTE NOT FOUND ]
      </span>

      <h1 className="text-5xl sm:text-7xl font-display font-black text-white tracking-tight mb-4">
        OUT OF RANGE.
      </h1>

      <p className="text-gray-400 font-mono text-sm sm:text-base max-w-md mb-8 leading-relaxed">
        The tool, page, or asset you requested does not exist in the Shiroya Tool Lab.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#20E070] text-black font-mono font-bold text-xs uppercase hover:bg-white hover:shadow-[0_0_25px_rgba(32,224,112,0.6)] transition-all duration-300"
        >
          <Home className="w-4 h-4" />
          <span>RETURN TO LAB HOME</span>
        </Link>
        <Link
          to="/#tools"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl lab-glass border border-white/10 text-white font-mono font-bold text-xs uppercase hover:border-[#20E070] hover:text-[#20E070] transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>VIEW ACTIVE TOOLS</span>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
