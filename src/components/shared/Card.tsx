import React from "react";

interface CardProps {
  children: React.ReactNode;
  background?: string;
  styles?: React.ComponentProps<"div">["className"];
}

const Card = ({ children, background, styles }: CardProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl shadow transition-all duration-300 hover:shadow-xl ${styles} ${background || "bg-background"}`}
    >
      {children}
    </div>
  );
};

export default Card;
