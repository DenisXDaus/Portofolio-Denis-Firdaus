import type { Project } from "../types/Project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Digi AI",
    description: "AI Assistant berbasis React",
    tech: ["React", "TypeScript", "Tailwind"],
    image: "/projects/digi-ai.png",
    github: "https://github.com/username/digi-ai",
    demo: "https://digi-ai.vercel.app"
  },

  {
    id: 2,
    title: "E-Commerce",
    description: "Online Store Next.js",
    tech: ["Next.js", "Tailwind"],
    image: "/projects/store.png",
    github: "https://github.com/username/store",
    demo: "https://store.vercel.app"
  }
];