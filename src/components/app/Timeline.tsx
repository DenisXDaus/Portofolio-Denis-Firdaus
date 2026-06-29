import { timeline } from "../../data/timeline";
import FadeIn from "../ui/FadeIn";
export default function Timeline() {
  return (
    <section className="py-24">
      <FadeIn>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Learning Journey</h2>

          <div className="mt-12">
            {timeline.map((item) => (
              <div key={item.year} className="border-l-2 pl-6 py-8">
                <span className="text-sky-400">{item.year}</span>

                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
