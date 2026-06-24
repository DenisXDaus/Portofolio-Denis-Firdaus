import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24">

      <h2 className="text-center text-4xl font-bold">
        Skills
      </h2>

      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">

        {skills.map((skill) => (
          <div
            key={skill}
            className="p-4 rounded-xl border text-center hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}