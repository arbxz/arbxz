"use client";

import React, { useEffect, useState } from "react";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";

import ThemeToggle from "../ui-elements/ThemeToggle";

const Navigation = () => {
  const { resolvedTheme } = useTheme();
  const { scrollYProgress } = useScroll();
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
    <nav
      className={`fixed ${
        resolvedTheme === "dark" ? "glassBgDark" : "glassBgLight"
      } top-0 glassBg text-foreground shadow shadow-customShadow w-full py-3 md:px-6 px-2 transition-all ease-in-out duration-300 z-50`}>
      <div className="flex gap-6 w-full justify-between items-center">
        <Link className="flex items-center text-lg gap-2" href="/">
          <span className="text-accent">Arbxz</span> <span>|</span>
          <span className="text-lg">Arbaaz Mowlabucus.</span>
        </Link>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden text-md md:flex justify-start items-center gap-4 font-semibold">
          <Link
            className="relative py-2 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-0 before:bg-foreground hover:before:w-full before:transition-all before:duration-300"
            href="#projects">
            projects.
          </Link>
          <Link
            className="relative py-2 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-0 before:bg-foreground hover:before:w-full before:transition-all before:duration-300"
            href="#designs">
            designs.
          </Link>
          <Link
            className="relative py-2 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-0 before:bg-foreground hover:before:w-full before:transition-all before:duration-300"
            href="#aboutme">
            about me.
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <ThemeToggle />
        </div>
      </div>
      <motion.div
        className="progress-bar lg:top-[52px] top-[48px]"
        style={{ scaleX: scrollYProgress }}
      />
    </nav>
  );
};

export default Navigation;
