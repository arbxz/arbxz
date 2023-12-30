"use client";

import { ThemeProvider } from "next-themes";

import { AppProviderContext } from "@/context/appContext";

import StyledJsxRegistry from "./registry";

export function Providers({ children }) {
  return (
    <StyledJsxRegistry>
      <ThemeProvider>
        <AppProviderContext>{children}</AppProviderContext>
      </ThemeProvider>
    </StyledJsxRegistry>
  );
}
