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
    y: 500,
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
