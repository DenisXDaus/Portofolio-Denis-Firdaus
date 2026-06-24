export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24"
    >
      <div
        className="
        max-w-xl
        mx-auto
        "
      >
        <h2
          className="
          text-center
          text-4xl
          font-bold
          mb-10
          "
        >
          Contact Me
        </h2>

        <form
          className="
          flex
          flex-col
          gap-4
          "
        >
          <input
            type="text"
            placeholder="Name"
            className="
            border
            rounded-xl
            p-4
            "
          />

          <input
            type="email"
            placeholder="Email"
            className="
            border
            rounded-xl
            p-4
            "
          />

          <textarea
            rows={5}
            placeholder="Message"
            className="
            border
            rounded-xl
            p-4
            "
          />

          <button
            className="
            bg-sky-500
            py-4
            rounded-xl
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}