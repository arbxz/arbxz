const TextSlider = () => {
  const introText = [
    "I am Arbaaz Mowlabucus",
    "a fun dev who loves implementing ",
    "modern and innovative solutions.",
  ];

  return (
    <div
      className="flex flex-col text-sm font-normal p-8 md:p-10 rounded-3xl bg-glass border-[1px] border-stone-200 dark:glass hover:shadow-lg transition-shadow duration-300
    ">
      <div>
        <span className="inline-block mb-4 text-sm text-white bg-blue-500 font-medium rounded-full px-4 py-1">
          About me ?
        </span>
      </div>

      {introText.map((text, index) => (
        <p className="self-start text-xl lg:text-base leading-5" key={index}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default TextSlider;
