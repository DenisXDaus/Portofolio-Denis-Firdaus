const stats = [
  {
    title: "Projects",
    value: "10+",
  },
  {
    title: "Learning Hours",
    value: "300+",
  },
  {
    title: "Technologies",
    value: "8+",
  },
  {
    title: "Years Learning",
    value: "2+",
  },
];

export default function FunFacts() {
  return (
    <section className="py-24">

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

    </section>
  );
}