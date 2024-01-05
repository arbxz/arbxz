"use client";
import { createContext, useContext, useState } from "react";

const Context = createContext();

export const AppProviderContext = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [modalContent, setModalContent] = useState();

  return (
    <Context.Provider
      value={{
        isModalOpen,
        isAsideOpen,
        setIsModalOpen,
        setIsAsideOpen,
        modalContent,
        setModalContent,
      }}>
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => {
  return useContext(Context);
};
