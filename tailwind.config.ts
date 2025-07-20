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
        about: "url('/about/hero.png')",
        contact: "url('/contact/hero.png')",
        copper: "url('/cnc-precision-machining-forging/copper/hero.png')",
        bronze: "url('/cnc-precision-machining-forging/bronze/hero.png')",
        brass: "url('/cnc-precision-machining-forging/brass/hero.png')",
        aluminium: "url('/cnc-precision-machining-forging/aluminium/hero.png')",
        "free-cutting-steel": "url('/cnc-precision-machining-forging/free-cutting-steel/hero.png')",
        "stainless-steel": "url('/cnc-precision-machining-forging/stainless-steel/hero.png')",
        "allied-mineral": "url('/foundry-and-smelters/allied-mineral/hero.png')",
        "aleastur": "url('/foundry-and-smelters/aleastur/hero.png')",
        seowon: "url('/foundry-and-smelters/seowon/hero.png')",
        insutex: "url('/foundry-and-smelters/insutex/hero.png')",
        "graphite-materials": "url('/friction-and-metallurgical-materials/graphite-materials/hero.png')",
        "other-materials": "url('/friction-and-metallurgical-materials/other-materials/hero.png')",
      },
      colors: {
        primary: {
          DEFAULT: "#0D016F",
          medium: "#0D016F14",
          light: "#0D016F1A"
        },
        accent: {
          DEFAULT: "#FF1901",
          light: "#FF19011A"
        },
        neutral: {
          white: "#FFFFFF",
          black: "#000000"
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        '104': '26rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
