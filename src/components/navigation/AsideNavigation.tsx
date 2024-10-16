import * as React from "react";

import { motion } from "framer-motion";

import Accordion from "@/components/ui-elements/Accordion";

const uiOptions = [
  { label: "ui.", href: "/admin/" },
  { label: "forms", href: "/admin/form-view" },
  { label: "lists.", href: "/admin/list-view" },
];

const formOptions = [
  { label: "sign in.", href: "/admin/sign-in" },
  { label: "sign up", href: "/admin/sign-up" },
];

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
    <motion.li variants={variants2} whileTap={{ scale: 0.95 }}>
      <Accordion defaultState options={uiOptions} title="UI elements" />
    </motion.li>
    <motion.li variants={variants2} whileTap={{ scale: 0.95 }}>
      <Accordion defaultState options={formOptions} title="Forms" />
    </motion.li>
  </motion.ul>
);
