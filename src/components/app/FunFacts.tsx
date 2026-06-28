import FadeIn from "../ui/FadeIn";
import { stats } from "../../data/funfacts";

export default function FunFacts() {
  return (
    <section className="py-24">
      <FadeIn>
        <div className="max-w-6xl px-8 mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">

          {stats.map((item) => (
            <div
              key={item.title}
              className="border rounded-2xl p-6 text-center"
            >
              <h3 className="text-4xl font-bold">
                {item.value}
              </h3>

              <p className="text-slate-400 mt-2">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </FadeIn>
    </section>
  );
}