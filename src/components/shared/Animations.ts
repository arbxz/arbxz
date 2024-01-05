import { Variants } from "framer-motion";

export const slideInRightVariants: Variants = {
  offscreen: {
    scale: 0.9,
    x: -500,
  },
  onscreen: {
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.5,
      stiffness: 100,
    },
  },
};

export const slideInLeftVariants: Variants = {
  offscreen: {
    scale: 0.9,
    x: 500,
  },
  onscreen: {
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.5,
      stiffness: 100,
    },
  },
};

export const slideUpVariants: Variants = {
  offscreen: {
    scale: 0.9,
    y: 200,
  },
  onscreen: {
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.5,
      stiffness: 100,
    },
  },
};

export const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 15px 15px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 15px 15px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
