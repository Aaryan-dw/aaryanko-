// pages/skills.jsx
import React from 'react';

const skillsData = {
  frontend: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3"],
  backend: ["Node.js", "Express.js", "Python", "REST APIs"],
  database: ["MongoDB", "MySQL", "PostgreSQL"],
  tools: ["Git/GitHub", "VS Code", "Postman", "Figma"]
};

const Skills = () => {
  return (
    <section id="skills" className="max-w-screen-2xl mx-auto px-8 py-24 bg-black border-t border-white/10">
      <div className="mb-12">
        <h2 className="section-header text-5xl heading-font font-semibold tracking-tighter">TECH STACK</h2>
        <p className="text-zinc-400 mt-3">Tools and technologies I work with</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <div key={index} className="bg-zinc-900/30 border border-white/10 rounded-2xl p-6 fade-in">
            <h3 className="text-xl font-semibold mb-4 capitalize text-[#00ff9d]">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="px-3 py-1 bg-white/10 rounded-full text-sm text-zinc-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a 
          href="https://github.com/Aaryan-dw?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 bg-white/5 px-8 py-4 rounded-full border border-white/10 hover:border-[#00ff9d] hover:bg-white/10 transition-all group"
        >
          <i className="fa-brands fa-github text-[#00ff9d] text-2xl group-hover:scale-110 transition-transform"></i>
          <span className="text-zinc-300 group-hover:text-white">Always learning and exploring new technologies</span>
          <i className="fa-solid fa-arrow-right text-[#00ff9d] group-hover:translate-x-1 transition-transform"></i>
        </a>
      </div>
    </section>
  );
};

export default Skills;