import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="grid size-9 place-items-center rounded-lg border border-(--border) text-(--muted) transition duration-200 hover:-translate-y-0.5 hover:border-(--accent) hover:text-(--accent)"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}
