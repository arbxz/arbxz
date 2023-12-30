import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "rounded-3xl py-1 px-4 w-full border-2 max-w-[100px] font-sm shadow-sm transition-colors duration-300",
  {
    variants: {
      intent: {
        primary: "bg-background hover:bg-backgroundSecondary text-foreground",
        secondary:
          "bg-foreground hover:bg-background hover:text-foreground text-background border-2 active:border-foreground",
        tertiary:
          "bg-white text-accent hover:bg-accent hover:text-white border-2 border-accent active:border-accent",
        danger:
          "bg-red text-white hover:bg-white hover:text-red border-2 border-red active:border-red",
      },
      defaultVariants: {
        intent: "primary",
      },
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  text: string;
}

export default function Button({ intent, text, ...props }: ButtonProps) {
  return (
    <button type="button" className={buttonStyles({ intent })} {...props}>
      {text}
    </button>
  );
}
