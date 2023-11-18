import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      foreground: "var(--foreground)",
      background: "var(--background)",
      body: "var(--body)",
      accent: "var(--accent)",
      primary: "#333333",
      white: "#ffffff",
    },
    extend: {
      backgroundImage: {
        "newspaper-img": "url('/public/images/bgProps/newspaper-dummy.png')",
        "teared-paper": "url('/public/images/bgProps/torn-paper.png')",
        "paper-torn-top": "url('/public/images/bgProps/paper-torn-top.png')",
      },
    },
  },
  plugins: [],
};
export default config;
