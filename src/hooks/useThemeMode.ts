import { useEffect, useState } from "react";

export type ThemeMode = "light" | "dark";
const storageKey = "lumina-theme-mode";

function getInitialMode(): ThemeMode {
  try {
    const savedMode = window.localStorage.getItem(storageKey);
    if (savedMode === "light" || savedMode === "dark") return savedMode;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  } catch {
    return "light";
  }
}

export function useThemeMode() {
  const [mode, setMode] = useState<ThemeMode>(getInitialMode);

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, mode);
      document.documentElement.dataset.theme = mode;
      document.documentElement.style.colorScheme = mode;
      document.querySelector('meta[name="theme-color"]')?.setAttribute(
        "content",
        mode === "dark" ? "#191917" : "#f6f2e9",
      );
    } catch {
      // The selected mode still works if storage is unavailable.
    }
  }, [mode]);

  return { mode, toggleMode: () => setMode((current) => (current === "dark" ? "light" : "dark")) };
}
