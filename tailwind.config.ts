import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          950: "#070B13",
          900: "#0B101B",
          850: "#101726",
          800: "#141D30",
          700: "#1E2A44",
          600: "#2B3C61",
        },
        slate: {
          850: "#182234",
          750: "#243247",
        },
      },
    },
  },
  plugins: [],
};
export default config;
