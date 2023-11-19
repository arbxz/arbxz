"use client";
import App from "./App";
import { ModalProviderContext } from "./context/modal";

export default function Home() {
  return (
    <ModalProviderContext>
        <App />
    </ModalProviderContext>
  );
}
