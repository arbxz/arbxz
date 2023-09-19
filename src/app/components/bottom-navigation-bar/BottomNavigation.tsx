import { faFolder, faIdCard } from "@fortawesome/free-regular-svg-icons";
import { faDesktop, faGhost, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import {
  StyledBottomNavigation,
  StyledNavButton,
} from "./BottomNavigationStyles";

const BottomNavigation = () => {
  return (
    <StyledBottomNavigation className="fixed bottom-6 left-1/2 -translate-x-1/2 flex justify-center h-12 max-w-[3rem] rounded-3xl overflow-hidden">
      <Link href="#skills-block" title="my skills">
        <StyledNavButton>
          <FontAwesomeIcon icon={faFolder} />
          <span>My dev skills</span>
        </StyledNavButton>
      </Link>
      <Link href="#about-block" title="about me">
        <StyledNavButton>
          <FontAwesomeIcon icon={faGhost} />
          <span>About me</span>
        </StyledNavButton>
      </Link>
      <Link href="#home" title="home section">
        <StyledNavButton>
          <FontAwesomeIcon icon={faHouse} />
          <span>Home</span>
        </StyledNavButton>
      </Link>
      <Link href="#contact-block" title="Contact me">
        <StyledNavButton>
          <FontAwesomeIcon icon={faIdCard} />
          <span>Reach out to me</span>
        </StyledNavButton>
      </Link>
      <Link href="#projects-block" title="my projects">
        <StyledNavButton>
          <FontAwesomeIcon icon={faDesktop} />
          <span>Browse my projects</span>
        </StyledNavButton>
      </Link>
    </StyledBottomNavigation>
  );
};

export default BottomNavigation;
