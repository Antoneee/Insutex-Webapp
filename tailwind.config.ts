import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/home/hero.png')",
        about: "url('/about/hero.png')"
      },
      colors: {
        primary: {
          DEFAULT: "#0D016F",
          light: "#0D016F1A"
        },
        accent: {
          DEFAULT: "#FF1901"
        },
        neutral: {
          white: "#FFFFFF",
          black: "#000000"
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
