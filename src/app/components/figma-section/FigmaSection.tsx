import Image from "next/image";

import FigmaImg from "/public/figma-screenshot.png";
import FigmaLogo from "/public/images/icons/figma.svg";
import FigmaImgMobile from "/public/screenshot-mobile.png";

const FigmaSection = () => {
  return (
    <section className="md:py-8 mb-10">
      <div className="flex md:flex-row flex-col items-start justify-start md:gap-10 gap-5 max-w-5xl mx-auto p-4">
        <div className="flex flex-row gap-8 justify-center items-start">
          <Image
            src={FigmaLogo}
            width={100}
            loading="lazy"
            alt={"logo of figma"}
          />
          <div className="max-w-3xl">
            <span className="inline-block p-2 text-background bg-foreground text-4xl mb-4">
              Figma
            </span>
            <br />
            <span className="text-foreground lg:max-w-2xl md:text-3xl text-xl">
              I excel in Figma, efficiently creating and implementing designs
              with precision.
            </span>
          </div>
        </div>
        <div className="relative flex gap-4 justify-center items-baseline">
          <Image
            className="rounded-md overflow-hidden shadow-md"
            src={FigmaImg}
            width={1000}
            placeholder="blur"
            loading="lazy"
            alt={"Figma screenshot"}
          />
          <Image
            className="rounded-md overflow-hidden shadow-md"
            src={FigmaImgMobile}
            width={300}
            placeholder="blur"
            loading="lazy"
            alt={"Figma screenshot"}
          />
        </div>
      </div>
    </section>
  );
};

export default FigmaSection;
