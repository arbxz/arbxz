import * as React from "react";

import { motion } from "framer-motion";

import Accordion from "../ui-elements/Accordion";

const uiOptions = [
  { label: "ui.", action: () => {} },
  { label: "forms", action: () => {} },
  { label: "calendar.", action: () => {} },
];

const itemIds = [0, 1, 2, 3, 4];

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variants2 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const AsideNavigation = () => (
  <motion.ul variants={variants} className="flex flex-col gap-4">
    {itemIds.map((i) => (
      <motion.li key={i} variants={variants2} whileTap={{ scale: 0.95 }}>
        <Accordion options={uiOptions} title="Accordion" />
      </motion.li>
    ))}
  </motion.ul>
);

export const MenuItem = ({ i }: any) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants2}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}>
      <div className="icon-placeholder" style={style} />
      <div className="text-placeholder" style={style} />
    </motion.li>
  );
};
