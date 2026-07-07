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
          DEFAULT: "#5B9BD5",
          50: "#EBF3FA",
          100: "#D7E7F5",
          200: "#AFCFEB",
          300: "#87B7E1",
          400: "#5FA3D7",
          500: "#5B9BD5",
          600: "#3A7CB8",
          700: "#2D5E8D",
          800: "#1F3F5E",
          900: "#12202F",
        },
        secondary: {
          DEFAULT: "#F4B942",
          50: "#FEF9EC",
          100: "#FDF3D9",
          200: "#FBE7B3",
          300: "#F9DB8D",
          400: "#F7CF67",
          500: "#F4B942",
          600: "#E09A1A",
          700: "#AD7614",
          800: "#7A520E",
          900: "#472F08",
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
