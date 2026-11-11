import { Braces, Code2, Lightbulb } from "lucide-react";
import { profile } from "../../data/profile";
import FadeIn from "../ui/FadeIn";

const highlights = [
  { icon: Code2, label: "Fokus", value: "Frontend development" },
  { icon: Braces, label: "Sedang dipelajari", value: "React & TypeScript" },
  { icon: Lightbulb, label: "Cara kerja", value: "Belajar lewat proyek" },
];

export default function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 sm:py-24">
      <FadeIn>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16">
          <div>
            <p className="font-terminal text-xs text-(--accent)">01 // TENTANG SAYA</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Sedikit tentang perjalanan saya.
            </h2>
            <p className="mt-5 text-sm leading-7 text-(--muted) sm:text-base sm:leading-8">
              {profile.bio}
            </p>
          </div>

          <div className="space-y-3">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-xl border border-(--border) bg-(--surface) p-4 transition duration-200 hover:-translate-y-0.5 hover:border-(--accent)/50"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-(--accent)/10 text-(--accent)">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-terminal text-[11px] text-(--muted)">{label}</p>
                  <p className="mt-1 text-sm font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
