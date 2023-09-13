import { createGlobalStyle } from "styled-components";
import { createCssVars, lightTheme } from "./default-theme";

export const GlobalStyle = createGlobalStyle`
  :root {
    ${createCssVars(lightTheme)};
  }
`;
