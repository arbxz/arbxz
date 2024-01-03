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
      className="relative">
      <motion.button
        className="flex items-center justify-center gap-4 px-4 py-2 cursor-pointer w-full"
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}>
        {buttonText}
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}>
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path className="fill-foreground" d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        className="absolute top-full left-1/2 w-auto whitespace-nowrap -translate-x-1/2 flex flex-col gap-2 shadow bg-foreground p-2"
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
        }}>
        {options.map((option, index) => (
          <motion.li
            key={index}
            className="text-background hover:bg-background-secondary hover:text-foreground duration-200 transition-colors rounded p-2 cursor-pointer"
            variants={itemVariants}
            onClick={() => {
              option.action;
            }}>
            {option.label}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Dropdown;
