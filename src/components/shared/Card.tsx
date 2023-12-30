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
      className={`relative bg-background text-foreground shadow-sm overflow-hidden rounded-3xl ${styles} ${
        glass && "glassBg"
      }`}>
      {children}
    </div>
  );
};

export default Card;
