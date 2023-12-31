"use client";

import { useRef } from "react";

import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";

import { useAppContext } from "@/context/appContext";
import { useDimensions } from "@/hooks/useDimensions";

import Dropdown from "../ui-elements/Dropdown";
import { MenuToggle } from "../ui-elements/MenuToggle";

const AdminNavigation = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const { isAsideOpen, setIsAsideOpen } = useAppContext();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const userOptions = [
    { label: "profile.", action: () => {} },
    { label: "account settings.", action: () => {} },
    { label: "logout.", action: () => {} },
  ];

  return (
    <header>
      <nav className="relative rounded-full text-foreground shadow shadow-customShadow h-auto w-full py-2 md:px-6 px-4 transition-all ease-in-out duration-300 z-50">
        <div className="flex gap-4 w-full justify-between items-center">
          <motion.nav
            initial={isAsideOpen}
            animate={isAsideOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className="relative flex flex-col gap-4">
            <MenuToggle toggle={() => setIsAsideOpen(!isAsideOpen)} />
          </motion.nav>

          <Link className="flex items-center text-lg gap-2 mr-auto" href="/">
            Arbxz | Admin Template
          </Link>

          <Dropdown
            options={userOptions}
            buttonText={
              <span className="relative before:absolute before:top-6 before:left-0 before:h-1 before:w-0 before:bg-background hover:before:w-full before:transition-all before:duration-300">
                Arbaaz Mowlabucus.
              </span>
            }
          />
          <button
            type="button"
            title="Theme toggle"
            className="flex items-center justify-center p-2 w-8 text-md rounded-full bg-foreground text-background"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }>
            {resolvedTheme == "light" || undefined ? (
              <FontAwesomeIcon d="" icon={faMoon} />
            ) : (
              <FontAwesomeIcon d="" icon={faSun} />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default AdminNavigation;
