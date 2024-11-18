"use client";

import { useRef } from "react";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
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
    <header className="fixed left-0 top-0 z-10 w-full">
      <nav className="glass relative z-50 flex h-auto w-full items-center justify-between gap-2 border-0 border-b-4 border-form-active px-4 py-2 text-foreground shadow shadow-custom-shadow transition-all duration-300 ease-in-out lg:gap-4">
        <motion.nav
          initial={isAsideOpen}
          animate={isAsideOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          className="relative flex flex-col"
        >
          <MenuToggle toggle={() => setIsAsideOpen(!isAsideOpen)} />
        </motion.nav>

        <Link
          className="mr-auto flex items-center gap-2 text-lg"
          href="/admin"
          prefetch={false}
        >
          <Zap className="text-form-active" />
          <span className="font-semibold text-form-active">Arbxz</span>
          <span className="hidden lg:inline-block">| Admin</span>
        </Link>

        <Dropdown
          options={userOptions}
          buttonText={
            <span className="relative before:absolute before:left-0 before:top-6 before:h-1 before:w-0 before:bg-background before:transition-all before:duration-300 hover:before:w-full">
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
