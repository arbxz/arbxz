import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

import ClockClient from "@/components/main-section/ClockClient";
import TextCard from "@/components/main-section/TextCard";
import { Scene } from "@/components/scenes/Scene";
import Card from "@/components/shared/Card";
import Chat from "@/components/shared/Chat";

const MainBanner = () => {
  return (
    <div className="w-full md:min-h-screen overflow-hidden">
      <div className="absolute left-0 top-0 overflow-hidden w-full h-screen z-0">
        <Scene />
      </div>

      <div className="relative md:min-h-screen w-full mx-auto flex flex-nowrap flex-col lg:flex-row lg:items-end justify-center gap-4 py-8 pt-24 max-w-5xl xl:max-w-6xl z-40">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center z-10">
          <div className="md:absolute md:w-96 flex flex-col gap-4 md:top-24 right-0 w-full">
            <Chat message="Hello fellow visitor ! 👋" />
            <div className="ml-4">
              <Chat message="Checkout my portfolio" time="19:31" />
            </div>
            <div className="ml-8">
              <Chat message="reach out to me if need arise 😄" time="19:32" />
            </div>
          </div>

          <div className="scale-90 lg:scale-100 group relative md:absolute top-1/2 md:-translate-y-1/2 left-0 w-full md:w-auto">
            <div className="absolute top-4 -right-4 lg:top-8 lg:-right-8 group-hover:top-0 group-hover:right-0 group-hover:relative group-hover:z-20 duration-300 transition-all">
              <TextCard
                title="Ah curious are we"
                text="I'm also really good in css/scss. I love to design and code beautiful websites."
              />
            </div>
            <div className="relative top-0 right-0 group-hover:top-4 group-hover:-right-4 lg:group-hover:top-8 lg:group-hover:-right-8 group-hover:absolute z-20 group-hover:z-10 duration-300 transition-all">
              <TextCard
                title="Who am I ?"
                text="I'm Arbaaz Mowlabucus, a frontend engineer with speciality in React and Nextjs."
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto z-20 mt-auto">
          <div className="relative z-50 flex flex-wrap md:flex-nowrap gap-4 items-stretch justify-stretch w-full">
            <Card
              background="animated-background bg-gradient-to-l from-arbxz-accent via-purple-500 to-purple-600"
              styles="flex w-full items-center p-8 text-white text-5xl text-center">
              <ClockClient />
            </Card>

            <div className="flex min-w-max gap-4">
              <Card styles="flex justify-between flex-col gap-4 p-4 bg-stone-800">
                <div className="flex gap-4 items-center text-white">
                  <Github className="text-3xl" />
                  <span>Github</span>
                </div>
                <Link
                  className="bg-white text-stone-800 px-4 py-2 rounded-full text-center border-2 border-white transition-colors duration-300 hover:border-white hover:text-white hover:bg-stone-800"
                  href="https://github.com/arbxz"
                  target="_blank"
                  prefetch={false}>
                  Open me
                </Link>
              </Card>

              <Card styles="flex justify-between flex-col gap-4 p-4 bg-white">
                <div className="flex gap-4 items-center  text-stone-800">
                  <Linkedin className="text-3xl" />
                  <span>Linkedin</span>
                </div>
                <Link
                  className="text-white bg-stone-800 px-4 py-2 rounded-full text-center border-2 border-stone-800 transition-colors duration-300 hover:border-stone-800 hover:text-stone-800 hover:bg-white"
                  href="https://www.linkedin.com/in/arbaaz-mowlabucus-15bb17160/"
                  target="_blank"
                  prefetch={false}>
                  Open me
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
