interface BoxProps {
  children: React.ReactNode;
}

const Box = ({ children }: BoxProps) => {
  return (
    <div className="relative w-full p-4 bg-background shadow rounded-2xl glass">
      {children}
    </div>
  );
};

export default Box;
