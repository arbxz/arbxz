import React, { useEffect, useState } from "react";

import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";

const Navigation = () => {
  const { scrollYProgress } = useScroll();
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
    <nav
      className={`fixed top-0 text-foreground h-auto w-full py-2 md:px-6 px-2 transition-all ease-in-out duration-300 lg:max-w-5xl xl:max-w-7xl z-50 ${
        isContentScrolled && "bg-accent text-white shadow-md"
      }`}>
      <div className="flex gap-6 w-full max-w-7xl justify-start items-center mx-auto">
        <Link className="flex items-center text-lg gap-2" href="/">
          Arbxz <span>|</span>
          <span className="text-lg">Arbaaz Mowlabucus</span>
        </Link>

        <div className="hidden text-md md:flex mx-auto justify-center items-center gap-4 text-center font-semibold">
          <Link
            className="relative py-2 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-0 before:bg-foreground hover:before:w-full before:transition-all before:duration-300"
            href="#projects">
            Projects
          </Link>
          <Link
            className="relative py-2 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-0 before:bg-foreground hover:before:w-full before:transition-all before:duration-300"
            href="#designs">
            Designs
          </Link>
          <Link
            className="relative py-2 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-0 before:bg-foreground hover:before:w-full before:transition-all before:duration-300"
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

        <span className="text-lg">
          EN <span>|</span> FR
        </span>
      </div>
      <motion.div
        className="progress-bar lg:top-[51px] top-[48px]"
        style={{ scaleX: scrollYProgress }}
      />
    </nav>
  );
};

export default Navigation;
