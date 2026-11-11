import type { IconType } from "react-icons";
import {
  SiCss,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { skills } from "../../data/skills";
import FadeIn from "../ui/FadeIn";

const skillLogos: Record<string, { icon: IconType; color: string }> = {
  HTML: { icon: SiHtml5, color: "#e34f26" },
  CSS: { icon: SiCss, color: "#1572b6" },
  JavaScript: { icon: SiJavascript, color: "#f7df1e" },
  TypeScript: { icon: SiTypescript, color: "#3178c6" },
  React: { icon: SiReact, color: "#61dafb" },
  "Next.js": { icon: SiNextdotjs, color: "var(--text)" },
  Tailwind: { icon: SiTailwindcss, color: "#06b6d4" },
  "Node.js": { icon: SiNodedotjs, color: "#5fa04e" },
  Git: { icon: SiGit, color: "#f05032" },
};

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-20 sm:px-8 sm:py-24">
      <FadeIn>
        <div className="mx-auto max-w-5xl">
          <p className="text-center font-terminal text-xs text-(--accent)">02 // TOOLKIT</p>
          <h2 className="mt-4 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Teknologi yang saya gunakan
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {skills.map((skill) => {
              const logo = skillLogos[skill];
              const Icon = logo?.icon;

              return (
                <div
                  key={skill}
                  className="group inline-flex items-center gap-2.5 rounded-lg border border-(--border) bg-(--surface) px-4 py-3 text-sm transition duration-200 hover:-translate-y-1 hover:border-(--accent)/60 hover:bg-(--surface-strong)"
                >
                  {Icon && (
                    <Icon
                      size={18}
                      color={logo.color}
                      className="shrink-0 transition-transform duration-200 group-hover:scale-110"
                      aria-hidden="true"
                    />
                  )}
                  <span>{skill}</span>
                </div>
              );
            })}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
