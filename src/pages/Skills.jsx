// pages/skills.jsx
import React from 'react';

const skillsData = { /* your data stays the same */ };

const Skills = () => {
  return (
    <section id="skills" className="max-w-screen-2xl mx-auto px-8 py-24 bg-white dark:bg-black border-t border-white/10">
      <div className="mb-12">
        <h2 className="section-header text-5xl heading-font font-semibold tracking-tighter text-zinc-900 dark:text-white">TECH STACK</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mt-3">Tools and technologies I work with</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <div key={index} className="bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-white/10 rounded-2xl p-6 fade-in">
            <h3 className="text-xl font-semibold mb-4 capitalize text-[#00ff9d]">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-zinc-100 dark:bg-white/10 rounded-full text-sm text-zinc-700 dark:text-zinc-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;