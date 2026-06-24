import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } =
    useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
      p-2
      rounded-lg
      border
      hover:scale-105
      transition
      "
    >
      {theme === "dark" ? (
        <FaSun />
      ) : (
        <FaMoon />
      )}
    </button>
  );
}