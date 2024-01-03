import { useState } from "react";

import { motion, Variants } from "framer-motion";

interface AccordionProps {
  title: React.ReactNode | string;
  options: { label: string; action: () => void }[];
  defaultState?: boolean;
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Accordion = ({
  title,
  options,
  defaultState = false,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultState);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="relative">
      <motion.button
        className="flex items-center justify-between gap-4 py-2 px-4 cursor-pointer w-full rounded-md bg-background"
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}>
        {title}
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
        className="w-full flex flex-col translate-y-1 gap-2 bg-background shadow rounded-md"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 6px)",
            height: "auto",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 6px)",
            height: 0,
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
            className="text-foreground py-2 px-4 hover:bg-accent duration-300 transition-colors cursor-pointer"
            variants={itemVariants}
            onClick={() => {
              option.action;
            }}>
            {option.label}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Accordion;
