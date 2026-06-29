import { profile } from "../../data/profile";
import FadeIn from "../ui/FadeIn";


export default function About() {
  return (
    <section
      id="about"
      className="py-24"
    >
      <FadeIn>
      <div className="max-w-5xl mx-auto px-6">

        <h2
          className="
          text-3xl
          font-bold
          mb-8
          "
        >
          About Me
        </h2>

        <p
          className="
          text-(--text)
          leading-relaxed
          text-lg
          "
        >
          {profile.bio}
        </p>

      </div>
      </FadeIn>
    </section>
  );
}