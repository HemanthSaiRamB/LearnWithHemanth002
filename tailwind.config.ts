import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#101828",
        mist: "#f7f9fc",
        brand: {
          coral: "#ff6b5f",
          mint: "#24c6a6",
          gold: "#f4b740",
          blue: "#4263eb"
        }
      },
      boxShadow: {
        soft: "0 18px 60px rgba(16, 24, 40, 0.12)",
        glow: "0 0 40px rgba(36, 198, 166, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
