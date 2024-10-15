"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import Modal from "@/components/modal/Modal";
import { useAppContext } from "@/context/appContext";

import PageContent from "./PageContent";

const Home = () => {
  const { isModalOpen, modalContent } = useAppContext();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, (latest) => latest * -600);

  return (
    <>
      <motion.div
        className="background-grid"
        style={{
          position: "absolute",
          left: 0,
          top: y,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />
      <PageContent />
      {isModalOpen && <Modal isOpen={isModalOpen}>{modalContent}</Modal>}
    </>
  );
};

export default Home;
