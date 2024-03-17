"use client";

import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAppContext } from "@/context/appContext";

import KnowledgeSection from "../about-modal-content/AboutModalContent";

interface ModalButtonProps {
  buttonText: string;
}
const ModalButton = ({ buttonText }: ModalButtonProps) => {
  const { setIsModalOpen, setModalContent } = useAppContext();

  return (
    <button
      type="button"
      onClick={() => {
        setModalContent(<KnowledgeSection />);
        setIsModalOpen(true);
      }}
      className="bg-foreground text-background border-foreground flex gap-4 items-center max-w-[20rem] text-xl md:px-6 px-4 md:py-2 py-1 rounded-3xl hover:scale-105 hover:shadow-md transition-all">
      <FontAwesomeIcon icon={faWindowMaximize} />
      {buttonText}
    </button>
  );
};

export default ModalButton;
