import { testimonials } from "../../data/testimonials";
import FadeIn from "../ui/FadeIn";

export default function Testimonials() {
  return (
    <section className="py-24">
      <FadeIn>
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>

        <div className="max-w-5xl px-8 mx-auto mt-10 grid md:grid-cols-2 gap-6">
          {testimonials.map((item) => (
            <div key={item.id} className="shadow-(--shadow-md) bg-(--surface) rounded-2xl p-6">
              <p>{item.message}</p>

              <h4 className="mt-4 font-bold">{item.name}</h4>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
