import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F6FFF",
          50: "#E6F1FF",
          100: "#CCE3FF",
          200: "#99C7FF",
          300: "#66ABFF",
          400: "#338FFF",
          500: "#0F6FFF",
          600: "#0056CC",
          700: "#003D99",
          800: "#002966",
          900: "#001433",
        },
        secondary: {
          DEFAULT: "#00C2A8",
          50: "#E6F9F6",
          100: "#CCF3ED",
          200: "#99E7DB",
          300: "#66DBC9",
          400: "#33CFB7",
          500: "#00C2A8",
          600: "#009B86",
          700: "#007465",
          800: "#004D43",
          900: "#002622",
        },
        dark: "#0F172A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
