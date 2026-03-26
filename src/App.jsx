// App.jsx
import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleScrollAnimations = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.15 });

      document.querySelectorAll('.fade-in').forEach((el) => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    };

    handleScrollAnimations();

    console.log("%cissaaaryanissavibeissaenergyissapositivebaby.", "color:#00ff9d; font-family:monospace");
    console.log("%cDesign refs: yeezy.com for the minimal feel + playboicarti.com for the bold touches.", "color:#888; font-family:monospace");
  }, []);

  return (
    <div className="bg-zinc-950 text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;