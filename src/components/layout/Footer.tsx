import { ArrowUp, Terminal } from "lucide-react";
import { profile } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="px-5 pb-8 pt-5 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-(--border) pt-6 text-center sm:flex-row sm:text-left">
        <p className="inline-flex items-center gap-2 font-terminal text-xs text-(--muted)">
          <Terminal size={14} className="text-(--accent)" />
          <span>
            <span className="text-(--text)">{profile.name}</span> · dibuat dengan rasa ingin tahu
          </span>
        </p>
        <div className="flex items-center gap-4">
          <span className="font-terminal text-[11px] text-(--muted)">
            © {new Date().getFullYear()}
          </span>
          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 font-terminal text-[11px] text-(--muted) transition hover:text-(--accent)"
          >
            kembali ke atas <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
