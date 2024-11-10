import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      colors: {
        light: {
          background: "#e8e7e9ff",
          textColor: "#000000",
        },
        dark: {
          background: "#0f0f0fff",
          textColor: "#FFFFFF",
        },
      },
      fontSize: {
        "h1-base": "2.2rem",
        "h1-sm": "3rem",
        "h1-md": "3.2rem",
        "h1-lg": "3.8rem",
        "h1-xl": "4rem",
        "p-xs": "0.8rem",
        "p-sm": "1rem",
        "p-md": "1.2rem",
      },
    },
  },
  plugins: [],
};
export default config;
