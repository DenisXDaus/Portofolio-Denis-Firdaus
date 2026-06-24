import {
    ExternalLink,
} from "lucide-react";

import {
    FaGithub
} from "react-icons/fa";

interface Props {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  github,
  demo,
}: Props) {
  return (
    <div
      className="
      border
      rounded-2xl
      overflow-hidden
      hover:-translate-y-2
      transition
      "
    >
      <img
        src={image}
        alt={title}
        className="
        w-full
        h-56
        object-cover
        "
      />

      <div className="p-6">
        <h3
          className="
          text-2xl
          font-bold
          "
        >
          {title}
        </h3>

        <p
          className="
          mt-3
          text-slate-400
          "
        >
          {description}
        </p>

        <div
          className="
          flex
          flex-wrap
          gap-2
          mt-4
          "
        >
          {tech.map((item) => (
            <span
              key={item}
              className="
              px-3
              py-1
              border
              rounded-full
              text-sm
              "
            >
              {item}
            </span>
          ))}
        </div>

        <div
          className="
          flex
          gap-4
          mt-5
          "
        >
          <a href={github}>
            <FaGithub />
          </a>

          <a href={demo}>
            <ExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
}