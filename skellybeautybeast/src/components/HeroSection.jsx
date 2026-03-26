// components/herosection.jsx
import React from 'react';

const HeroSection = () => {
  const handleScrollDown = () => {
    // Scroll to the about section smoothly
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="home" className="min-h-screen hero-bg flex items-center pt-20">
      <div className="max-w-screen-2xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm px-5 py-2 rounded-3xl backdrop-blur-md border border-white/20">
            <div className="w-2 h-2 bg-[#00ff9d] rounded-full animate-pulse"></div>
            SECOND-YEAR COMPUTING STUDENT • NEPAL
          </div>

          <h1 className="heading-font text-7xl md:text-8xl lg:text-[6.5rem] leading-none font-black tracking-[-4px] hero-text">
            AARYAN<br />KOIRALA
          </h1>

          <p className="text-3xl md:text-4xl text-zinc-400 font-light">
            Full-Stack MERN • Python • Building real tools for real problems
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-5 bg-[#00ff9d] text-black font-semibold rounded-3xl flex items-center gap-3 text-lg hover:scale-105 transition-transform">
              SEE MY WORK
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#contact" className="px-8 py-5 border border-white/30 hover:border-[#00ff9d] rounded-3xl flex items-center gap-3 text-lg transition-all">
              LET'S CONNECT
            </a>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-location-dot text-[#00ff9d]"></i>
              <span>Biratchowk, Morang, Nepal</span>
            </div>
            <a href="mailto:aaryankoirala20@email.com" className="flex items-center gap-3 hover:text-[#00ff9d]">
              <i className="fa-solid fa-envelope"></i>
              <span>aaryankoirala20@email.com</span>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-[#00ff9d] text-5xl font-bold">3</div>
              <div className="text-zinc-500 text-sm tracking-widest">PROJECTS SHIPPED</div>
            </div>
            <div>
              <div className="text-[#00ff9d] text-5xl font-bold">MERN</div>
              <div className="text-zinc-500 text-sm tracking-widest">FULL-STACK</div>
            </div>
            <div>
              <div className="text-[#00ff9d] text-5xl font-bold">2027</div>
              <div className="text-zinc-500 text-sm tracking-widest">GRADUATING</div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-end">
          <div className="relative w-96 h-96 lg:w-[420px] lg:h-[420px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ff9d]/10 to-transparent rounded-[4rem] rotate-12"></div>
            <div className="w-80 h-80 bg-zinc-900 border border-white/10 rounded-3xl flex items-center justify-center overflow-hidden relative">
              <div className="text-center">
                <div className="text-8xl mb-6">🚀</div>
                <p className="text-2xl font-medium">Currently building<br />with MERN + Python</p>
                <div className="mt-8 flex justify-center gap-2">
                  <div className="px-4 py-1 bg-white/10 rounded-3xl text-xs">MONGODB</div>
                  <div className="px-4 py-1 bg-white/10 rounded-3xl text-xs">REACT</div>
                  <div className="px-4 py-1 bg-white/10 rounded-3xl text-xs">NODE</div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white text-black text-xs font-bold px-5 py-2 rounded-3xl rotate-12 shadow-xl">INVENTORY SYSTEM</div>
              <div className="absolute -bottom-6 -left-6 bg-[#00ff9d] text-black text-xs font-bold px-5 py-2 rounded-3xl -rotate-12 shadow-xl">VIDEO → AUDIO</div>
            </div>
          </div>
        </div>
      </div>

      {/* Clickable Scroll Button */}
      <button 
        onClick={handleScrollDown}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-xs tracking-[2px] opacity-50 hover:opacity-100 transition-all cursor-pointer group"
      >
        <span className="group-hover:tracking-[3px] transition-all">SCROLL FOR MORE</span>
        <i className="fa-solid fa-chevron-down animate-bounce group-hover:translate-y-1 transition-transform"></i>
      </button>
    </header>
  );
};

export default HeroSection;