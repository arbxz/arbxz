import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import Card from "@/components/shared/Card";
import Container from "@/components/shared/Container";

import ClockClient from "./ClockClient";
import TextSlider from "./TextSlider";

const MainBanner = () => {
  return (
    <Container>
      <div className="flex flex-nowrap flex-col lg:flex-row gap-4">
        <div className="flex flex-col md:flex-row lg:flex-col gap-4 text-center lg:w-1/3">
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

          <Card
            background="glass"
            styles="flex flex-1 items-center justify-center p-8 h-full">
            <div className="text-foreground text-2xl">
              Crafting Digital Experiences, One Line of Code at a Time.
              <FontAwesomeIcon className="text-4xl" icon={faQuoteRight} />
            </div>
          </Card>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <Card
            background="glass"
            styles="flex items-center justify-center w-full h-full overflow-hidden">
            <div className="w-auto py-8 md:py-8 lg:py-14">
              <div className="relative mb-8 px-4 flex flex-col gap-4 items-center">
                <div className="flex justify-end items-end text-center">
                  <h1 className="text-4xl md:text-5xl font-bold">
                    Frontend Engineer. <br />
                    <div className="inline-block animate-bounce py-4">🤖</div>
                    <div className="inline-block animate-bounce delay-100 py-4">
                      🚀
                    </div>
                    <div className="inline-block animate-bounce delay-300 py-4">
                      🔨
                    </div>
                  </h1>
                </div>
                <TextSlider />
              </div>
            </div>
          </Card>

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
      </div>
    </Container>
  );
};

export default MainBanner;
