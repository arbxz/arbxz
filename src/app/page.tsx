"use client";
import App from "./App";
import { ThemeProviderContext } from "./context/modal";

export default function Home() {
  return (
    <ThemeProviderContext>
      <App />
    </ThemeProviderContext>
  );
}
