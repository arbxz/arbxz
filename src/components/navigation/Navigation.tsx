"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";

import ThemeToggle from "../ui-elements/ThemeToggle";

const Navigation = () => {
  const { scrollYProgress } = useScroll();

  return (
    <nav className="fixed top-0 glass text-foreground shadow shadow-custom-shadow w-full py-3 md:px-6 px-2 transition-all ease-in-out duration-300 z-50">
      <div className="flex gap-6 w-full justify-between items-center md:max-w-6xl md:px-4 mx-auto">
        <Link
          className="flex items-center text-xl gap-2"
          href="/"
          prefetch={false}>
          <span className="text-accent font-semibold">Arbxz</span>
        </Link>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden text-md md:flex justify-start items-center gap-4 font-semibold">
          <Link
            prefetch={false}
            className="relative py-2 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-0 before:bg-foreground hover:before:w-full before:transition-all before:duration-300"
            href="#aboutme">
            about me.
          </Link>
          <Link
            prefetch={false}
            className="relative py-2 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-0 before:bg-foreground hover:before:w-full before:transition-all before:duration-300"
            href="#projects">
            projects.
          </Link>
          <Link
            prefetch={false}
            className="relative py-2 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-0 before:bg-foreground hover:before:w-full before:transition-all before:duration-300"
            href="#designs">
            designs.
          </Link>
          <Link
            prefetch={false}
            className="relative py-2 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-0 before:bg-foreground hover:before:w-full before:transition-all before:duration-300"
            href="#art">
            art.
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <ThemeToggle />
        </div>
      </div>
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-[2.5px] bg-accent z-20 origin-top-left"
        style={{ scaleX: scrollYProgress }}
      />
    </nav>
  );
};

export default Navigation;
