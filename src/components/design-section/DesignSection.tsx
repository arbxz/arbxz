import Image from "next/image";

import Card from "@/components/shared/Card";
import Container from "@/components/shared/Container";

const DesignSection = () => {
  return (
    <Container flexDirection="col">
      <div className="relative w-full">
        <Card
          background="glass"
          styles="md:absolute md:top-1/2 md:-translate-y-1/2 group flex items-center justify-center md:w-auto p-16 mb-4 z-10">
          <div className="text-center text-xl">
            <div className="relative inline-block mb-4 border border-arbxz-accent text-sm dark:text-white text-arbxz-accent rounded-3xl px-4 py-1 before:content-[''] before:h-full before:w-full before:absolute group-hover:text-white before:top-0 before:-left-40 group-hover:before:left-0 before:-z-0 overflow-hidden before:duration-700 before:transition-all before:bg-arbxz-accent">
              <span className="relative z-10">Figma | Adobe XD</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              UI/<span className="text-arbxz-accent">UX.</span>
            </h2>

            <div className="leading-5">
              I also prepare sketches customized to your needs.
            </div>
          </div>
        </Card>

        <div className="flex justify-end ml-auto z-0">
          <div className="hidden md:block w-auto rounded-md bg-arbxz-accent overflow-hidden">
            <Image
              className="mix-blend-screen grayscale contrast-100"
              src={"/figma.png"}
              width={650}
              height={650}
              loading="lazy"
              alt={"figma screenshot"}
            />
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <Card
            background="bg-blue-500"
            styles="h-24 w-24 p-4 flex items-center justify-center">
            <Image
              className="transition-all w-auto duration-300 ease-in-out hover:-translate-y-3"
              src={"/icons/photoshop.svg"}
              width={45}
              height={45}
              alt="photoshop icon"
            />
          </Card>
          <Card
            background="bg-orange-500"
            styles="h-24 w-24 p-4 flex items-center justify-center">
            <Image
              className="w-auto transition-all duration-300 ease-in-out hover:-translate-y-3"
              src={"/icons/illustrator.svg"}
              width={45}
              height={45}
              alt="illustrator icon"
            />
          </Card>
          <Card
            background="bg-stone-200"
            styles="h-24 w-24 p-4 flex items-center justify-center">
            <Image
              className="transition-all duration-300 ease-in-out hover:-translate-y-3 bg-white rounded-full p-2 overflow-hidden"
              src={"/icons/clipstudio.svg"}
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
