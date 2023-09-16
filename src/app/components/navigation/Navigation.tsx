import React, { useEffect, useState } from "react";

import { StyledNavigationWrapper } from "./NavigationStyles";

const Navigation = () => {
  const [isContentScrolled, setIsContentScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
      <a className="text-xl" href="/">
        Arbxz | <span className="text-sm">Arbaaz Mowlabucus</span>
      </a>
      <div>
        <span className="language-wrapper block text-md">EN | FR</span>
      </div>
    </StyledNavigationWrapper>
  );
};

export default Navigation;
