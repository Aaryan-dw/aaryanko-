// pages/projects.jsx
import React from 'react';

const projectsData = [
  {
    title: "Gallery IMS",
    description: "Python console app for skin care product sales. Features Buy 3 Get 1 Free offers, VAT calculation, invoice generation, and file-based storage.",
    tags: ["Python", "File Handling", "CLI", "Inventory Management"],
    icon: "fa-boxes",
    link: "https://github.com/Aaryan-dw/Gallery-IMS"
  },
  {
    title: "MeroByapar",
    description: "Full-stack business management system for small businesses in Nepal. Inventory tracking, sales reporting, and customer management with MERN stack.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    icon: "fa-store",
    link: "https://github.com/2024-manoj/MeroByapar.git"
  },
  {
    title: "ConvertIT",
    description: "Web-based media conversion tool using Flask and FFmpeg. Convert audio to video with custom backgrounds, or extract audio from video files.",
    tags: ["Python", "Flask", "FFmpeg", "HTML/CSS"],
    icon: "fa-music",
    link: "https://github.com/Aaryan-dw/ConvertIT"
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio showcasing skills and projects. Built with React and Tailwind CSS featuring smooth animations and a clean dark theme.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Vercel"],
    icon: "fa-globe",
    link: "https://github.com/Aaryan-dw/aaryanko-"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-screen-2xl mx-auto px-8 py-24 bg-black border-t border-b border-white/10">
      <div className="mb-12">
        <h2 className="section-header text-5xl heading-font font-semibold tracking-tighter">PROJECTS</h2>
        <p className="text-zinc-400 mt-3">Real tools. Built from scratch.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projectsData.map((project, index) => (
          <a 
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card bg-zinc-900/50 border border-white/10 rounded-3xl p-6 cursor-pointer hover:border-[#00ff9d]/50 transition-all block group"
          >
            <div className="w-14 h-14 bg-[#00ff9d]/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#00ff9d]/20 transition-all">
              <i className={`fa-solid ${project.icon} text-2xl text-[#00ff9d]`}></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-[#00ff9d] transition-colors">{project.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag, tagIndex) => (
                <span key={tagIndex} className="text-[10px] bg-white/10 px-2 py-1 rounded-full text-zinc-300">
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="text-[10px] bg-white/10 px-2 py-1 rounded-full text-zinc-300">
                  +{project.tags.length - 3}
                </span>
              )}
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