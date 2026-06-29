import { motion } from "framer-motion";
import profile from "../../assets/profile.webp";
import {FaGithub} from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen py-24 flex items-center">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 md:px-8 gap-10">

        <motion.div
          className="md:pt-20"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-sky-400">
            Halo, Saya Denis Firdaus
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Frontend Developer
          </h1>

          <p className="mt-6 text-(--text)">
            Sedang mendalami React,
            Vite.js dan Fullstack Development
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
              href="https://github.com/DenisXDaus"
              target="_blank"
              className="border px-6 py-3 rounded-xl"
            >
              <FaGithub className="inline mr-2 my-auto" />
              Github
            </a>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src={profile}
            alt="Denis"
            className="rounded-3xl w-50 md:w-full md:rounded-3xl mx-auto"
          />
        </motion.div>

      </div>

    </section>
  );
}