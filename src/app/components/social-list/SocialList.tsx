import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
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
    <motion.div
      className="hidden md:block fixed top-1/2 -right-[100px] -translate-y-1/2"
      initial={{ x: 0 }}
      animate={{ x: -120 }}
      transition={{ type: "spring", stiffness: 100 }}>
      <div className=" bg-accent text-white md:flex rounded-3xl gap-2 flex-col justify-center items-center px-2 py-4 text-xl shadow-md hover:shadow-lg transition-all duration-300">
        {socialAffiliations.map((affiliation, index) => (
          <Link
            key={index}
            href={affiliation.href}
            target="_blank"
            className="transition-scale duration-300 hover:scale-125">
            <FontAwesomeIcon icon={affiliation.icon} />
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialList;
