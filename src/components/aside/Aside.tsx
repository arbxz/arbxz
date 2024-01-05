import { useRef } from "react";

import { motion } from "framer-motion";

import { useAppContext } from "@/context/appContext";
import { useDimensions } from "@/hooks/useDimensions";

import { AsideNavigation } from "../navigation/AsideNavigation";
import { sidebar } from "../shared/Animations";

const Aside = () => {
  const { isAsideOpen } = useAppContext();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={true}
      animate={isAsideOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}>
      <motion.aside
        className={`
        ${
          isAsideOpen
            ? "w-full md:w-72 md:translate-x-0"
            : "md:w-0 md:-translate-x-80"
        } overflow-hidden origin-top-left transition-all duration-300 fixed md:relative top-0 left-0 bg-background-secondary p-4 md:p-0 md:bg-transparent w-full h-screen md:h-full pt-20 md:pt-24 md:flex flex-col gap-4 no-scrollbar overflow-y-auto z-50`}
        variants={sidebar}>
        <AsideNavigation />
      </motion.aside>
    </motion.nav>
  );
};

export default Aside;
