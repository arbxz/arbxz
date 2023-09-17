import { createContext, useContext, useState } from "react";

import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "/src/app/themes/ThemeConfig.ts";

const Context = createContext();

export const ThemeProviderContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <Context.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </Context.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(Context);
};
