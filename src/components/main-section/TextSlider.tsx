const TextSlider = () => {
  const introText = [
    "I am Arbaaz Mowlabucus",
    "a fun dev who loves implementing ",
    "modern and innovative solutions.",
  ];

  return (
    <div className="relative mainSection flex flex-col text-sm font-normal leading-4 p-4 md:p-8 rounded-3xl">
      <div>
        <div className="inline-block mb-4 border border-arbxz-accent text-sm text-arbxz-accent rounded-full px-2 py-1">
          About me ?
        </div>
      </div>

      {introText.map((text, index) => (
        <span className="self-start text-base" key={index}>
          {text}
        </span>
      ))}
    </div>
  );
};

export default TextSlider;
