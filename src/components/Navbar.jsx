// components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-8 py-3 md:py-4 flex items-center justify-between">
        {/* Logo - Left */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-[#00ff9d] rounded-xl md:rounded-2xl flex items-center justify-center text-black font-bold text-sm md:text-xl rotate-12">
            AK
          </div>
          <h1 className="heading-font text-lg md:text-2xl font-semibold tracking-tighter">AARYAN</h1>
        </div>

        {/* Nav Links - Centered using absolute positioning */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-6 lg:gap-8 text-xs uppercase tracking-widest font-medium">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-3 md:gap-4">
          <a href="https://github.com/Aaryan-dw" target="_blank" rel="noopener noreferrer" 
             className="flex items-center gap-1 md:gap-2 text-xs md:text-sm hover:text-[#00ff9d] transition-colors">
            <i className="fa-brands fa-github text-sm md:text-base"></i>
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/aaryan69koirala" target="_blank" rel="noopener noreferrer" 
             className="flex items-center gap-1 md:gap-2 text-xs md:text-sm hover:text-[#00ff9d] transition-colors">
            <i className="fa-brands fa-linkedin text-sm md:text-base"></i>
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <a href="koiralaAaryan.pdf" download="Aaryan-Koirala-CV.pdf"
             className="px-3 md:px-5 py-1.5 md:py-2.5 bg-white text-black font-semibold rounded-full md:rounded-2xl flex items-center gap-1 md:gap-2 hover:bg-[#00ff9d] hover:text-black uppercase text-[10px] md:text-xs tracking-widest transition-all">
            <i className="fa-solid fa-download text-xs md:text-sm"></i>
            <span>CV</span>
          </a>

          <button onClick={toggleMobileMenu} className="md:hidden text-xl">
            <i id="hamburger-icon" className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`md:hidden bg-zinc-950 border-t border-white/10 px-6 py-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col gap-4 text-base font-medium">
          <a href="#about" onClick={closeMobileMenu} className="py-1 hover:text-[#00ff9d] transition-colors">About</a>
          <a href="#projects" onClick={closeMobileMenu} className="py-1 hover:text-[#00ff9d] transition-colors">Projects</a>
          <a href="#skills" onClick={closeMobileMenu} className="py-1 hover:text-[#00ff9d] transition-colors">Skills</a>
          <a href="#contact" onClick={closeMobileMenu} className="py-1 hover:text-[#00ff9d] transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;