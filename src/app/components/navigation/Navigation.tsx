import React, { useEffect, useState } from "react";

import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useTheme } from "next-themes";

import { StyledNavigationWrapper } from "./NavigationStyles";

const Navigation = () => {
  const [isContentScrolled, setIsContentScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
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
      className={`fixed top-0 h-auto w-full p-4 before:shadow-md z-50 ${
        isContentScrolled && "content-scrolled"
      }`}>
      <div className="flex gap-6 max-w-5xl justify-start items-center mx-auto">
        <Link className="text-xl" href="/">
          Arbxz <span className="text-accent">|</span>{" "}
          <span className="text-lg">Arbaaz Mowlabucus</span>
        </Link>

        <div className="hidden md:flex mx-auto justify-center items-center gap-4 text-center font-semibold">
          <Link
            className="relative py-2 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-0 before:bg-accent hover:before:w-full before:transition-all before:duration-300"
            href="#projects">
            Projects
          </Link>
          <Link
            className="relative py-2 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-0 before:bg-accent hover:before:w-full before:transition-all before:duration-300"
            href="#designs">
            Designs
          </Link>
          <Link
            className="relative py-2 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-0 before:bg-accent hover:before:w-full before:transition-all before:duration-300"
            href="#aboutme">
            About me
          </Link>
        </div>

        <button
          type="button"
          title="Theme toggle"
          className="flex items-center justify-center p-2 w-8 text-md rounded-full ml-auto bg-foreground text-background"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
          <FontAwesomeIcon icon={resolvedTheme == "light" ? faMoon : faSun} />
        </button>

        <span className="text-md">
          EN <span className="text-accent">|</span> FR
        </span>
      </div>
    </StyledNavigationWrapper>
  );
};

export default Navigation;
