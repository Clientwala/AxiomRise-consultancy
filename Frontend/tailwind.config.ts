import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#0B2545", light: "#133359", dark: "#071B33" },
        accent: { DEFAULT: "#C9973A", light: "#D4A84D", dark: "#B8862E" },
        soft: { DEFAULT: "#EAF4FB", light: "#F5F9FC" },
        muted: { DEFAULT: "#5B6B7A" },
        border: { DEFAULT: "#E2E8EF" },
      },
      fontFamily: {
        serif: ["Playfair Display", "Fraunces", "Georgia", "serif"],
        sans: ["Inter", "Manrope", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
