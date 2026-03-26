import useGithubProjects from "../hooks/UseGithubProjects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const repos = useGithubProjects();

  return (
    <section id="projects" className="max-w-screen-2xl mx-auto px-8 py-24">
      <h2 className="text-5xl mb-10">PROJECTS</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {repos.map((repo) => (
          <ProjectCard key={repo.id} project={repo} />
        ))}
      </div>
    </section>
  );
}