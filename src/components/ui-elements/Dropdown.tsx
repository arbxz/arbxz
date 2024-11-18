import React from "react";
import { useState } from "react";

import { motion, Variants } from "framer-motion";

interface DropdownProps {
  buttonText: React.ReactNode | string;
  options: { label: string; action: () => void }[];
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Dropdown = ({ buttonText, options }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="relative"
    >
      <motion.button
        className="flex w-full cursor-pointer items-center justify-center gap-4 px-4 py-2"
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {buttonText}
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path className="fill-foreground" d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        className="absolute left-1/2 top-full flex w-auto -translate-x-1/2 flex-col gap-2 whitespace-nowrap bg-foreground p-2 shadow"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
      >
        {options.map((option, index) => (
          <motion.li
            key={index}
            className="cursor-pointer rounded p-2 text-background transition-colors duration-200 hover:bg-background-secondary hover:text-foreground"
            variants={itemVariants}
            onClick={() => {
              option.action;
            }}
          >
            {option.label}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Dropdown;
