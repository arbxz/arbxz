import { faFolder, faIdCard } from "@fortawesome/free-regular-svg-icons";
import { faDesktop, faGhost, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import {
  StyledBottomNavigation,
  StyledNavButton,
} from "./BottomNavigationStyles";

const BottomNavigation = () => {
  const navigationData = [
    {
      title: "My skills",
      href: "#skills-section",
      icon: faFolder,
      id: "skills",
    },
    {
      title: "About me",
      href: "#about-section",
      icon: faGhost,
      id: "about",
    },
    {
      title: "home",
      href: "#home",
      icon: faHouse,
      id: "home",
    },
    {
      title: "Contact me",
      href: "#contact-section",
      icon: faIdCard,
      id: "contact",
    },
    {
      title: "my projects",
      href: "#projects-block",
      icon: faDesktop,
      id: "projects",
    },
  ];

  return (
    <StyledBottomNavigation className="fixed hidden bottom-6 left-1/2 -translate-x-1/2 md:flex justify-center h-12 max-w-[3rem] rounded-3xl overflow-hidden">
      {navigationData.map((item) => (
        <Link key={item.id} href={item.href} title={item.title}>
          <StyledNavButton type="button">
            <FontAwesomeIcon icon={item.icon} />
            <span>{item.title}</span>
          </StyledNavButton>
        </Link>
      ))}
    </StyledBottomNavigation>
  );
};

export default BottomNavigation;
