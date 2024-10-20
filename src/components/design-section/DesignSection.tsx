import React from "react";

import Image from "next/image";

import Card from "@/components/shared/Card";
import Container from "@/components/shared/Container";
import WaveBackground from "@/components/shared/WaveBackground";

import clipstudioIcon from "/public/icons/clipstudio.svg";
import illustratorIcon from "/public/icons/illustrator.svg";
import psdIcon from "/public/icons/photoshop.svg";

const DesignSection = () => {
  return (
    <Container flexDirection="col">
      <div className="relative grid lg:grid-flow-col md:grid-cols-2 w-full gap-4 md:gap-8">
        <Card
          background="glass"
          styles="group flex items-center justify-center w-full p-16">
          <div className="text-center text-xl">
            <div className="relative inline-block mb-4 border border-arbxz-accent text-sm text-arbxz-accent rounded-3xl px-4 py-1 before:content-[''] before:h-full before:w-full before:absolute group-hover:text-white before:top-0 before:-left-40 group-hover:before:left-0 before:-z-0 overflow-hidden before:duration-700 before:transition-all before:bg-arbxz-accent">
              <span className="relative z-10">Figma | Adobe XD</span>
            </div>

            <h2 className="text-4xl md:text-4xl font-semibold mb-4">
              UI/<span className="text-arbxz-accent">UX.</span>
            </h2>

            <div className="leading-5">
              I also prepare sketches customized to your needs.
            </div>
          </div>
        </Card>

        <Card
          background="glass"
          styles="relative p-4 flex flex-col gap-4 justify-center">
          <WaveBackground />
          <Card styles="w-[120px] h-[120px] mx-auto p-4 flex items-center justify-center shadow-inner">
            <Image
              className="p-4"
              src={"/icons/figma.svg"}
              width={75}
              height={75}
              loading="lazy"
              alt={"logo of figma"}
            />
          </Card>
          <p className="text-xl text-center leading-5">
            I use Figma, efficiently creating wireframes and prototypes.
          </p>
        </Card>

        <div className="flex justify-center lg:flex-col gap-4">
          <Card styles="h-24 w-24 p-4 flex items-center justify-center">
            <Image
              className="transition-all w-auto duration-300 ease-in-out hover:-translate-y-3"
              src={psdIcon}
              width={45}
              height={45}
              alt="photoshop icon"
            />
          </Card>
          <Card styles="h-24 w-24 p-4 flex items-center justify-center">
            <Image
              className="w-auto transition-all duration-300 ease-in-out hover:-translate-y-3"
              src={illustratorIcon}
              width={45}
              height={45}
              alt="illustrator icon"
            />
          </Card>
          <Card styles="h-24 w-24 p-4 flex items-center justify-center">
            <Image
              className="transition-all duration-300 ease-in-out hover:-translate-y-3 bg-white rounded-full p-2 overflow-hidden"
              src={clipstudioIcon}
              width={45}
              height={45}
              alt="clipstudio icon"
            />
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default DesignSection;
