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
  return (
    <>
      <div className="flex justify-center items-center w-full mt-8">
        <StyledSlider>
          <StyledSliderTrack>
            {icons.map((icon, index) => (
              <StyledSlide key={index}>
                <FontAwesomeIcon className="mx-auto" size="4x" icon={icon} />
              </StyledSlide>
            ))}
          </StyledSliderTrack>
        </StyledSlider>
      </div>
    </>
  );
};

export default ImageCarousel;
