import useTheme from "../customeHooks/useTheme";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2 bg-gray-200 p-2 rounded dark:bg-gray-800 dark:text-white">
      <button
        onClick={() => setTheme("light")}
        className={`px-3 py-1 rounded ${theme === "light" ? "bg-blue-500 text-white" : ""}`}
      >
        Light
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`px-3 py-1 rounded ${theme === "dark" ? "bg-blue-500 text-white" : ""}`}
      >
        Dark
      </button>

      <button
        onClick={() => setTheme("system")}
        className={`px-3 py-1 rounded ${theme === "system" ? "bg-blue-500 text-white" : ""}`}
      >
        System
      </button>
    </div>
  );
}
