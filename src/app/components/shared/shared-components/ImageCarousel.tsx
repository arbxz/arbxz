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

import styles from "../Shared.module.css";

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
      <div className="flex justify-center items-center w-full">
        <div className={styles.slider}>
          <div className={styles.sliderTrack}>
            {icons.map((icon, index) => (
              <div
                className={`${styles.slide} md:h-20 md:w-60 h-14 w-40`}
                key={index}>
                <FontAwesomeIcon className="mx-auto" size="4x" icon={icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;
