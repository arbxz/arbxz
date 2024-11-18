"use client";

import { MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { useLoaded } from "@/hooks/useLoaded";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const loaded = useLoaded();
  return (
    <button
      type="button"
      title="Theme toggle"
      className="flex items-center justify-center p-2 text-xl rounded-full bg-background shadow-inner"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      {resolvedTheme == "light" && loaded ? (
        <MoonIcon size={20} />
      ) : (
          <Sun size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;
