import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "rotate(2deg) translate(0, 0)" },
          "25%": { transform: "rotate(1deg) translate(2px, -2px)" },
          "75%": { transform: "rotate(3deg) translate(-2px, 2px)" },
        },
        infiniteSlide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        infiniteSlide: "infiniteSlide 20s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
