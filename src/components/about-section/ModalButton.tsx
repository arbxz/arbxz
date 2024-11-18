'use client';

import { Eye } from 'lucide-react';

import AboutModalContent from '@/components/about-modal-content/AboutModalContent';
import { useAppContext } from '@/context/appContext';

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
      className="mx-auto flex items-center gap-4 rounded-full border-2 border-arbxz-accent bg-background px-6 py-2 text-lg text-arbxz-accent transition-all hover:scale-105 hover:shadow-md dark:text-white"
    >
      <Eye />
      {buttonText}
    </button>
  );
};

export default ModalButton;
