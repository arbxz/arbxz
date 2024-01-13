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
            ? "w-full lg:w-72 lg:translate-x-0 lg:pr-4"
            : "lg:w-0 lg:-translate-x-80"
        } overflow-hidden origin-top-left transition-all duration-300 fixed lg:relative top-0 left-0 bg-background-secondary p-4 lg:p-0 lg:bg-transparent w-full h-screen lg:h-full pt-20 lg:pt-24 no-scrollbar overflow-y-auto z-50`}
        variants={sidebar}>
        <AsideNavigation />
      </motion.aside>
    </motion.nav>
  );
};

export default Aside;
