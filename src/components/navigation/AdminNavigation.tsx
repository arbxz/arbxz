"use client";

import { useRef } from "react";

import { motion } from "framer-motion";
import Link from "next/link";

import { useAppContext } from "@/context/appContext";
import { useDimensions } from "@/hooks/useDimensions";

import Dropdown from "../ui-elements/Dropdown";
import { MenuToggle } from "../ui-elements/MenuToggle";
import ThemeToggle from "../ui-elements/ThemeToggle";

const AdminNavigation = () => {
  const { isAsideOpen, setIsAsideOpen } = useAppContext();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const userOptions = [
    { label: "profile.", action: () => {} },
    { label: "account settings.", action: () => {} },
    { label: "logout.", action: () => {} },
  ];

  return (
    <header className="md:fixed top-0 left-0 w-full md:p-4 z-10">
      <nav className="glass relative flex gap-2 md:gap-4 w-full justify-between items-center md:rounded-full text-foreground shadow shadow-custom-shadow h-auto py-2 px-4 transition-all ease-in-out duration-300 z-50">
        <motion.nav
          initial={isAsideOpen}
          animate={isAsideOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          className="relative flex flex-col">
          <MenuToggle toggle={() => setIsAsideOpen(!isAsideOpen)} />
        </motion.nav>

        <Link
          className="flex items-center text-lg gap-2 mr-auto"
          href="/design-system">
          <span className="gradient-text font-semibold md:font-normal">
            Arbxz{" "}
          </span>
          <span className="hidden md:inline-block">| Admin Template</span>
        </Link>

        <Dropdown
          options={userOptions}
          buttonText={
            <span className="relative before:absolute before:top-6 before:left-0 before:h-1 before:w-0 before:bg-background hover:before:w-full before:transition-all before:duration-300">
              Arbaaz M.
            </span>
          }
        />
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default AdminNavigation;
