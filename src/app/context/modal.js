import { createContext, useContext, useState } from "react";

const Context = createContext();

export const ModalProviderContext = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState();

  return (
    <Context.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        modalContent,
        setModalContent,
      }}>
      {children}
    </Context.Provider>
  );
};

export const useModalContext = () => {
  return useContext(Context);
};
