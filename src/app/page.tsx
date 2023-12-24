"use client";
import { ThemeProvider } from "next-themes";

import App from "./App";
import { ModalProviderContext } from "./context/modal";

function Home() {
  return (
    <ModalProviderContext>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ModalProviderContext>
  );
}

export default Home;
