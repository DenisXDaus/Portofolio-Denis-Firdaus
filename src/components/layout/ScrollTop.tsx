import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollTop() {
  const [show, setShow] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(
        window.scrollY > 400
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label="Kembali ke atas"
      className="
      fixed
      z-40
      bottom-6
      right-6
      p-3
      rounded-full
      border border-(--border)
      bg-(--surface)
      text-(--text)
      shadow-(--shadow)
      transition duration-200
      hover:-translate-y-1
      hover:border-(--accent)
      hover:text-(--accent)
      "
    >
      <ArrowUp />
    </button>
  );
}