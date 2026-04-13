// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-zinc-200 dark:border-white/10 py-12 text-center">
      <div className="max-w-screen-2xl mx-auto px-8">
        {/* Copyright */}
        <div className="text-xs text-zinc-500 dark:text-zinc-500 mb-6">
          © 2026 Aaryan Koirala
        </div>
        
        {/* Additional info */}
        <div className="flex flex-col items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex flex-wrap items-center justify-center gap-2 gap-y-3">
            <span>Made with Love and care</span>
            <span className="hidden sm:inline">|</span>
            <span>Designed by Aaryan Koirala</span>
            <span className="hidden sm:inline">|</span>
            <span>Built with React and Tailwind CSS</span>
            <span className="hidden sm:inline">|</span>
            <span>Hosted on Vercel</span>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="mt-6 flex justify-center gap-6 text-lg">
          <a href="https://github.com/Aaryan-dw" target="_blank" rel="noopener noreferrer" 
             className="text-zinc-500 hover:text-[#00ff9d] transition-colors">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/aaryan69koirala" target="_blank" rel="noopener noreferrer" 
             className="text-zinc-500 hover:text-[#00ff9d] transition-colors">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;