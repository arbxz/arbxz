import { createContext, useContext, useState } from "react";

const Context = createContext();

export const ThemeProviderContext = ({ children }) => {
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
      <div isModalOpen={setIsModalOpen} modalContent={modalContent}>
        {children}
      </div>
    </Context.Provider>
  );
};

export const useModalContext = () => {
  return useContext(Context);
};
