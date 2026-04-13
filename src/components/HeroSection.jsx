// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <header id="home" className="min-h-screen hero-bg flex items-center pt-20 md:pt-24">
      {/* <section id="about" className="max-w-screen-2xl mx-auto px-8 py-24 border-t border-white/10"> */}
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-6 md:py-12">
        {/* Stack on mobile, side by side on desktop */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
          
          {/* Left Content - Full width on mobile */}
          <div className="flex-1 space-y-4 md:space-y-8">
            {/* Badge - Responsive */}
            <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs md:text-sm px-3 md:px-5 py-1.5 md:py-2 rounded-3xl backdrop-blur-md border border-white/20">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#00ff9d] rounded-full animate-pulse"></div>
              SECOND-YEAR COMPUTING STUDENT • NEPAL
            </div>

            {/* Name - Smaller on mobile */}
            <h1 className="heading-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.1] md:leading-none font-black tracking-[-2px] md:tracking-[-4px] hero-text">
              AARYAN<br />KOIRALA
            </h1>

            {/* Title - Responsive */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-zinc-400 font-light">
              Full-Stack MERN • Python<br className="hidden sm:block" />
              Building real tools for real problems
            </p>

            {/* Buttons - Stack on mobile, row on tablet */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a href="#projects" className="px-5 md:px-8 py-2.5 md:py-5 bg-[#00ff9d] text-black font-semibold rounded-xl md:rounded-2xl flex items-center justify-center gap-2 md:gap-3 text-sm md:text-lg hover:scale-105 transition-transform text-center">
                SEE MY WORK
                <i className="fa-solid fa-arrow-right text-xs md:text-base"></i>
              </a>
              <a href="#contact" className="px-5 md:px-8 py-2.5 md:py-5 border border-white/30 hover:border-[#00ff9d] rounded-xl md:rounded-2xl flex items-center justify-center gap-2 md:gap-3 text-sm md:text-lg transition-all text-center">
                LET'S CONNECT
              </a>
            </div>

            {/* Location & Email - Wrap on mobile */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-xs md:text-sm">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-[#00ff9d] text-xs md:text-sm"></i>
                <span>Biratchowk, Morang, Nepal</span>
              </div>
              <a href="mailto:aaryankoirala20@email.com" className="flex items-center gap-2 hover:text-[#00ff9d]">
                <i className="fa-solid fa-envelope text-xs md:text-sm"></i>
                <span className="break-all">aaryankoirala20@email.com</span>
              </a>
            </div>

            {/* Stats - Responsive grid */}
            <div className="grid grid-cols-3 gap-3 md:gap-8 border-t border-white/10 pt-4 md:pt-8">
              <div>
                <div className="text-[#00ff9d] text-2xl md:text-4xl lg:text-5xl font-bold">3</div>
                <div className="text-zinc-500 text-[8px] md:text-xs lg:text-sm tracking-widest">PROJECTS SHIPPED</div>
              </div>
              <div>
                <div className="text-[#00ff9d] text-2xl md:text-4xl lg:text-5xl font-bold">MERN</div>
                <div className="text-zinc-500 text-[8px] md:text-xs lg:text-sm tracking-widest">FULL-STACK</div>
              </div>
              <div>
                <div className="text-[#00ff9d] text-2xl md:text-4xl lg:text-5xl font-bold">2027</div>
                <div className="text-zinc-500 text-[8px] md:text-xs lg:text-sm tracking-widest">GRADUATING</div>
              </div>
            </div>
          </div>

          {/* Right Side - Your Photo (Visible on ALL devices) */}
          <div className="flex justify-center items-center mt-6 md:mt-0">
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-96">
              {/* Glow Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff9d]/20 to-transparent rounded-full blur-xl"></div>
              
              {/* Photo Container */}
              <div className="relative bg-gradient-to-br from-[#00ff9d]/10 to-zinc-900 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 border border-white/20">
                <div className="overflow-hidden rounded-xl sm:rounded-2xl">
                  <img 
                    src="/aaryan.jpeg"  // Replace with your actual photo filename
                    alt="Aaryan Koirala"
                    className="w-full h-auto object-cover rounded-xl sm:rounded-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Tech Stack Badges - Mobile friendly */}
                <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2 bg-black/80 backdrop-blur-lg px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 whitespace-nowrap">
                  <span className="text-[10px] sm:text-xs text-[#00ff9d]">MERN</span>
                  <span className="text-[10px] sm:text-xs text-white">•</span>
                  <span className="text-[10px] sm:text-xs text-[#00ff9d]">Python</span>
                  <span className="text-[10px] sm:text-xs text-white">•</span>
                  <span className="text-[10px] sm:text-xs text-[#00ff9d]">React</span>
                </div>
              </div>
              
              {/* Floating Badges - Responsive positioning */}
              <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-[#00ff9d] text-black text-[9px] sm:text-xs font-bold px-2.5 sm:px-4 py-1 sm:py-2 rounded-full rotate-12 shadow-xl whitespace-nowrap">
                MERN Stack
              </div>
              <div className="absolute -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 bg-white/20 backdrop-blur-lg text-white text-[9px] sm:text-xs font-bold px-2.5 sm:px-4 py-1 sm:py-2 rounded-full -rotate-12 shadow-xl border border-white/20 whitespace-nowrap">
                Python Dev
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
    </header>
  );
};

export default HeroSection;