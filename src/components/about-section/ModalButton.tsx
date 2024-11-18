"use client";

import { Eye } from "lucide-react";

import AboutModalContent from "@/components/about-modal-content/AboutModalContent";
import { useAppContext } from "@/context/appContext";

interface ModalButtonProps {
  buttonText: string;
}
const ModalButton = ({ buttonText }: ModalButtonProps) => {
  const { setIsModalOpen, setModalContent } = useAppContext();

  return (
    <button
      type="button"
      onClick={() => {
        setModalContent(<AboutModalContent />);
        setIsModalOpen(true);
      }}
      className="mx-auto text-arbxz-accent bg-background border-arbxz-accent border-2 flex gap-4 items-center text-lg px-6 py-2 rounded-full hover:scale-105 dark:text-white hover:shadow-md transition-all">
      <Eye />
      {buttonText}
    </button>
  );
};

export default ModalButton;
