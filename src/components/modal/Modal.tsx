import React from "react";

import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal = ({ isOpen, children }: ModalProps) => {
  return (
    <>
      <div
        className={`${styles.modal} fixed left-0 top-0 z-[999] h-full w-full ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        } before:${isOpen ? "opacity-90" : "opacity-0"} }`}
      >
        <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center">
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
