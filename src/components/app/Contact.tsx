import FadeIn from "../ui/FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <FadeIn>
        <div
          className="
          max-w-xl
          text-(--text)
          mx-auto
          px-6
          "
        >
          <form
            className="
            flex
            flex-col
            gap-2
            bg-(--surface)
            shadow-(--shadow-md)
            rounded-xl
            p-8
            "
          >
            <h2
              className="
            text-center
            text-3xl
            font-bold
            mb-10
            "
            >
              Contact Me
            </h2>

            <input
              type="text"
              placeholder="Name"
              className="
              border
              rounded-xl
              p-3
              "
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="
              border
              rounded-xl
              p-3
              "
              required
            />

            <textarea
              rows={5}
              placeholder="Message"
              className="
              border
              rounded-xl
              p-3
              "
              required
            />

            <button
              className="
              bg-sky-500
              py-3
              rounded-xl
              "
            >
              Send Message
            </button>
          </form>
        </div>
      </FadeIn>
    </section>
  );
}
