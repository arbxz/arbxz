import React from "react";
import { useState } from "react";

import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";

interface AccordionProps {
  title: React.ReactNode | string;
  options: { label: string; href: string }[];
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
      className="relative"
    >
      <motion.button
        className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-md bg-form-active px-4 py-2 text-white"
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path className="fill-white" d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            className="flex translate-y-1 flex-col rounded-md bg-background"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                opacity: 1,
                height: "auto",
                clipPath: "inset(0% 0% 0% 0% round 6px)",
              },
              collapsed: {
                opacity: 0,
                height: 0,
                clipPath: "inset(10% 50% 90% 50% round 6px)",
              },
            }}
          >
            {options.map((option, index) => (
              <motion.li key={index} variants={itemVariants}>
                <Link
                  prefetch={false}
                  className="block w-full cursor-pointer px-4 py-2 text-foreground transition-colors duration-300 hover:bg-form-active hover:text-white"
                  href={option.href}
                >
                  {option.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
