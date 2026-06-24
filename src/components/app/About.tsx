import { profile } from "../../data/profile";

export default function About() {
  return (
    <section
      id="about"
      className="py-24"
    >
      <div className="max-w-5xl mx-auto px-6">

        <h2
          className="
          text-4xl
          font-bold
          mb-8
          "
        >
          About Me
        </h2>

        <p
          className="
          text-slate-400
          leading-relaxed
          text-lg
          "
        >
          {profile.bio}
        </p>

      </div>
    </section>
  );
}