import Image from 'next/image';

import Card from '@/components/shared/Card';
import Container from '@/components/shared/Container';

const DesignSection = () => {
  return (
    <Container flexDirection="col">
      <div className="relative w-full">
        <Card
          background="glass"
          styles="md:absolute md:top-1/2 md:-translate-y-1/2 group flex items-center justify-center md:w-auto p-16 mb-4 z-10"
        >
          <div className="text-center text-xl">
            <div className="relative mb-4 inline-block overflow-hidden rounded-3xl border border-arbxz-accent px-4 py-1 text-sm text-arbxz-accent before:absolute before:-left-40 before:top-0 before:-z-0 before:h-full before:w-full before:bg-arbxz-accent before:transition-all before:duration-700 before:content-[''] group-hover:text-white group-hover:before:left-0 dark:text-white">
              <span className="relative z-10">Figma | Adobe XD</span>
            </div>

            <h2 className="mb-4 text-4xl font-bold md:text-6xl">
              UI/<span className="text-arbxz-accent">UX.</span>
            </h2>

            <div className="leading-5">
              I also prepare sketches customized to your needs.
            </div>
          </div>
        </Card>

        <div className="z-0 ml-auto flex justify-end">
          <div className="hidden w-auto overflow-hidden rounded-md bg-arbxz-accent md:block">
            <Image
              className="mix-blend-screen contrast-100 grayscale"
              src={'/figma.png'}
              width={650}
              height={650}
              loading="lazy"
              alt={'figma screenshot'}
            />
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-4">
          <Card
            background="bg-blue-500"
            styles="h-24 w-24 p-4 flex items-center justify-center"
          >
            <Image
              className="w-auto transition-all duration-300 ease-in-out hover:-translate-y-3"
              src={'/icons/photoshop.svg'}
              width={45}
              height={45}
              alt="photoshop icon"
            />
          </Card>
          <Card
            background="bg-orange-500"
            styles="h-24 w-24 p-4 flex items-center justify-center"
          >
            <Image
              className="w-auto transition-all duration-300 ease-in-out hover:-translate-y-3"
              src={'/icons/illustrator.svg'}
              width={45}
              height={45}
              alt="illustrator icon"
            />
          </Card>
          <Card
            background="bg-stone-200"
            styles="h-24 w-24 p-4 flex items-center justify-center"
          >
            <Image
              className="overflow-hidden rounded-full bg-white p-2 transition-all duration-300 ease-in-out hover:-translate-y-3"
              src={'/icons/clipstudio.svg'}
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
