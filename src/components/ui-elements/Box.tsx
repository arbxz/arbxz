import React from "react";

interface BoxProps {
  children: React.ReactNode;
}

const Box = ({ children }: BoxProps) => {
  return (
    <div className="glass relative w-full rounded-2xl bg-background p-4 shadow">
      {children}
    </div>
  );
};

export default Box;
