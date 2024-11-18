interface TextCardProps {
  title: string;
  text: string;
}

const TextCard = ({ title, text }: TextCardProps) => {
  return (
    <div
      className="md:max-w-72 min-h-max flex flex-col text-sm font-normal p-8 md:p-10 rounded-3xl border dark:border-stone-800 glass shadow-lg transition-shadow duration-300
    ">
      <div>
        <div className="inline-block mb-4 text-sm text-white bg-arbxz-accent font-medium rounded-full px-4 py-1">
          {title}
        </div>
      </div>

      <p className="self-start text-xl lg:text-base leading-5">{text}</p>
    </div>
  );
};

export default TextCard;
