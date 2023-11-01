import { StyledModal } from "./StyledModal";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal = ({ isOpen, children }: ModalProps) => {
  return (
    <>
      <StyledModal isOpen={isOpen} className="fixed w-full h-full z-50">
        <div className="absolute flex items-center top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 w-full h-full">
          {children}
        </div>
      </StyledModal>
    </>
  );
};

export default Modal;
