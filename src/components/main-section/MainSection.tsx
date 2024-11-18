import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

import ClockClient from "@/components/main-section/ClockClient";
import TextCard from "@/components/main-section/TextCard";
import { Scene } from "@/components/scenes/Scene";
import Card from "@/components/shared/Card";
import Chat from "@/components/shared/Chat";

const MainBanner = () => {
  return (
    <div className="w-full overflow-hidden md:min-h-screen">
      <div className="absolute left-0 top-0 z-0 h-screen w-full overflow-hidden">
        <Scene />
      </div>

      <div className="relative z-40 mx-auto flex w-full max-w-5xl flex-col flex-nowrap justify-center gap-4 py-8 pt-24 md:min-h-screen lg:flex-row lg:items-end xl:max-w-6xl">
        <div className="z-10 flex flex-col items-center justify-center gap-4 md:flex-row">
          <div className="right-0 flex w-full flex-col gap-4 md:absolute md:top-24 md:w-96">
            <Chat message="Hello fellow visitor ! 👋" />
            <div className="ml-4">
              <Chat message="Checkout my portfolio" time="19:31" />
            </div>
            <div className="ml-8">
              <Chat message="reach out to me if need arise 😄" time="19:32" />
            </div>
          </div>

          <div className="group relative left-0 top-1/2 w-full scale-90 md:absolute md:w-auto md:-translate-y-1/2 lg:scale-100">
            <div className="absolute -right-4 top-4 transition-all duration-300 group-hover:relative group-hover:right-0 group-hover:top-0 group-hover:z-20 lg:-right-8 lg:top-8">
              <TextCard
                title="Ah curious are we"
                text="I'm also really good in css/scss. I love to design and code beautiful websites."
              />
            </div>
            <div className="relative right-0 top-0 z-20 transition-all duration-300 group-hover:absolute group-hover:-right-4 group-hover:top-4 group-hover:z-10 lg:group-hover:-right-8 lg:group-hover:top-8">
              <TextCard
                title="Who am I ?"
                text="I'm Arbaaz Mowlabucus, a frontend engineer with speciality in React and Nextjs."
              />
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-auto mt-auto">
          <div className="relative z-50 flex w-full flex-wrap items-stretch justify-stretch gap-4 md:flex-nowrap">
            <Card
              background="animated-background bg-gradient-to-l from-arbxz-accent via-purple-500 to-purple-600"
              styles="flex w-full items-center p-8 text-white text-5xl text-center"
            >
              <ClockClient />
            </Card>

            <div className="flex min-w-max gap-4">
              <Card styles="flex justify-between flex-col gap-4 p-4 bg-stone-800">
                <div className="flex items-center gap-4 text-white">
                  <Github className="text-3xl" />
                  <span>Github</span>
                </div>
                <Link
                  className="rounded-full border-2 border-white bg-white px-4 py-2 text-center text-stone-800 transition-colors duration-300 hover:border-white hover:bg-stone-800 hover:text-white"
                  href="https://github.com/arbxz"
                  target="_blank"
                  prefetch={false}
                >
                  Open me
                </Link>
              </Card>

              <Card styles="flex justify-between flex-col gap-4 p-4 bg-white">
                <div className="flex items-center gap-4 text-stone-800">
                  <Linkedin className="text-3xl" />
                  <span>Linkedin</span>
                </div>
                <Link
                  className="rounded-full border-2 border-stone-800 bg-stone-800 px-4 py-2 text-center text-white transition-colors duration-300 hover:border-stone-800 hover:bg-white hover:text-stone-800"
                  href="https://www.linkedin.com/in/arbaaz-mowlabucus-15bb17160/"
                  target="_blank"
                  prefetch={false}
                >
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
