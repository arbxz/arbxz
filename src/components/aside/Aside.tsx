import { useRef } from "react";

import { motion, useCycle } from "framer-motion";

import { useDimensions } from "@/hooks/useDimensions";

import { AsideNavigation } from "../navigation/AsideNavigation";
import { MenuToggle } from "../ui-elements/MenuToggle";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Aside = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <aside className="relative md:flex hidden flex-col gap-4 p-4 lg:w-96 no-scrollbar bg-accent overflow-y-auto">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="relative flex flex-col gap-4">
        <motion.div
          className="absolute top-0 left-0 bottom-0 w-full"
          variants={sidebar}
        />
        <div className="relative flex items-center justify-between">
          <span>Title</span>
          <MenuToggle toggle={() => toggleOpen()} />
        </div>
        <AsideNavigation />
      </motion.nav>
    </aside>
  );
};

export default Aside;
