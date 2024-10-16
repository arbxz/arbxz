"use client";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const TextSlider = () => {
  const introText = [
    "I am Arbaaz Mowlabucus",
    "a fun dev who loves implementing ",
    "modern and innovative solutions.",
    "My primary focus lies in",
  ];
  const skills = ["NextJs", "ReactJs", "SCSS", "UX", "Tailwind"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="relative mainSection flex flex-col text-sm font-normal leading-4 p-4 md:p-8 rounded-3xl">
      <div>
        <div className="inline-block mb-4 border border-arbxz-accent text-xs text-arbxz-accent rounded-full px-2 py-1">
          About me ?
        </div>
      </div>

      {introText.map((text, index) => (
        <span className="self-start" key={index}>
          {text}
        </span>
      ))}
      <div className="text-4xl font-bold mt-4 md:mt-6">
        <TextTransition springConfig={presets.wobbly}>
          <span>{skills[index % skills.length]}</span>
        </TextTransition>
      </div>
    </div>
  );
};

export default TextSlider;
