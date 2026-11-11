import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../../data/profile";
import FadeIn from "../ui/FadeIn";

const socialLinks = [
  { label: "GitHub", href: profile.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-20 sm:px-8 sm:py-24">
      <FadeIn>
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-(--border) bg-(--surface)">
          <div className="border-b border-(--border) bg-(--surface-strong) px-5 py-3 font-terminal text-xs text-(--muted)">
            <span className="mr-2 text-(--accent)">$</span>
            ./say-hello.sh
          </div>
          <div className="p-6 sm:p-10 md:p-12">
            <p className="font-terminal text-xs text-(--accent)">05 // CONTACT</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Ada ide menarik?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-(--muted) sm:text-base">
              Saya senang berkenalan dan ngobrol soal teknologi, proses belajar, atau peluang
              kolaborasi. Silakan hubungi saya lewat kanal berikut.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-(--accent) px-4 py-2.5 text-sm font-semibold text-[#10170f] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)"
              >
                <Mail size={16} />
                Kirim email
                <ArrowUpRight size={15} />
              </a>
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-(--border) px-4 py-2.5 text-sm text-(--text) transition duration-200 hover:-translate-y-0.5 hover:border-(--accent) hover:text-(--accent)"
                >
                  <Icon size={16} />
                  {label}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
            <p className="mt-6 font-terminal text-xs text-(--muted)">{profile.email}</p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
