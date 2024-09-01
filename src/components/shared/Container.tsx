interface ContainerProps {
  children: React.ReactNode;
  flexDirection?: "row" | "col";
}

const Container = ({ children, flexDirection }: ContainerProps) => {
  return (
    <div
      className={`relative flex flex-wrap justify-center items-start gap-4 max-w-5xl w-full p-4 md:px-4 py-2 mx-auto ${
        flexDirection === "col" ? "flex-col" : "flex-row"
      }`}>
      {children}
    </div>
  );
};

export default Container;
