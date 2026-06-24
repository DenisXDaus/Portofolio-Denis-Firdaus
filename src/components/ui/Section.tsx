interface Props {
  id?: string;
  children: React.ReactNode;
}

export default function Section({
  id,
  children,
}: Props) {
  return (
    <section
      id={id}
      className="
      py-24
      px-6
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        "
      >
        {children}
      </div>
    </section>
  );
}