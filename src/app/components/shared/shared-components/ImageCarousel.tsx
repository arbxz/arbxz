import {
  faBootstrap,
  faCss3,
  faFigma,
  faGit,
  faHtml5,
  faJs,
  faNodeJs,
  faNpm,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { StyledSlide, StyledSlider, StyledSliderTrack } from "../sharedStyles";

const ImageCarousel = () => {
  const icons = [
    faCss3,
    faHtml5,
    faJs,
    faReact,
    faNodeJs,
    faNpm,
    faBootstrap,
    faGit,
    faFigma,
  ];
  const imagesUrl = [
    "/images/icons/cypress-logo.svg",
    "/images/icons/tailwind.svg",
  ];
  return (
    <>
      <div className="flex justify-center items-center w-full mt-8">
        <StyledSlider>
          <StyledSliderTrack>
            {imagesUrl.map((image, index) => (
              <StyledSlide key={index}>
                <Image src={image} height="100" width="100" alt="icon-brand" />
              </StyledSlide>
            ))}

            {icons.map((icon, index) => (
              <StyledSlide key={index}>
                <FontAwesomeIcon size="4x" icon={icon} />
              </StyledSlide>
            ))}
          </StyledSliderTrack>
        </StyledSlider>
      </div>
    </>
  );
};

export default ImageCarousel;