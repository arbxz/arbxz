import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { StyledSocialContainer } from "./SocialListStyles";

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
    <StyledSocialContainer className="hidden fixed md:flex rounded-3xl gap-2 flex-col px-3 py-4 ml-5 top-1/2 left-0 -translate-y-1/2 text-2xl shadow-lg">
      {socialAffiliations.map((affiliation, index) => (
        <Link
          key={index}
          href={affiliation.href}
          target="_blank"
          className="text-xl opacity-90 hover:opacity-100">
          <FontAwesomeIcon icon={affiliation.icon} />
        </Link>
      ))}
    </StyledSocialContainer>
  );
};

export default SocialList;
