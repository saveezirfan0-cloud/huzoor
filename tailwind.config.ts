import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        deen: {
          900: "#0f3d33",
          800: "#14564a",
          700: "#1d6b58",
          gold: "#d4af5a",
          goldDark: "#b08948",
          cream: "#f4efe4",
          paper: "#fdfbf6",
          ink: "#2b2620",
          muted: "#5c5446",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "serif"],
        urdu: ["var(--font-urdu)", "var(--font-arabic)", "serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        breathe: {
          "0%,100%": { transform: "scale(1)", opacity: "0.85" },
          "50%": { transform: "scale(1.12)", opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease forwards",
        breathe: "breathe 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
