import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      fontFamily: {
        
      }
    },
  },
  plugins: [],
};
export default config;
