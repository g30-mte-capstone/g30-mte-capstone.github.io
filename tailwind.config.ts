import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        surface: "var(--surface)",
        border: "var(--border)",
        chalk: "var(--chalk)",
        grey: "var(--grey)",
      },
    },
  },
  plugins: [],
} satisfies Config;
