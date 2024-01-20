"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";

import ThemeToggle from "../ui-elements/ThemeToggle";

const Navigation = () => {
  const { scrollYProgress } = useScroll();

  return (
    <nav className="fixed top-0 text-foreground w-full md:px-4 md:py-4 transition-all ease-in-out duration-300 z-50">
      <div className="glass max-w-6xl flex gap-6 w-full justify-between items-center mx-auto px-4 py-3 md:rounded-xl shadow overflow-hidden">
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
        <motion.div
          className="absolute -bottom-[2px] left-0 right-0 h-2 bg-accent z-20 origin-bottom-left"
          style={{ scaleX: scrollYProgress }}
        />
      </div>
    </nav>
  );
};

export default Navigation;
