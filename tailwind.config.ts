import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#333333",
      white: "#ffffff",
      red: "#f74545",
      brown: "#fae2cd",
      redAccent: "#f7eee6",
      purple: "#8FACE1",
      orange: "#F74545",
      pink: "#F12E72",
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
