import Card from "@/components/shared/Card";

import ModalButton from "./ModalButton";

const About = () => {
  return (
    <Card
      background="glass"
      styles="group flex items-center justify-center w-full p-16 lg:p-32">
      <div className="text-center text-xl text-foreground">
        <div className="relative inline-block mb-4 border border-arbxz-accent text-sm text-arbxz-accent rounded-3xl px-4 py-1 before:content-[''] before:h-full before:w-full before:absolute group-hover:text-white before:top-0 before:-left-40 group-hover:before:left-0 before:-z-0 overflow-hidden before:duration-700 before:transition-all before:bg-arbxz-accent">
          <span className="relative z-10">What do I do ?</span>
        </div>

        <h2 className="text-4xl lg:text-6xl font-bold mb-4">
          Front<span className="text-arbxz-accent">end.</span>
        </h2>

        <div className="leading-5 md:max-w-96">
          I specialize in building websites and web applications in Next and
          React.
        </div>

        <div className="lg:mt-8 mt-4 mx-auto">
          <ModalButton buttonText={"View more"} />
        </div>
      </div>
    </Card>
  );
};

export default About;
