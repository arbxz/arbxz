import { useTheme } from "next-themes";

interface CardProps {
  children: React.ReactNode;
  theme?: string;
  styles?: string;
  padding?: string;
  glass?: boolean;
}

const Card = ({ children, glass, styles }: CardProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <div
      className={`relative bg-background text-foreground shadow-md overflow-hidden rounded-3xl ${styles} ${
        glass ? (resolvedTheme === "dark" ? "glassBgDark" : "glassBgLight") : ""
      } `}>
      {children}
    </div>
  );
};

export default Card;