import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIconsList } from "./SocialBoxStyles";

const SocialBox = () => {
  return (
    <SocialIconsList>
      <FontAwesomeIcon icon={["fab", "linkedin"]} />
    </SocialIconsList>
  );
};

export default SocialBox;
