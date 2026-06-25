import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="p-2 w-9 h-9 rounded-lg border hover:scale-105 transition"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}
