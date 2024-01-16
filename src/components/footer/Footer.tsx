import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

import Button from "../ui-elements/Button";

const Footer = () => {
  return (
    <footer className="mt-8 bg-secondary flex flex-col items-center gap-8 text-center py-8 px-4">
      <Link
        href={"https://www.linkedin.com/in/arbaaz-mowlabucus-15bb17160/"}
        target="_blank"
        prefetch={false}
        className="flex flex-col gap-4 justify-center text-xl text-center">
        <span>Contact me</span>
        <Button intent="secondary" text="LinkedIn" icon={faLinkedin} />
      </Link>
      © 2024 Arbaaz Mowlabucus
    </footer>
  );
};

export default Footer;
