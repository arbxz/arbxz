interface TextCardProps {
  title: string;
  text: string;
}

const TextCard = ({ title, text }: TextCardProps) => {
  return (
    <div className="flex flex-col rounded-3xl border-[1px] border-arbxz-accent bg-background bg-opacity-60 p-8 text-sm font-normal shadow-lg transition-shadow duration-300 dark:border-stone-800 md:max-w-72 md:p-10">
      <div>
        <div className="mb-4 inline-block rounded-full border border-arbxz-accent px-4 py-1 text-sm font-medium text-arbxz-accent">
          {title}
        </div>
      </div>

      <p className="self-start text-xl leading-5 lg:text-base">{text}</p>
    </div>
  );
};

export default TextCard;
