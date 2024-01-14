interface CardProps {
  children: React.ReactNode;
  background?: string;
  styles?: string;
}

const Card = ({ children, background, styles }: CardProps) => {
  return (
    <div
      className={`relative text-foreground shadow-sm overflow-hidden rounded-3xl ${styles} ${
        background ||
        "bg-background hover:scale-[1.02] transition-transform duration-300"
      }`}>
      {children}
    </div>
  );
};

export default Card;
