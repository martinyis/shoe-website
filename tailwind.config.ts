import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Oswald"],
      },
      animation: {
        marquee: "marquee 1s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "420px" },
      xs: { max: "320px" },
      550: {
        max: "550px",
      },
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      primary: "#00BFFF",
      secondary: "#00FF00",
      third: "#233554",
      gray: "#E5E7EB",
      text: {
        primary: "#FFFFFF",
        secondary: "#A8B2D1",
        title: "#D9D9D9",
      },
    },
  },
  plugins: [],
} satisfies Config;
