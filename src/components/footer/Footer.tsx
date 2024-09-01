import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useTranslations } from "next-intl";

import Button from "../ui-elements/Button";

const Footer = () => {
  const t = useTranslations("Misc");
  return (
    <footer className="mt-8 flex flex-col justify-center items-center gap-8 text-center py-8 px-4">
      <Link
        href={"https://www.linkedin.com/in/arbaaz-mowlabucus-15bb17160/"}
        target="_blank"
        prefetch={false}
        className="flex flex-col gap-4 items-center text-xl text-center">
        <span className="inline-block">{t("contact")}</span>
        <Button intent="primary" text="LinkedIn" icon={faLinkedin} />
      </Link>
      © 2024 Arbaaz Mowlabucus
    </footer>
  );
};

export default Footer;
