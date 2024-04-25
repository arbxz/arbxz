"use client";

import Modal from "@/components/modal/Modal";
import { useAppContext } from "@/context/appContext";

import PageContent from "./PageContent";

const Home = () => {
  const { isModalOpen, modalContent } = useAppContext();

  return (
    <div
      className={`${
        isModalOpen && "overflow-hidden"
      } overflow-hidden bg-background-secondary`}>
      <PageContent />
      {isModalOpen && <Modal isOpen={isModalOpen}>{modalContent}</Modal>}
    </div>
  );
};

export default Home;
