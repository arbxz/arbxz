import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      foreground: "var(--foreground)",
      "foreground-shade": "var(--foreground-shade)",
      background: "var(--background)",
      "background-secondary": "var(--background-secondary)",
      "background-tertiary": "var(--background-tertiary)",
      body: "var(--body)",
      accent: "var(--accent)",
      primary: "#040202",
      white: "#ffffff",
      active: "var(--text-active)",
      danger: "hsl(15, 85%, 48%)",
      success: "#00C6C2",
      warning: "#F9B163",
      "custom-shadow": "var(--custom-shadow)",
      "form-active": "#0071e3",
      glass: "var(--glassBg)",
      "glass-invert": "var(--glassBgInvert)",
      "glass-tint": "var(--glassBgTint)",
      transparent: "transparent",
      "color-shadow": "var(--color-shadow)",
    },
    extend: {
      backgroundImage: {
        "newspaper-img": "url('/public/images/bgProps/newspaper-dummy.png')",
        "teared-paper": "url('/public/images/bgProps/torn-paper.png')",
        "paper-torn-top": "url('/public/images/bgProps/paper-torn-top.png')",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }: any) {
      addBase({
        html: { scrollBehaviour: "smooth" },
        h1: {
          letterSpacing: "-2%",
        },
        h2: {
          letterSpacing: "-2%",
        },
      });
      addComponents({
        ".highlight": {
          display: "inline-block",
          width: "auto",
          padding: "0 1rem",
          marginBottom: "3px",
          color: theme("colors.background"),
          background: theme("colors.foreground"),
        },
        ".glass": {
          background: theme("colors.glass"),
          backdropFilter: "blur(10px)",
          borderColor: theme("colors.glass-tint"),
          borderWidth: "1px",
        },
      });
      addUtilities({
        ".content-auto": {
          contentVisibility: "auto",
        },
      });
    }),
  ],
};
export default config;
