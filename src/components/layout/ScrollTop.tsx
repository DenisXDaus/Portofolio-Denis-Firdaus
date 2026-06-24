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
      className="
      fixed
      bottom-6
      right-6
      p-3
      rounded-full
      border
      "
    >
      <ArrowUp />
    </button>
  );
}