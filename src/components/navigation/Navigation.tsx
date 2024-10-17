"use client";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import NavigationContent from "./NavigationContent";

const Navigation = () => {
  const pathname = usePathname();
  const [isBlog, setIsBlog] = useState(false);

  useEffect(() => {
    if (pathname.includes("blog")) {
      setIsBlog(true);
    } else {
      setIsBlog(false);
    }
  }, [pathname]);

  return <NavigationContent isBlog={isBlog} />;
};

export default Navigation;
