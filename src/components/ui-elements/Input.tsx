import { cva, VariantProps } from "class-variance-authority";

const inputStyles = cva(
  "rounded-md border-2 border-foreground bg-background px-4 py-2",
  {
    variants: {
      intent: {
        primary: "",
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

interface InputProps extends VariantProps<typeof inputStyles> {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder?: string;
}

export default function Button({
  intent,
  id,
  name,
  type,
  label,
  placeholder,
  ...props
}: InputProps) {
  return (
    <div className="relative flex-1">
      <label
        className="absolute -top-3 left-2 text-sm px-2 bg-background"
        htmlFor={id}>
        {label}
      </label>
      <input
        placeholder={placeholder || ""}
        id={id}
        name={name}
        type={type}
        className={inputStyles({ intent })}
        {...props}></input>
    </div>
  );
}
