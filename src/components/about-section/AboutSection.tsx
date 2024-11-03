import Link from "next/link";

import Card from "@/components/shared/Card";
import Container from "@/components/shared/Container";

import About from "./About";

const AboutSection = () => {
  return (
    <Container>
      <div className="flex flex-wrap md:flex-nowrap w-full gap-4">
        <About />

        <Link href="/blog" className="w-full">
          <Card background="bg-arbxz-accent" styles="flex items-center h-full">
            <div className="text-center px-4 py-8 lg:p-16 w-full text-white">
              <h2 className="text-4xl lg:text-6xl font-bold">Blog.</h2>
              go to my blog.
            </div>
          </Card>
        </Link>
      </div>
    </Container>
  );
};

export default AboutSection;
