import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  flexDirection?: 'row' | 'col';
}

const Container = ({ children, flexDirection }: ContainerProps) => {
  return (
    <div
      className={`relative mx-auto flex w-full max-w-5xl flex-wrap items-start justify-center gap-4 p-4 py-2 md:px-4 xl:max-w-6xl ${
        flexDirection === 'col' ? 'flex-col' : 'flex-row'
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
