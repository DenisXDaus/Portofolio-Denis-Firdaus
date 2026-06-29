import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";
import FadeIn from "../ui/FadeIn";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <FadeIn>
        <h2
          className="
          text-center
          text-3xl
          font-bold
        "
        >
          Projects
        </h2>

        <div
          className="
        max-w-6xl
        px-8
        mx-auto
        mt-10
        grid
        md:grid-cols-2
        gap-8
        "
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
