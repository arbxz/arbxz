"use client";
import App from "./App";
import { ThemeProviderContext } from "./context/theme";

export default function Home() {
  return (
    <ThemeProviderContext>
      <App />
    </ThemeProviderContext>
  );
}
