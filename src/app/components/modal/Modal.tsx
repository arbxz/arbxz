import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal = ({ isOpen, children }: ModalProps) => {
  return (
    <>
      <div
        className={`${styles.modal} fixed top-0 left-0 w-full h-full z-[999] ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        } before:${isOpen ? "opacity-90" : "opacity-0"}
        }`}>
        <div className="absolute flex items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
