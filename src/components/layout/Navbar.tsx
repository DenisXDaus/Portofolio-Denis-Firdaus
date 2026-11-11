import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Terminal, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "Tentang" },
  { href: "#skills", label: "Toolkit" },
  { href: "#projects", label: "Proyek" },
  { href: "#contact", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-xl border border-(--border) bg-(--bg-elevated) px-4 py-3 shadow-(--shadow) backdrop-blur-xl sm:px-5">
        <a
          href="#hero"
          className="inline-flex items-center gap-2 font-terminal text-sm font-medium"
          aria-label="Denis.dev, kembali ke beranda"
        >
          <Terminal size={17} className="text-(--accent)" />
          <span>denis<span className="text-(--accent)">.dev</span></span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="font-terminal text-xs text-(--muted) transition-colors hover:text-(--accent)"
            >
              <span className="mr-1 text-(--accent)">0{index + 1}.</span>
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg border border-(--border) text-(--text) transition hover:border-(--accent) hover:text-(--accent) md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="mx-auto mt-2 max-w-6xl rounded-xl border border-(--border) bg-(--bg-elevated) p-4 shadow-(--shadow) backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 font-terminal text-xs text-(--muted) transition hover:bg-(--surface) hover:text-(--accent)"
                >
                  <span className="mr-2 text-(--accent)">0{index + 1}.</span>
                  {link.label}
                </a>
              ))}
              <div className="mt-2 border-t border-(--border) pt-3">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
