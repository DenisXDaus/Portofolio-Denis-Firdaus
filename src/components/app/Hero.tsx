import { motion } from "framer-motion";
import profile from "../../assets/profile.webp";

export default function Hero() {
  return (
    <section className="min-h-screen py-24 flex items-center">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 md:px-8 gap-10">

        <motion.div
          className="md:pt-20"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <p className="text-sky-400">
            Halo, Saya Denis Firdaus
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-4">
            Frontend Developer
          </h1>

          <p className="mt-6 text-slate-400">
            Sedang mendalami React,
            Next.js dan Fullstack Development
            sambil membangun project nyata.
          </p>

          <div className="flex gap-4 mt-8">

            <a
              href="#projects"
              className="bg-sky-500 px-6 py-3 rounded-xl"
            >
              Lihat Project
            </a>

            <a
              href="https://github.com/USERNAME"
              target="_blank"
              className="border px-6 py-3 rounded-xl"
            >
              Github
            </a>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <img
            src={profile}
            alt="Denis"
            className="rounded-3xl"
          />
        </motion.div>

      </div>

    </section>
  );
}