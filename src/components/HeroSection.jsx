// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="home" className="min-h-screen hero-bg flex items-center pt-20 md:pt-24">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Stack on mobile, side by side on desktop */}
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          
          {/* Left Content - Full width on mobile */}
          <div className="flex-1 space-y-4 md:space-y-8">
            {/* Badge - Responsive */}
            <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs md:text-sm px-3 md:px-5 py-1.5 md:py-2 rounded-3xl backdrop-blur-md border border-white/20">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#00ff9d] rounded-full animate-pulse"></div>
              SECOND-YEAR COMPUTING STUDENT • NEPAL
            </div>

            {/* Name - Smaller on mobile */}
            <h1 className="heading-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] leading-[1.1] md:leading-none font-black tracking-[-2px] md:tracking-[-4px] hero-text">
              AARYAN<br />KOIRALA
            </h1>

            {/* Title - Responsive */}
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-zinc-400 font-light">
              Full-Stack MERN • Python<br className="hidden sm:block" />
              Building real tools for real problems
            </p>

            {/* Buttons - Stack on mobile, row on tablet */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a href="#projects" className="px-6 md:px-8 py-3 md:py-5 bg-[#00ff9d] text-black font-semibold rounded-2xl md:rounded-3xl flex items-center justify-center gap-2 md:gap-3 text-sm md:text-lg hover:scale-105 transition-transform text-center">
                SEE MY WORK
                <i className="fa-solid fa-arrow-right text-sm md:text-base"></i>
              </a>
              <a href="#contact" className="px-6 md:px-8 py-3 md:py-5 border border-white/30 hover:border-[#00ff9d] rounded-2xl md:rounded-3xl flex items-center justify-center gap-2 md:gap-3 text-sm md:text-lg transition-all text-center">
                LET'S CONNECT
              </a>
            </div>

            {/* Location & Email - Wrap on mobile */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8 text-xs md:text-sm">
              <div className="flex items-center gap-2 md:gap-3">
                <i className="fa-solid fa-location-dot text-[#00ff9d] text-sm md:text-base"></i>
                <span>Biratchowk, Morang, Nepal</span>
              </div>
              <a href="mailto:aaryankoirala20@email.com" className="flex items-center gap-2 md:gap-3 hover:text-[#00ff9d]">
                <i className="fa-solid fa-envelope text-sm md:text-base"></i>
                <span className="break-all">aaryankoirala20@email.com</span>
              </a>
            </div>

            {/* Stats - Responsive grid */}
            <div className="grid grid-cols-3 gap-3 md:gap-8 border-t border-white/10 pt-4 md:pt-8">
              <div>
                <div className="text-[#00ff9d] text-3xl md:text-5xl font-bold">3</div>
                <div className="text-zinc-500 text-[10px] md:text-sm tracking-widest">PROJECTS SHIPPED</div>
              </div>
              <div>
                <div className="text-[#00ff9d] text-3xl md:text-5xl font-bold">MERN</div>
                <div className="text-zinc-500 text-[10px] md:text-sm tracking-widest">FULL-STACK</div>
              </div>
              <div>
                <div className="text-[#00ff9d] text-3xl md:text-5xl font-bold">2027</div>
                <div className="text-zinc-500 text-[10px] md:text-sm tracking-widest">GRADUATING</div>
              </div>
            </div>
          </div>

          {/* Right Image - Hidden on mobile, visible on desktop */}
          <div className="hidden md:flex flex-1 justify-end">
            <div className="relative w-full max-w-md lg:w-96 lg:h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff9d]/10 to-transparent rounded-[4rem] rotate-12"></div>
              <div className="w-72 h-72 lg:w-80 lg:h-80 bg-zinc-900 border border-white/10 rounded-3xl flex items-center justify-center overflow-hidden relative">
                <div className="text-center p-4">
                  <div className="text-6xl lg:text-8xl mb-4 lg:mb-6">🚀</div>
                  <p className="text-lg lg:text-2xl font-medium">Currently building<br />with MERN + Python</p>
                  <div className="mt-6 lg:mt-8 flex justify-center gap-2 flex-wrap">
                    <div className="px-3 lg:px-4 py-1 bg-white/10 rounded-3xl text-xs">MONGODB</div>
                    <div className="px-3 lg:px-4 py-1 bg-white/10 rounded-3xl text-xs">REACT</div>
                    <div className="px-3 lg:px-4 py-1 bg-white/10 rounded-3xl text-xs">NODE</div>
                  </div>
                </div>

                <div className="absolute -top-3 -right-3 lg:-top-4 lg:-right-4 bg-white text-black text-[10px] lg:text-xs font-bold px-3 lg:px-5 py-1.5 lg:py-2 rounded-2xl lg:rounded-3xl rotate-12 shadow-xl">INVENTORY SYSTEM</div>
                <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-[#00ff9d] text-black text-[10px] lg:text-xs font-bold px-3 lg:px-5 py-1.5 lg:py-2 rounded-2xl lg:rounded-3xl -rotate-12 shadow-xl">VIDEO → AUDIO</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Button - Responsive */}
      <button 
        onClick={handleScrollDown}
        className="absolute bottom-6 md:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 md:gap-2 text-[10px] md:text-xs tracking-[2px] opacity-50 hover:opacity-100 transition-all cursor-pointer group"
      >
        <span className="group-hover:tracking-[3px] transition-all">SCROLL FOR MORE</span>
        <i className="fa-solid fa-chevron-down animate-bounce group-hover:translate-y-1 transition-transform"></i>
      </button>
    </header>
  );
};

export default HeroSection;