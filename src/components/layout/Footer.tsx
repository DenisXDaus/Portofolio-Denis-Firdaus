import {
  Mail
} from "lucide-react";

import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import { profile }
from "../../data/profile";

export default function Footer() {
  return (
    <footer
      className="
      border-t
      py-10
      mt-24
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        px-6
        "
      >
        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-5
          "
        >
          <div>
            <h3
              className="
              font-bold
              text-xl
              "
            >
              {profile.name}
            </h3>

            <p
              className="
              text-slate-400
              "
            >
              {profile.title}
            </p>
          </div>

          <div
            className="
            flex
            gap-5
            "
          >
            <a
              href={profile.github}
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a
              href={`mailto:${profile.email}`}
            >
              <Mail />
            </a>
          </div>
        </div>

        <p
          className="
          text-center
          text-sm
          text-slate-500
          mt-8
          "
        >
          © {new Date().getFullYear()}{" "}
          {profile.name}
        </p>
      </div>
    </footer>
  );
}