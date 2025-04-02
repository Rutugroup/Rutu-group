/** @type {import('tailwindcss').Config} */
import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css,scss}",
  ],
  theme: {
    extend: {
      colors: {
        // Main brand color for headings/text
        "brand-gold": "#e1bc6a",

        // Section background colors
        "bg-cream": "#FFFBEC",
        "bg-lightgray": "#F8F9FA",
      },
      fontFamily: {
        // We'll link these fonts in layout.tsx using next/font
        cormorant: ["var(--font-cormorant)", "serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
