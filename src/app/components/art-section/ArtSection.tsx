import Image from "next/image";

import ArtDeck from "./ArtDeck";
import clipstudioIcon from "/public/images/icons/clipstudio.svg";
import illustratorIcon from "/public/images/icons/illustrator.svg";
import psdIcon from "/public/images/icons/photoshop.svg";

const ArtSection = () => {
  return (
    <>
      <section id="designs" className="relative w-full lg:max-w-7xl p-4">
        <div className="lg:gap-10 flex-col-reverse md:gap-5 gap-4 flex lg:flex-row items-center justify-center">
          <ArtDeck />
          <div className="flex flex-col lg:w-1/2 justify-end gap-4">
            <div className="text-left text-xl">
              <span className="block md:text-6xl text-4xl text-foreground font-bold md:mb-4 mb-2">
                Need some graphic work done ?
              </span>
              <div className="flex flex-col justify-start gap-2 text-lg">
                <span className="self-start bg-foreground text-background md:p-2 p-1">
                  or maybe some sketches or logos ?
                </span>
                <span className="self-start bg-foreground text-background md:p-2 p-1">
                  Not a problem !
                </span>
                <span className="self-start bg-foreground text-background md:p-2 p-1">
                  I am very experienced in handling tools like
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-start gap-4 mt-4">
              <Image
                className="transition-all duration-300 ease-in-out hover:-translate-y-3"
                src={psdIcon}
                width={45}
                height={45}
                alt="photoshop icon"
              />
              <Image
                className="transition-all duration-300 ease-in-out hover:-translate-y-3"
                src={illustratorIcon}
                width={45}
                height={45}
                alt="illustrator icon"
              />
              <Image
                className="transition-all duration-300 ease-in-out hover:-translate-y-3 bg-white rounded-full p-2 overflow-hidden"
                src={clipstudioIcon}
                width={45}
                height={45}
                alt="clipstudio icon"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArtSection;
