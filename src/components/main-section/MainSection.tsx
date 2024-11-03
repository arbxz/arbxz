import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import Card from "@/components/shared/Card";
import Chat from "@/components/shared/Chat";
import Container from "@/components/shared/Container";

import ClockClient from "./ClockClient";
import TextSlider from "./TextSlider";

const MainBanner = () => {
  return (
    <Container>
      <div className="flex flex-nowrap flex-col lg:flex-row gap-4">
        <div className="relative flex flex-col justify-center items-center gap-4 w-full z-20">
          <div className="relative animate-custom-bounce w-full h-[500px] saturate-0">
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
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-4 items-stretch justify-stretch w-full">
            <Card
              background="bg-arbxz-accent"
              styles="flex w-full items-center p-8 text-white text-5xl text-center">
              <ClockClient />
            </Card>

            <div className="flex min-w-max gap-4">
              <Card styles="flex justify-between flex-col gap-4 p-4 bg-foreground">
                <div className="flex gap-4 items-center text-background">
                  <FontAwesomeIcon className="text-3xl" icon={faGithub} />
                  <span>Github</span>
                </div>
                <Link
                  className="text-foreground bg-background px-4 py-2 rounded-full text-center border-2 border-white transition-colors duration-300 hover:border-background hover:text-background hover:bg-foreground"
                  href="https://github.com/arbxz"
                  target="_blank"
                  prefetch={false}>
                  Open me
                </Link>
              </Card>

              <Card styles="flex justify-between flex-col gap-4 p-4">
                <div className="flex gap-4 items-center">
                  <FontAwesomeIcon className="text-3xl" icon={faLinkedin} />
                  <span>Linkedin</span>
                </div>
                <Link
                  className="text-background bg-foreground px-4 py-2 rounded-full text-center border-2 border-foreground transition-colors duration-300 hover:border-foreground hover:text-foreground hover:bg-background"
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

          <div className="lg:absolute top-1/2 lg:-translate-y-1/2 left-0 w-full lg:w-auto">
            <TextSlider />
          </div>

          <div className="hidden lg:block lg:absolute bottom-48 right-36 animate-custom-bounce">
            <Card
              background="bg-arbxz-accent"
              styles="flex items-center justify-center p-8 md:w-1/2 lg:w-full h-full lg:h-1/2">
              <Image
                alt="arbxz-logo"
                src={"/icons/logo.png"}
                className="filter brightness-0 invert "
                width={100}
                height={100}
              />
            </Card>
          </div>

          {/* <div className="lg:absolute bottom-48 right-0 h-full lg:h-auto">
            <Card
              background="glass"
              styles="flex flex-1 items-center justify-center p-8 h-full">
              <div className="text-foreground text-xl">
                Crafting Digital Experiences, <br />
                One Line of Code at a Time.
                <FontAwesomeIcon
                  className="text-3xl ml-2"
                  icon={faQuoteRight}
                />
              </div>
            </Card>
          </div> */}
        </div>
      </div>
    </Container>
  );
};

export default MainBanner;
