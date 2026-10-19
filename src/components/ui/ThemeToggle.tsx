"use client";

import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  id?: string;
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ id, className, showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  // Determine current active theme
  const isDark = mounted ? theme === "dark" : false;

  const buttonId = id ?? (showLabel ? "theme-toggle-drawer" : "theme-toggle-button");

  return (
    <button
      id={buttonId}
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "relative inline-flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2",
        showLabel
          ? "w-full px-4 py-2.5 rounded-2xl gap-3 text-xs font-mono font-medium justify-between"
          : "h-8 w-8 sm:h-9 sm:w-9 shrink-0",
        isDark
          ? "bg-white/[0.08] hover:bg-white/[0.12] text-amber-300 border border-white/12 shadow-[0_0_12px_rgba(245,158,11,0.15)]"
          : "bg-white/80 hover:bg-white text-slate-700 hover:text-purple-600 border border-slate-200/90 hover:border-purple-300 shadow-2xs",
        className
      )}
    >
      <div className="flex items-center gap-2.5">
        <div className="relative w-4 h-4 flex items-center justify-center">
          {/* Moon icon for light mode (click to go dark) */}
          <Moon
            className={cn(
              "w-4 h-4 transition-all duration-300 absolute",
              isDark
                ? "opacity-0 rotate-90 scale-50"
                : "opacity-100 rotate-0 scale-100 text-slate-700 hover:text-purple-600"
            )}
            aria-hidden="true"
          />
          {/* Sun icon for dark mode (click to go light) */}
          <Sun
            className={cn(
              "w-4 h-4 transition-all duration-300 absolute",
              isDark
                ? "opacity-100 rotate-0 scale-100 text-amber-300"
                : "opacity-0 -rotate-90 scale-50"
            )}
            aria-hidden="true"
          />
        </div>

        {showLabel && (
          <span className={cn("text-xs font-mono", isDark ? "text-slate-200" : "text-slate-700")}>
            Theme: <strong className="text-purple-500 font-semibold">{isDark ? "Dark" : "Light"}</strong>
          </span>
        )}
      </div>

      {showLabel && (
        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
          {isDark ? "Light mode" : "Dark mode"}
        </span>
      )}
    </button>
  );
}
