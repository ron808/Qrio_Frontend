import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-lg' 
          : 'bg-white/60 backdrop-blur-md'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center"
          >
            <span className="text-3xl font-bold bg-gradient-to-r from-qrio-emerald to-qrio-dark-green bg-clip-text text-transparent tracking-tight hover:scale-105 transition-transform duration-200">
              Qrio
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-qrio-text hover:text-qrio-emerald transition-colors duration-200 font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('who-we-are')}
              className="text-qrio-text hover:text-qrio-emerald transition-colors duration-200 font-medium"
            >
              Who We Are
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-qrio-text hover:text-qrio-emerald transition-colors duration-200 font-medium"
            >
              Contact Us
            </button>
            
            {/* Play Now Button - Glassmorphism */}
            <button
              onClick={() => scrollToSection('play')}
              className="bg-gradient-to-r from-qrio-emerald to-qrio-dark-green text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Play Now!
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-qrio-text hover:text-qrio-emerald focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Glassmorphism */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg border-t border-gray-200">
          <div className="max-w-[1440px] mx-auto px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-3 py-2 rounded-md text-qrio-text hover:bg-qrio-light/50 transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('who-we-are')}
              className="block w-full text-left px-3 py-2 rounded-md text-qrio-text hover:bg-qrio-light/50 transition-colors"
            >
              Who We Are
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 rounded-md text-qrio-text hover:bg-qrio-light/50 transition-colors"
            >
              Contact Us
            </button>
            <button
              onClick={() => scrollToSection('play')}
              className="block w-full px-3 py-2 rounded-md bg-gradient-to-r from-qrio-emerald to-qrio-dark-green text-white font-bold hover:scale-[1.02] transition-transform text-center"
            >
              Play Now!
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;