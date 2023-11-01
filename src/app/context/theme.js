import { createContext, useContext, useState } from "react";

import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "/src/app/themes/ThemeConfig.ts";

const Context = createContext();

export const ThemeProviderContext = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState();
  return (
    <Context.Provider
      value={{
        theme,
        isModalOpen,
        setTheme,
        setIsModalOpen,
        modalContent,
        setModalContent,
      }}>
      <ThemeProvider
        theme={theme == "light" ? lightTheme : darkTheme}
        isModalOpen={setIsModalOpen}
        modalContent={modalContent}>
        {children}
      </ThemeProvider>
    </Context.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(Context);
};
