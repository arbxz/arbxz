interface CardProps {
  children: React.ReactNode;
  background?: string;
  styles?: React.ComponentProps<"div">["className"];
}

const Card = ({ children, background, styles }: CardProps) => {
  return (
    <div
      className={`relative shadow overflow-hidden rounded-3xl hover:shadow-xl transition-all duration-300 ${styles} ${background || "bg-background"}`}>
      {children}
    </div>
  );
};

export default Card;
