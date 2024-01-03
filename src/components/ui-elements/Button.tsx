"use client";

import { cva, VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

const buttonStyles = cva(
  "rounded-full py-2 px-4 w-full border-2 min-w-[125px] max-w-[150px] font-sm shadow transition-colors duration-300 border-2 focus:ring",
  {
    variants: {
      intent: {
        primary:
          "bg-background hover:bg-foreground text-foreground hover:text-background",
        secondary:
          "bg-active hover:bg-background hover:text-active text-white active:border-foreground",
        tertiary:
          "bg-success hover:bg-background hover:text-success text-white active:border-foreground",
        danger:
          "bg-danger text-white hover:bg-white hover:text-danger border-danger active:border-danger",
      },
      defaultVariants: {
        intent: "primary",
      },
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  text: string;
  // action: () => void;
}

export default function Button({
  intent,
  text,
  // action,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      type="button"
      className={buttonStyles({ intent })}
      {...props}
      whileTap={{ scale: 0.95 }}
      // onClick={action}
    >
      {text}
    </motion.button>
  );
}
