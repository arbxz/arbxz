"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";

import ThemeToggle from "../ui-elements/ThemeToggle";

const Navigation = () => {
  const { scrollYProgress } = useScroll();

  return (
    <nav className="fixed top-0 glass text-foreground shadow shadow-custom-shadow w-full py-3 md:px-6 px-2 transition-all ease-in-out duration-300 z-50">
      <div className="flex gap-6 w-full justify-between items-center">
        <Link className="flex items-center text-lg gap-2" href="/">
          <span className="gradient-text">Arbxz</span> <span>|</span>
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
        className="fixed left-0 right-0 h-[2.5px] bg-accent z-20 origin-top-left lg:top-[55px] top-[50.5px]"
        style={{ scaleX: scrollYProgress }}
      />
    </nav>
  );
};

export default Navigation;
