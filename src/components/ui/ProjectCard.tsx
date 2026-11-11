import { ArrowUpRight, Code2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

interface Props {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
  index,
}: Props) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
      className="w-[min(84vw,23rem)] shrink-0 snap-start overflow-hidden rounded-xl border border-(--border) bg-(--surface) transition-colors duration-200 hover:border-(--accent)/55 sm:w-88 lg:w-[24rem]"
    >
      <div className="border-b border-(--border) bg-(--surface-strong)">
        <div className="flex items-center justify-between border-b border-(--border) px-4 py-3">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="size-2 rounded-full bg-(--accent)/70" />
            <span className="size-2 rounded-full bg-(--muted)/40" />
            <span className="size-2 rounded-full bg-(--muted)/25" />
          </div>
          <span className="font-terminal text-[10px] text-(--muted)">preview.ts</span>
          <Code2 size={15} className="text-(--accent)" aria-hidden="true" />
        </div>
        <div className="min-h-36 p-5 font-terminal text-xs leading-6 sm:min-h-40">
          <p className="text-(--muted)">
            <span className="mr-3 text-(--accent)">01</span>
            <span className="text-fuchsia-300">const</span> project = {"{"}
          </p>
          <p className="pl-7 text-(--muted)">
            <span className="text-(--accent)">name</span>:{" "}
            <span className="text-amber-200">"{title}"</span>,
          </p>
          <p className="pl-7 text-(--muted)">
            <span className="text-(--accent)">status</span>:{" "}
            <span className="text-amber-200">"in progress"</span>
          </p>
          <p className="text-(--muted)">
            <span className="mr-3 text-(--accent)">04</span>
            {"}"}
            <span className="ml-1 animate-pulse text-(--accent)">▍</span>
          </p>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-(--muted)">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-md border border-(--border) px-2.5 py-1 font-terminal text-[10px] text-(--muted)"
            >
              {item}
            </span>
          ))}
        </div>
        {(github || demo) && (
          <div className="mt-5 flex gap-4 border-t border-(--border) pt-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                aria-label={`Lihat kode ${title} di GitHub`}
                className="inline-flex items-center gap-2 text-xs font-medium text-(--muted) transition hover:text-(--accent)"
              >
                <FaGithub size={15} />
                Source
                <ArrowUpRight size={13} />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`Lihat demo ${title}`}
                className="inline-flex items-center gap-2 text-xs font-medium text-(--muted) transition hover:text-(--accent)"
              >
                Live demo
                <ArrowUpRight size={13} />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
