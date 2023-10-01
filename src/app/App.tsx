import BottomNavigation from "./components/bottom-navigation-bar/BottomNavigation";
import Contact from "./components/contact-section/Contact";
import Footer from "./components/footer/Footer";
import GraphicSection from "./components/graphic-section/GraphicSection";
import KnowledgeBlock from "./components/knowledge-section/KnowledgeSection";
import MainBanner from "./components/main-section/MainSection";
import SocialList from "./components/social-list/SocialList";
import GameboySVG from "./components/svg/Gameboy";
import { StyledMain } from "./themes/globalStyles";

const App = () => {
  return (
    <StyledMain className="flex min-h-screen flex-col items-center justify-start select-none">
      <MainBanner />
      <GraphicSection />
      <Contact />
      <KnowledgeBlock />
      <BottomNavigation />
      <SocialList />
      <Footer />
    </StyledMain>
  );
};

export default App;
