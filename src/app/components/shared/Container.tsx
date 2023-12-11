interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex justify-center items-start gap-4 flex-col max-w-6xl w-full mx-auto p-4 md:p-8">
      {children}
    </div>
  );
};

export default Container;
