import { faFolder, faIdCard } from "@fortawesome/free-regular-svg-icons";
import {
  faA,
  faDesktop,
  faGhost,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import {
  StyledBottomNavigation,
  StyledNavButton,
} from "./BottomNavigationStyles";

const BottomNavigation = () => {
  return (
    <StyledBottomNavigation className="fixed bottom-6 left-1/2 -translate-x-1/2 flex justify-center h-12 max-w-[3rem] rounded-3xl overflow-hidden">
      <Link href="#home" title="skills block">
        <StyledNavButton>
          <FontAwesomeIcon icon={faFolder} />
          <span>My dev skills</span>
        </StyledNavButton>
      </Link>
      <Link href="#home" title="about block">
        <StyledNavButton>
          <FontAwesomeIcon icon={faGhost} />
          <span>About me</span>
        </StyledNavButton>
      </Link>
      <Link href="#home" title="home block">
        <StyledNavButton>
          <FontAwesomeIcon icon={faHouse} />
          <span>Home</span>
        </StyledNavButton>
      </Link>
      <Link href="#home" title="contact block">
        <StyledNavButton>
          <FontAwesomeIcon icon={faIdCard} />
          <span>Reach out to me</span>
        </StyledNavButton>
      </Link>
      <Link href="#home" title="projects block">
        <StyledNavButton>
          <FontAwesomeIcon icon={faDesktop} />
          <span>Browse my projects</span>
        </StyledNavButton>
      </Link>
    </StyledBottomNavigation>
  );
};

export default BottomNavigation;
