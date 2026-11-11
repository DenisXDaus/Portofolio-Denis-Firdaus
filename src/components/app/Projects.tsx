import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../../data/projects";
import FadeIn from "../ui/FadeIn";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  const projectList = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const scrollProjects = (direction: -1 | 1) => {
    if (!projectList.current) return;
    projectList.current.scrollBy({
      left: direction * projectList.current.clientWidth * 0.8,
      behavior: shouldReduceMotion ? "instant" : "smooth",
    });
  };

  return (
    <section id="projects" className="py-20 sm:py-24">
      <FadeIn>
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="font-terminal text-xs text-(--accent)">03 // PROJECTS</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Beberapa yang sedang saya bangun.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-(--muted) sm:text-base">
                Geser untuk melihat proyek. Setiap proyek adalah ruang untuk mencoba hal baru.
              </p>
            </div>
            <div className="hidden shrink-0 gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scrollProjects(-1)}
                aria-label="Geser proyek ke kiri"
                className="grid size-10 place-items-center rounded-lg border border-(--border) text-(--muted) transition hover:border-(--accent) hover:text-(--accent) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
              >
                <ArrowLeft size={17} />
              </button>
              <button
                type="button"
                onClick={() => scrollProjects(1)}
                aria-label="Geser proyek ke kanan"
                className="grid size-10 place-items-center rounded-lg border border-(--border) text-(--muted) transition hover:border-(--accent) hover:text-(--accent) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>

        <motion.div
          ref={projectList}
          initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="scrollbar-none mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pb-5 sm:gap-5 sm:px-8"
        >
          <div className="w-[max(0px,calc((100vw-72rem)/2))] shrink-0" aria-hidden="true" />
          {projects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
          <div className="w-1 shrink-0 sm:w-3" aria-hidden="true" />
        </motion.div>
        <p className="mt-1 px-5 font-terminal text-[11px] text-(--muted) sm:hidden">
          <span className="text-(--accent)">← →</span> geser untuk melihat proyek
        </p>
      </FadeIn>
    </section>
  );
}
