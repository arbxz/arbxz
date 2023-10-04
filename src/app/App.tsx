import BottomNavigation from "./components/bottom-navigation-bar/BottomNavigation";
import Contact from "./components/contact-section/Contact";
import Footer from "./components/footer/Footer";
import GraphicSection from "./components/graphic-section/GraphicSection";
import MainBanner from "./components/main-section/MainSection";
import Modal from "./components/modal/Modal";
import SocialList from "./components/social-list/SocialList";
import { useThemeContext } from "./context/theme";
import { StyledMain } from "./themes/globalStyles";
// TODO FIX RELATIVE IMPORT

const App = () => {
  const { isModalOpen, modalContent } = useThemeContext();
  return (
    <StyledMain className="flex min-h-screen flex-col items-center justify-start select-none">
      <MainBanner />
      <Contact />
      <GraphicSection />
      <BottomNavigation />
      <SocialList />
      {/* <Footer /> */}
      <Modal isOpen={isModalOpen}>{modalContent}</Modal>
    </StyledMain>
  );
};

export default App;
