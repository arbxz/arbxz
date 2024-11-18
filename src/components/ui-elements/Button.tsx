"use client";

import { cva, VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { Icon, IconNode } from "lucide-react";

const buttonStyles = cva(
  "flex gap-4 items-center justify-center rounded-full py-2 px-4 w-full border-2 min-w-[125px] max-w-[150px] font-sm shadow transition-colors duration-300 border-2 focus:ring",
  {
    variants: {
      intent: {
        primary:
          "bg-background hover:bg-foreground text-foreground hover:text-background",
        secondary:
          "bg-form-active hover:bg-background hover:text-form-active text-white active:border-foreground",
        tertiary:
          "bg-success hover:bg-transparent hover:text-success text-white active:border-foreground",
        danger:
          "bg-danger text-white hover:bg-transparent hover:text-danger border-danger active:border-danger",
      },
      defaultVariants: {
        intent: "primary",
      },
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  text: string;
  Icon?: React.ReactNode;
}

export default function Button({ intent, text, Icon, ...props }: ButtonProps) {
  return (
    <motion.button
      type="button"
      className={buttonStyles({ intent })}
      {...props}
      whileTap={{ scale: 0.95 }}
    >
      {Icon && Icon }
      {text}
    </motion.button>
  );
}
