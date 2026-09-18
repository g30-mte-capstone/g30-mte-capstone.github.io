"use client";

import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  if (!theme) {
    return <span className="inline-block h-8 w-8" aria-hidden />;
  }

  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => {
        applyTheme(next);
        setTheme(next);
      }}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-base text-muted hover:text-fg"
      aria-label={`Switch to ${next} mode`}
    >
      {next === "light" ? <SunOutlined /> : <MoonOutlined />}
    </button>
  );
}
