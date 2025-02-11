import Card from "@/components/shared/Card";

import ModalButton from "./ModalButton";

const About = () => {
  return (
    <Card
      background="glass"
      styles="group flex items-center justify-center w-full p-16 lg:p-16"
    >
      <div className="text-center text-xl">
        <div className="relative mb-4 inline-block overflow-hidden rounded-3xl border border-arbxz-accent px-4 py-1 text-sm text-arbxz-accent before:absolute before:-left-40 before:top-0 before:-z-0 before:h-full before:w-full before:bg-arbxz-accent before:transition-all before:duration-700 before:content-[''] group-hover:text-white group-hover:before:left-0 dark:text-white">
          <span className="relative z-10">Want to know more ?</span>
        </div>

        <h2 className="mb-4 text-4xl font-bold lg:text-6xl">
          skill
          <span className="animate-linear mb-20 bg-gradient-to-r from-arbxz-accent via-red-400 to-arbxz-accent bg-[length:200%_auto] bg-clip-text font-bold text-transparent">
            set.
          </span>
        </h2>

        <div className="mx-auto mt-4 lg:mt-8">
          <ModalButton buttonText={"open me"} />
        </div>
      </div>
    </Card>
  );
};

export default About;
