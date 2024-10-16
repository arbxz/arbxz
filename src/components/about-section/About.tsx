import Card from "@/components/shared/Card";

import ModalButton from "./ModalButton";

const About = () => {
  return (
    <Card
      background="glass"
      styles="p-4 flex text-center gap-4 flex-col justify-center items-center h-full w-full hover:bg-arbxz-accent hover:text-white transition-colors duration-300">
      <h2 className="text-4xl font-bold">Get to know me !</h2>
      <div className="text-lg leading-5">
        I&apos;m a result driven frontend engineer
      </div>
      <ModalButton buttonText={"View more"} />
    </Card>
  );
};

export default About;
