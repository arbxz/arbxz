import { useTranslations } from "next-intl";

import Card from "../shared/Card";
import ModalButton from "./ModalButton";

const About = () => {
  const t = useTranslations("About");

  return (
    <Card
      background="glass"
      styles="p-4 flex text-center gap-4 flex-col justify-center items-center h-full w-full hover:bg-arbxz-accent hover:text-white transition-colors duration-300">
      <h2 className="text-6xl font-bold">{t("title")}</h2>
      <div className="text-xl">{t("text")}</div>
      <ModalButton buttonText={t("button")} />
    </Card>
  );
};

export default About;
