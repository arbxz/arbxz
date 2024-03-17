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
    <div className="relative mainSection flex flex-col justify-center p-4 rounded-3xl border-4 border-dashed border-arbxz-accent">
      {introText.map((text, index) => (
        <span className="self-start highlight" key={index}>
          {text}
        </span>
      ))}
      <div className="md:text-6xl text-4xl highlight font-semibold self-start">
        <TextTransition springConfig={presets.wobbly}>
          <span>{skills[index % skills.length]}</span>
        </TextTransition>
      </div>
    </div>
  );
};

export default TextSlider;
