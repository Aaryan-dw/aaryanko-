// pages/projects.jsx
import React from 'react';

const projectsData = [ /* your data stays the same */ ];

const Projects = () => {
  return (
    <section id="projects" className="max-w-screen-2xl mx-auto px-8 py-24 bg-white dark:bg-black border-t border-b border-zinc-200 dark:border-white/10">
      <div className="mb-12">
        <h2 className="section-header text-5xl heading-font font-semibold tracking-tighter text-zinc-900 dark:text-white">PROJECTS</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mt-3">Real tools. Built from scratch.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projectsData.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer"
             className="project-card bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 rounded-3xl p-6 cursor-pointer hover:border-[#00ff9d]/50 transition-all block group">
            <div className="w-14 h-14 bg-[#00ff9d]/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#00ff9d]/20 transition-all">
              <i className={`fa-solid ${project.icon} text-2xl text-[#00ff9d]`}></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-[#00ff9d] transition-colors text-zinc-900 dark:text-white">{project.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag, i) => (
                <span key={i} className="text-[10px] bg-zinc-100 dark:bg-white/10 px-2 py-1 rounded-full text-zinc-700 dark:text-zinc-300">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-500 group-hover:text-[#00ff9d] transition-colors">
              <i className="fa-brands fa-github"></i>
              <span>View on GitHub</span>
              <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;