import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin, Terminal} from "lucide-react";
import { profile } from "../../data/profile";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[88svh] items-center px-5 pb-20 pt-32 sm:px-8 lg:min-h-screen"
    >
      <div className="terminal-grid pointer-events-none absolute inset-0 opacity-60" />
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-full max-w-5xl"
      >
        <div className="overflow-hidden rounded-2xl border border-(--border) bg-(--bg-elevated) shadow-(--shadow) backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-(--border) px-4 py-3 sm:px-5">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-[#ff6d68]" />
              <span className="size-2.5 rounded-full bg-[#f7c65b]" />
              <span className="size-2.5 rounded-full bg-(--accent)" />
            </div>
            <span className="font-terminal text-[11px] text-(--muted) sm:text-xs">
              denis@portfolio: ~
            </span>
            <Terminal size={16} className="text-(--accent)" aria-hidden="true" />
          </div>

          <div className="p-6 sm:p-10 md:p-14">
            <p className="font-terminal text-xs text-(--accent) sm:text-sm">
              <span className="mr-2 text-(--muted)">$</span>
              <span className={shouldReduceMotion ? undefined : "terminal-typewriter"}>
                whoami
              </span>
            </p>
            <p className="mt-5 text-sm text-(--muted) sm:text-base">
              Halo, saya <span className="font-semibold text-(--text)">{profile.name}</span>
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl">
              Merangkai ide menjadi{" "}
              <span className="font-terminal text-(--accent)">
                web yang berarti.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-(--muted) sm:text-base sm:leading-8">
              {profile.title}. Sedang mendalami React, TypeScript, dan full-stack
              development dengan membangun proyek nyata.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex min-h-11 items-center gap-2 rounded-lg bg-(--accent) px-5 py-2.5 text-sm font-semibold text-[#10170f] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)"
              >
                Jelajahi proyek
                <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-(--border) px-5 py-2.5 text-sm font-medium text-(--text) transition duration-200 hover:border-(--accent) hover:text-(--accent) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)"
              >
                GitHub
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-2 font-terminal text-xs text-(--muted)">
              <MapPin size={14} className="text-(--accent)" aria-hidden="true" />
              {profile.location}
              <span className="mx-1 text-(--border)">|</span>
              <span className="size-1.5 animate-pulse rounded-full bg-(--accent)" />
              Terbuka untuk terhubung
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
