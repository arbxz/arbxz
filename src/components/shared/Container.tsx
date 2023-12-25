interface ContainerProps {
  children: React.ReactNode;
  flexDirection?: "row" | "col";
}

const Container = ({ children, flexDirection }: ContainerProps) => {
  return (
    <div
      className={`relative flex flex-wrap justify-center items-start gap-4 ${
        flexDirection === "col" ? "flex-col" : "flex-row"
      } max-w-6xl w-full mx-auto p-4 md:px-4 py-2`}>
      {children}
    </div>
  );
};

export default Container;
