import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className={`relative flex items-center justify-center w-9 h-9 rounded-full text-parchment/75 hover:text-parchment hover:bg-parchment/10 transition-colors ${className}`}
    >
      {isLight ? <Moon size={17} /> : <Sun size={17} />}
    </button>
  );
}
