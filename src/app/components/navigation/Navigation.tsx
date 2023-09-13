import React, { useState, useEffect } from "react";
import { StyledNavigationWrapper } from "./NavigationStyles";

const Navigation = () => {
  const [isContentScrolled, setIsContentScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsContentScrolled(true);
      } else {
        setIsContentScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isContentScrolled]);

  return (
    <StyledNavigationWrapper
      isContentScrolled={isContentScrolled}
      className="fixed top-0 flex h-auto w-full justify-between align-middle p-4">
      <a className="text-xl text-black" href="/">
        Arbxz
      </a>
      <div className="side-menu">
        <span className="language-wrapper block text-md">EN | FR</span>
      </div>
    </StyledNavigationWrapper>
  );
};

export default Navigation;
