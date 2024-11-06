import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

import Button from "@/components/ui-elements/Button";

const Footer = () => {
  return (
    <footer className="relative mt-8 flex flex-col justify-center items-center gap-8 text-center py-8 px-4 z-20">
      <Link
        href={"https://www.linkedin.com/in/arbaaz-mowlabucus-15bb17160/"}
        target="_blank"
        prefetch={false}
        className="text-sm">
        <Button intent="secondary" text="LinkedIn" icon={faLinkedin} />
      </Link>
      © 2024 Arbaaz Mowlabucus
    </footer>
  );
};

export default Footer;
