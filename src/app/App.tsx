import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import BottomNavigation from "./components/bottom-navigation-bar/BottomNavigation";
import Contact from "./components/contact-section/Contact";
import KnowledgeBlock from "./components/knowledge-section/KnowledgeSection";
import MainBanner from "./components/main-section/MainSection";
import { StyledSocialContainer } from "./components/main-section/MainSectionStyles";
import { StyledMain } from "./themes/globalStyles";

const App = () => {
  const socialAffiliations = [
    {
      href: "https://www.linkedin.com/in/arbaaz-mowlabucus-15bb17160/",
      icon: faLinkedin,
    },
    {
      href: "https://github.com/arbxz",
      icon: faGithub,
    },
    {
      href: "https://www.instagram.com/wulver.bd/",
      icon: faInstagram,
    },
    {
      href: "https://www.instagram.com/ares_arte/",
      icon: faInstagram,
    },
  ];

  return (
    <StyledMain className="flex min-h-screen flex-col items-center justify-start select-none">
      <MainBanner />
      <div>
        <KnowledgeBlock />
        <Contact />
      </div>

      <BottomNavigation />
      <StyledSocialContainer className="hidden fixed md:flex rounded-3xl gap-2 flex-col px-3 py-4 ml-5 top-1/2 left-0 -translate-y-1/2 text-2xl">
        {socialAffiliations.map((affiliation, index) => (
          <Link key={index} href={affiliation.href} target="_blank">
            <FontAwesomeIcon icon={affiliation.icon} />
          </Link>
        ))}
      </StyledSocialContainer>
    </StyledMain>
  );
};

export default App;
