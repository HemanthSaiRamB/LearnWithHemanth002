"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import clsx from "clsx";

const THEME_KEY = "genai-roadmap-theme";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = window.localStorage.getItem(THEME_KEY) as Theme | null;
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const nextTheme = saved ?? preferred;
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }, []);

  function chooseTheme(nextTheme: Theme) {
    setTheme(nextTheme);
    window.localStorage.setItem(THEME_KEY, nextTheme);
    applyTheme(nextTheme);
  }

  return (
    <div className="inline-flex rounded-xl border border-black/10 bg-white/70 p-1 shadow-sm backdrop-blur dark:border-white/10 dark:bg-black/20" aria-label="Theme selector">
      <button
        type="button"
        onClick={() => chooseTheme("light")}
        className={clsx(
          "focus-ring inline-flex h-9 items-center gap-2 rounded-lg px-3 text-sm font-black transition",
          theme === "light" ? "bg-ink text-white dark:bg-white dark:text-ink" : "text-slate-600 hover:bg-black/5 dark:text-slate-300 dark:hover:bg-white/10"
        )}
      >
        <Sun className="size-4" />
        Light
      </button>
      <button
        type="button"
        onClick={() => chooseTheme("dark")}
        className={clsx(
          "focus-ring inline-flex h-9 items-center gap-2 rounded-lg px-3 text-sm font-black transition",
          theme === "dark" ? "bg-ink text-white dark:bg-white dark:text-ink" : "text-slate-600 hover:bg-black/5 dark:text-slate-300 dark:hover:bg-white/10"
        )}
      >
        <Moon className="size-4" />
        Dark
      </button>
    </div>
  );
}
