import Image from "next/image";

import ArtDeck from "./ArtDeck";
import clipstudioIcon from "/public/images/icons/clipstudio.svg";
import illustratorIcon from "/public/images/icons/illustrator.svg";
import psdIcon from "/public/images/icons/photoshop.svg";

const ArtSection = () => {
  return (
    <>
      <section id="designs" className="relative w-full lg:max-w-7xl p-4">
        <div className="lg:gap-10 flex-col-reverse md:gap-5 gap-3 flex flex-1 lg:flex-row items-center justify-center mx-auto p-3 md:p-8">
          <ArtDeck />
          <div className="flex flex-col lg:w-1/2 justify-end gap-4">
            <span className="lg:text-left text-center text-background md:text-2xl text-lg font-semibold">
              <span className="block text-foreground blocktext-2xl md:text-6xl text-4xl font-system-ui font-extrabold md:mb-8 mb-2">
                Need some graphic work done ?
              </span>
              <span className="inline-block w-auto bg-foreground text-background mb-2 md:p-2 p-1">
                or maybe some sketches or logos ?
              </span>

              <br />
              <span className="inline-block bg-foreground text-background md:p-2 p-1 font-bold text-xl md:text-3xl mb-2">
                Not a problem !
              </span>
              <span className="inline-block bg-foreground text-background md:p-2 p-1">
                I am very experienced in handling tools like
              </span>
            </span>
            <div className="flex flex-row lg:justify-start justify-center gap-4 mt-5">
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
