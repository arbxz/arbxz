import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import BottomNavigation from "./components/bottom-navigation-bar/BottomNavigation";
import KnowledgeBlock from "./components/knowledge-block/KnowledgeBlock";
import MainBanner from "./components/main-banner/MainBanner";
import { StyledSocialContainer } from "./components/main-banner/MainBannerStyles";
import { useThemeContext } from "./context/theme";
import { StyledMain, StyledThemeButton } from "./themes/globalStyles";

const App = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <StyledMain className="flex min-h-screen flex-col items-center justify-start select-none">
      <MainBanner />
      <KnowledgeBlock />
      <BottomNavigation />
      {/* Todo : Populate with array */}
      <StyledSocialContainer className="hidden fixed md:flex rounded-3xl gap-2 flex-col px-3 py-4 ml-5 top-1/2 left-0 -translate-y-1/2 text-2xl">
        <Link
          href="https://www.linkedin.com/in/arbaaz-mowlabucus-15bb17160/"
          target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link href="https://github.com/arbxz" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link href="https://www.instagram.com/wulver.bd/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link href="https://www.instagram.com/ares_arte/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </StyledSocialContainer>
      <StyledThemeButton
        className="fixed top-2.5 right-20 z-50 flex align-middle justify-center p-2 w-8 text-md rounded-full"
        onClick={() => {
          theme == "light" ? setTheme("dark") : setTheme("light");
        }}>
        <FontAwesomeIcon icon={theme == "light" ? faMoon : faSun} />
      </StyledThemeButton>
    </StyledMain>
  );
};

export default App;
