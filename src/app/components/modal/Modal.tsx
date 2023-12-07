import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal = ({ isOpen, children }: ModalProps) => {
  return (
    <>
      <div
        className={`${styles.modal} fixed w-full h-full z-[999] ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        } before:${isOpen ? "opacity-90" : "opacity-0"}
        }`}>
        <div className="absolute flex items-center top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 w-full h-full">
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
