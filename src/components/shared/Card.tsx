interface CardProps {
  children: React.ReactNode;
  background?: string;
  styles?: string;
}

const Card = ({ children, background, styles }: CardProps) => {
  return (
    <div
      className={`relative text-foreground shadow overflow-hidden rounded-3xl hover:shadow-xl transition-all duration-300 ${styles} ${ background || "bg-background" }`}>
      {children}
    </div>
  );
};

export default Card;
