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
          DEFAULT: "#204D90",
          50: "#E8F0F9",
          100: "#D1E1F3",
          200: "#A3C3E7",
          300: "#75A5DB",
          400: "#4787CF",
          500: "#204D90",
          600: "#1A3E73",
          700: "#132E56",
          800: "#0D1F3A",
          900: "#06101D",
        },
        secondary: {
          DEFAULT: "#E6AB35",
          50: "#FCF6EB",
          100: "#F9EED7",
          200: "#F3DDAF",
          300: "#EDCC87",
          400: "#E9BB5F",
          500: "#E6AB35",
          600: "#B8892A",
          700: "#8A6720",
          800: "#5C4415",
          900: "#2E220B",
        },
        dark: "#1A1A1A",
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
