import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence} from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
      fixed
      top-0
      w-full
      z-50
      backdrop-blur-md
      shadow-md
      shadow-white/50
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        px-6
        py-4
        flex
        justify-between
        items-center
        "
      >
        <h1 className="font-bold text-xl">Denis.dev</h1>

        <div className="hidden md:flex gap-6 items-center">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          <ThemeToggle />
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1, delay: 0.5 }}
              className="fixed inset-0 bg-black/40 h-screen md:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.1 }}
              className={`
                fixed top-0 right-0 h-screen w-64
                bg-(--bg) text-(--text)
                flex flex-col gap-4 px-6 pb-5 pt-5
                transform transition-transform duration-300 ease-in-out
                ${open ? "translate-x-0" : "translate-x-full"}
                md:hidden
              `}
            >
              <div className="flex justify-between items-center border-b border-(--border)">
                <h2 className="font-bold text-lg">Denis.dev</h2>
                <button onClick={() => setOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col gap-4">
                <a href="#hero">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <ThemeToggle />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
