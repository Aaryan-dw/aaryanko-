// pages/about.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="max-w-screen-2xl mx-auto px-8 py-24 border-t border-white/10">
      <div className="grid md:grid-cols-12 gap-16">
        <div className="md:col-span-5">
          <h2 className="section-header text-5xl heading-font font-semibold tracking-tighter mb-6">ABOUT ME</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Second-year BSc (Hons) Computing student at Itahari International College. 
            Passionate about building practical tools that solve real problems — especially for small businesses in Nepal.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-xs uppercase bg-white/10 px-5 py-3 rounded-3xl">🇳🇵 NEPAL</div>
            <div className="text-xs uppercase bg-white/10 px-5 py-3 rounded-3xl">LONDON METROPOLITIAN UNIVERSITY</div>
          </div>
        </div>

        <div className="md:col-span-7 text-lg leading-relaxed text-zinc-300 fade-in">
          <p className="mb-6">
            I have hands-on experience in full-stack MERN development, Python scripting, and database design using MySQL and MongoDB. 
            Completed multiple independent projects solving real-world problems in inventory management and media conversion.
          </p>
          <p>
            Seeking a software development internship to deepen technical expertise, contribute to production-level products, 
            and grow under experienced engineering mentorship.
          </p>

          <div className="mt-16">
            <h3 className="text-[#00ff9d] text-sm tracking-widest mb-3">EDUCATION</h3>
            <div className="flex justify-between items-baseline border-l-2 border-[#00ff9d] pl-6">
              <div>
                <p className="font-semibold">BSc (Hons) Computing</p>
                <p className="text-zinc-400">Itahari International College • Affiliated with London Metropolitan University</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-sm">2024 — 2027</p>
                <p className="text-xs text-zinc-500">Running</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;