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
    <aside className="relative md:flex hidden flex-col gap-4 p-4 lg:w-96 no-scrollbar overflow-y-auto">
      <motion.nav
        initial={isAsideOpen}
        animate={isAsideOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="relative flex flex-col gap-4">
        <motion.div
          className="absolute top-0 left-0 bottom-0 w-full"
          variants={sidebar}
        />
        <AsideNavigation />
      </motion.nav>
    </aside>
  );
};

export default Aside;
