import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import Card from "@/components/shared/Card";
import Chat from "@/components/shared/Chat";
import Container from "@/components/shared/Container";

import ClockClient from "./ClockClient";
import TextCard from "./TextCard";

const MainBanner = () => {
  return (
    <Container>
      <div className="flex flex-nowrap flex-col lg:flex-row gap-4">
        <div className="relative flex flex-col justify-center items-center gap-4 w-full z-20">
          {/* <div className="relative animate-custom-bounce w-full h-[500px] saturate-0">
            <Image
              className="animate-cat"
              width={350}
              height={350}
              src="/cats-animation/cat_logo_1.png"
              alt="cat-logo"
            />
            <Image
              className="animate-cat animate-cat-frame-1"
              width={350}
              height={350}
              src="/cats-animation/cat_logo_1.png"
              alt="cat-logo"
            />
            <Image
              className="animate-cat animate-cat-frame-2"
              width={350}
              height={350}
              src="/cats-animation/cat_logo_2.png"
              alt="cat-logo"
            />
            <Image
              className="animate-cat animate-cat-frame-3"
              width={350}
              height={350}
              src="/cats-animation/cat_logo_3.png"
              alt="cat-logo"
            />
            <Image
              className="animate-cat animate-cat-frame-4"
              width={350}
              height={350}
              src="/cats-animation/cat_logo_4.png"
              alt="cat-logo"
            />
          </div> */}

          <div className="sketchfab-embed-wrapper">
            {" "}
            <iframe
              title="Sad toaster"
              frameBorder="0"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking
              execution-while-out-of-viewport
              execution-while-not-rendered
              web-share
              width="640"
              height="480"
              src="https://sketchfab.com/models/9b158486dfa1490eb9157966321283a0/embed?autostart=1&dnt=1">
              {" "}
            </iframe>
            {/* <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
              {" "}
              <a
                href="https://sketchfab.com/3d-models/sad-toaster-9b158486dfa1490eb9157966321283a0?utm_medium=embed&utm_campaign=share-popup&utm_content=9b158486dfa1490eb9157966321283a0"
                target="_blank"
                rel="nofollow"
                style="font-weight: bold; color: #1CAAD9;">
                {" "}
                Sad toaster{" "}
              </a>{" "}
              by{" "}
              <a
                href="https://sketchfab.com/tasha.lime?utm_medium=embed&utm_campaign=share-popup&utm_content=9b158486dfa1490eb9157966321283a0"
                target="_blank"
                rel="nofollow"
                style="font-weight: bold; color: #1CAAD9;">
                {" "}
                Tasha.Lime{" "}
              </a>{" "}
              on{" "}
              <a
                href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=9b158486dfa1490eb9157966321283a0"
                target="_blank"
                rel="nofollow"
                style="font-weight: bold; color: #1CAAD9;">
                Sketchfab
              </a>
            </p> */}
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-4 items-stretch justify-stretch w-full">
            <Card
              background="animated-background bg-gradient-to-l from-arbxz-accent via-purple-500 to-purple-600"
              styles="flex w-full items-center p-8 text-white text-5xl text-center">
              <ClockClient />
            </Card>

            <div className="flex min-w-max gap-4">
              <Card styles="flex justify-between flex-col gap-4 p-4 bg-stone-800">
                <div className="flex gap-4 items-center text-white">
                  <FontAwesomeIcon className="text-3xl" icon={faGithub} />
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
                  <FontAwesomeIcon className="text-3xl" icon={faLinkedin} />
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

        <div className="flex flex-col md:flex-row gap-4 items-center justify-center z-10">
          <div className="lg:absolute lg:w-96 flex flex-col gap-4 top-0 right-0 lg:scale-90 w-full">
            <Chat message="Hello fellow visitor ! 👋" />
            <div className="ml-4">
              <Chat message="Checkout my portfolio" time="19:31" />
            </div>
            <div className="ml-8">
              <Chat message="reach out to me if need arise 😄" time="19:32" />
            </div>
          </div>

          <div className="group relative lg:absolute top-1/2 lg:-translate-y-1/2 left-0 w-full lg:w-auto">
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

          <div className="hidden lg:block lg:absolute bottom-48 right-36 animate-custom-bounce">
            <Card
              background="bg-arbxz-accent"
              styles="relative z-50 flex items-center justify-center p-8 md:w-1/2 lg:w-full h-full lg:h-1/2 dark:hover:shadow-indigo-600 hover:shadow-xl">
              <Image
                alt="arbxz-logo"
                src={"/icons/logo.png"}
                className="filter brightness-0 invert "
                width={100}
                height={100}
              />
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MainBanner;
