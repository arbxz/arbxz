interface TextCardProps {
  title: string;
  text: string;
}

const TextCard = ({ title, text }: TextCardProps) => {
  return (
    <div className="glass flex min-h-max flex-col rounded-3xl border-[1px] border-arbxz-accent p-8 text-sm font-normal shadow-lg transition-shadow duration-300 dark:border-stone-800 md:max-w-72 md:p-10">
      <div>
        <div className="mb-4 inline-block rounded-full bg-arbxz-accent px-4 py-1 text-sm font-medium text-white">
          {title}
        </div>
      </div>

      <p className="self-start text-xl leading-5 lg:text-base">{text}</p>
    </div>
  );
};

export default TextCard;
