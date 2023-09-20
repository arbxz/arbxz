import BottomNavigation from "./components/bottom-navigation-bar/BottomNavigation";
import Contact from "./components/contact-section/Contact";
import KnowledgeBlock from "./components/knowledge-section/KnowledgeSection";
import MainBanner from "./components/main-section/MainSection";
import SocialList from "./components/social-list/SocialList";
import { StyledMain } from "./themes/globalStyles";

const App = () => {
  return (
    <StyledMain className="flex min-h-screen flex-col items-center justify-start select-none">
      <MainBanner />
      <Contact />
      <KnowledgeBlock />
      <BottomNavigation />
      <SocialList />
    </StyledMain>
  );
};

export default App;
