import Link from "next/link";

import Card from "@/components/shared/Card";
import Container from "@/components/shared/Container";

import About from "./About";

const AboutSection = () => {
  return (
    <Container>
      <div className="grid w-full grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1">
        <Link href="/blog" className="w-full">
          <Card
            background="animated-background bg-gradient-to-tr from-arbxz-accent via-red-600 to-arbxz-accent duration-500"
            styles="flex items-center h-full"
          >
            <div className="w-full px-4 py-8 text-center text-white lg:p-8">
              <h2 className="text-4xl font-bold lg:text-6xl">blog.</h2>
              go to my blog.
            </div>
          </Card>
        </Link>

        <About />
      </div>
    </Container>
  );
};

export default AboutSection;
