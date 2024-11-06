import Card from "@/components/shared/Card";

import ModalButton from "./ModalButton";

const About = () => {
  return (
    <Card
      background="glass"
      styles="group flex items-center justify-center w-full p-16 lg:p-24">
      <div className="text-center text-xl">
        <div className="relative inline-block mb-4 border border-arbxz-accent text-sm dark:text-white text-arbxz-accent rounded-3xl px-4 py-1 before:content-[''] before:h-full before:w-full before:absolute group-hover:text-white before:top-0 before:-left-40 group-hover:before:left-0 before:-z-0 overflow-hidden before:duration-700 before:transition-all before:bg-arbxz-accent">
          <span className="relative z-10">Want to know more ?</span>
        </div>

        <h2 className="text-4xl lg:text-6xl font-bold mb-4">
          skill
          <span className="animate-linear mb-20 bg-gradient-to-r from-arbxz-accent via-pink-500 to-arbxz-accent bg-[length:200%_auto] bg-clip-text font-bold text-transparent">
            set.
          </span>
        </h2>

        <div className="lg:mt-8 mt-4 mx-auto">
          <ModalButton buttonText={"open me"} />
        </div>
      </div>
    </Card>
  );
};

export default About;
