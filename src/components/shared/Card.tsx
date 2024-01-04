interface CardProps {
  children: React.ReactNode;
  theme?: string;
  styles?: string;
  padding?: string;
  glass?: boolean;
}

const Card = ({ children, glass, styles }: CardProps) => {
  return (
    <div
      className={`relative text-foreground shadow-sm overflow-hidden rounded-3xl ${styles} ${
        glass ? "glass" : "bg-background"
      }`}>
      {children}
    </div>
  );
};

export default Card;
