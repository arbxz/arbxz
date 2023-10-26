import Image from "next/image";

import ArtDeck from "./ArtDeck";
import clipstudioIcon from "/public/images/icons/clipstudio.svg";
import illustratorIcon from "/public/images/icons/illustrator.svg";
import psdIcon from "/public/images/icons/photoshop.svg";

const ArtSection = () => {
  return (
    <>
      <section className="relative w-full lg:max-w-5xl p-4">
        <div className="bg-pink rounded-xl shadow-md hover:shadow-xl transition-shadow ease-out duration-300 flex flex-1 lg:flex-row flex-col items-center justify-center mx-auto p-8">
          <div className="flex flex-col lg:w-1/2 justify-end gap-4">
            <span className="lg:text-left text-center text-primary text-2xl font-semibold">
              <span className="block text-6xl font-system-ui font-extrabold mb-8">
                Need some graphic work done ?
              </span>
              <span className="inline-block w-auto bg-white mb-2 p-2">
                or maybe some sketches or logos ?
              </span>
              <span className="inline-block bg-white p-2 font-bold text-3xl mb-2">
                Not a problem !
              </span>
              <span className="block bg-white p-2">
                I am very experienced in handling tools like
              </span>
            </span>
            <div className="flex flex-row lg:justify-start justify-center gap-4 mt-5">
              <Image
                src={psdIcon}
                width={45}
                height={45}
                alt="photoshop icon"
              />
              <Image
                src={illustratorIcon}
                width={45}
                height={45}
                alt="illustrator icon"
              />
              <Image
                src={clipstudioIcon}
                width={45}
                height={45}
                alt="clipstudio icon"
              />
            </div>
          </div>
          <div className="relative flex items-center lg:w-1/2 h-[400px] p-4">
            <ArtDeck />
          </div>
        </div>
      </section>
    </>
  );
};

export default ArtSection;
