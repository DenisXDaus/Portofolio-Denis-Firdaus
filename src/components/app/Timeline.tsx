import { CircleDot } from "lucide-react";
import { timeline } from "../../data/timeline";
import FadeIn from "../ui/FadeIn";

export default function Timeline() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24">
      <FadeIn>
        <div className="mx-auto max-w-4xl">
          <p className="text-center font-terminal text-xs text-(--accent)">04 // LEARNING LOG</p>
          <h2 className="mt-4 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Perjalanan belajar
          </h2>
          <div className="mx-auto mt-10 max-w-2xl">
            {timeline.map((item, index) => (
              <div key={item.year} className="relative flex gap-5 pb-8 last:pb-0">
                {index < timeline.length - 1 && (
                  <span className="absolute bottom-0 left-2.75 top-6 w-px bg-(--border)" />
                )}
                <span className="relative z-10 mt-1 grid size-6 shrink-0 place-items-center rounded-full border border-(--accent)/50 bg-(--bg) text-(--accent)">
                  <CircleDot size={13} aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1 rounded-xl border border-(--border) bg-(--surface) p-4 transition duration-200 hover:border-(--accent)/50 sm:p-5">
                  <p className="font-terminal text-xs text-(--accent)">{item.year}</p>
                  <h3 className="mt-2 text-base font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-(--muted)">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
