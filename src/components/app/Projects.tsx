import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24"
    >
      <h2
        className="
        text-center
        text-4xl
        font-bold
        "
      >
        Projects
      </h2>

      <div
        className="
        max-w-6xl
        mx-auto
        mt-12
        grid
        md:grid-cols-2
        gap-8
        "
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}