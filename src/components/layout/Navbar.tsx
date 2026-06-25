import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] =
    useState(false);

  return (
    <nav
      className="
      fixed
      top-0
      w-full
      z-50
      backdrop-blur-md
      border-b
      border-white/10
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
        <h1 className="font-bold text-xl">
          Denis.dev
        </h1>

        <div className="hidden md:flex gap-6 items-center">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          <ThemeToggle />
        </div>

        <button
          className="md:hidden"
          onClick={() =>
            setOpen(!open)
          }
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div
          className="
          md:hidden
          px-6
          pb-5
          flex
          flex-col
          gap-4
          "
        >
          <a href="#about">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#contact">
            Contact
          </a>

          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
