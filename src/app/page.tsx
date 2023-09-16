"use client";
import { useState } from "react";

import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeProvider } from "styled-components";

import BottomNavigation from "./components/bottom-navigation-bar/BottomNavigation";
import KnowledgeBlock from "./components/knowledge-block/KnowledgeBlock";
import MainBanner from "./components/main-banner/MainBanner";
import { StyledSocialContainer } from "./components/main-banner/MainBannerStyles";
import { StyledMain, StyledThemeButton } from "./themes/globalStyles";
import { darkTheme, lightTheme } from "./themes/ThemeConfig";

export default function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <StyledMain className="flex min-h-screen flex-col items-center justify-start select-none">
        <MainBanner />
        <KnowledgeBlock />
        <BottomNavigation />
        {/* Todo : Populate with array */}
        <StyledSocialContainer className="hidden fixed md:flex rounded-3xl gap-2 flex-col px-3 py-4 ml-5 top-1/2 left-0 -translate-y-1/2">
          <a
            href="https://www.linkedin.com/in/arbaaz-mowlabucus-15bb17160/"
            target="_blank">
            <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={faLinkedin} />
          </a>
          <a href="https://github.com/arbxz" target="_blank">
            <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={faGithub} />
          </a>
          <a href="https://www.instagram.com/wulver.bd/" target="_blank">
            <FontAwesomeIcon
              style={{ fontSize: "1.5rem" }}
              icon={faInstagram}
            />
          </a>
          <a href="https://www.instagram.com/ares_arte/" target="_blank">
            <FontAwesomeIcon
              style={{ fontSize: "1.5rem" }}
              icon={faInstagram}
            />
          </a>
        </StyledSocialContainer>
        <StyledThemeButton
          className="fixed top-2.5 right-20 z-50 flex align-middle justify-center p-2 w-8 text-md rounded-full"
          onClick={() => toggleTheme()}>
          <FontAwesomeIcon icon={theme == "light" ? faMoon : faSun} />
        </StyledThemeButton>
      </StyledMain>
    </ThemeProvider>
  );
}
