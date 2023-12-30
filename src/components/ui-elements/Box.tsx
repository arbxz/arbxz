interface BoxProps {
  children: React.ReactNode;
}

const Box = ({ children }: BoxProps) => {
  return (
    <div className="relative p-4 bg-background shadow rounded-2xl">
      {children}
    </div>
  );
};

export default Box;
