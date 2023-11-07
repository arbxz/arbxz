import React, { useEffect, useState } from "react";

import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { useThemeContext } from "@/app/context/theme";

import { StyledPrimaryButton } from "../shared/sharedStyles";
import { StyledNavigationWrapper } from "./NavigationStyles";

const Navigation = () => {
  const { theme, setTheme } = useThemeContext();
  const [isContentScrolled, setIsContentScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsContentScrolled(true);
      } else {
        setIsContentScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isContentScrolled]);

  return (
    <StyledNavigationWrapper
      isContentScrolled={isContentScrolled}
      className="fixed top-0 flex gap-6 h-auto w-full justify-start items-center p-3 before:shadow-md">
      <Link className="text-xl" href="/">
        Arbxz | <span className="text-lg">Arbaaz Mowlabucus</span>
      </Link>

      <StyledPrimaryButton
        type="button"
        title="Theme toggle"
        className="flex items-center justify-center p-2 w-8 text-md rounded-full ml-auto"
        onClick={() => {
          theme == "light" ? setTheme("dark") : setTheme("light");
        }}>
        <FontAwesomeIcon icon={theme == "light" ? faMoon : faSun} />
      </StyledPrimaryButton>

      {/* Implement i18N */}
      <span className="text-md">EN | FR</span>
    </StyledNavigationWrapper>
  );
};

export default Navigation;
