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
        background: "var(--background)",
        foreground: "var(--foreground)",
        haas: {
          red: "#ED1C24",
          dark: "#1A1A1A",
          gray: "#F5F5F5",
        },
        brand: {
          blue: "#005EB8",
          dark: "#003057",
        }
      },
    },
  },
  plugins: [],
};
export default config;
