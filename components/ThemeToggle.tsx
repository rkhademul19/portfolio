"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/** Pill switch: the highlighted knob shows the current theme. */
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex h-10 w-[76px] items-center justify-between rounded-full bg-slate-100 px-1 dark:bg-slate-800"
    >
      <span
        className={`absolute top-1 h-8 w-8 rounded-full shadow transition-all duration-300 ${
          isDark ? "left-[40px] bg-ink ring-1 ring-slate-700" : "left-1 bg-white"
        }`}
      />
      <span className="relative z-10 flex h-8 w-8 items-center justify-center">
        <Sun
          className={`h-4 w-4 ${isDark ? "text-slate-400" : "text-amber-500"}`}
        />
      </span>
      <span className="relative z-10 flex h-8 w-8 items-center justify-center">
        <Moon
          className={`h-4 w-4 ${isDark ? "fill-white text-white" : "text-slate-500"}`}
        />
      </span>
    </button>
  );
}
