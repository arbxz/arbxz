import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const SocialList = () => {
  const socialAffiliations = [
    {
      href: "https://www.linkedin.com/in/arbaaz-mowlabucus-15bb17160/",
      icon: faLinkedin,
    },
    {
      href: "https://github.com/arbxz",
      icon: faGithub,
    },
    {
      href: "https://www.instagram.com/wulver.bd/",
      icon: faInstagram,
    },
    {
      href: "https://www.instagram.com/ares_arte/",
      icon: faInstagram,
    },
  ];

  return (
    <div className="hidden bg-foreground text-background fixed md:flex rounded-3xl gap-2 flex-col justify-center items-center px-2 py-4 mr-5 top-1/2 right-0 -translate-y-1/2 text-2xl shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300">
      {socialAffiliations.map((affiliation, index) => (
        <Link
          key={index}
          href={affiliation.href}
          target="_blank"
          className="text-xl transition-scale duration-300 hover:scale-125">
          <FontAwesomeIcon icon={affiliation.icon} />
        </Link>
      ))}
    </div>
  );
};

export default SocialList;
