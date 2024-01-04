import { cva, VariantProps } from "class-variance-authority";

const inputStyles = cva(
  "peer focus:outline-0 invalid:border-danger w-full rounded-md border-[1px] border-foreground-shade bg-transparent px-4 py-2 focus:border-active duration-200 transition-colors",
  {
    variants: {
      intent: {
        primary: "",
        secondary:
          "bg-foreground hover:bg-background hover:text-foreground text-background border-2 active:border-foreground",
        tertiary:
          "bg-white text-accent hover:bg-accent hover:text-white border-2 border-accent active:border-accent",
        danger:
          "bg-danger text-white hover:bg-white hover:text-danger border-2 border-danger active:border-danger",
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
  value?: any;
  type: string;
  label: string;
  errorMessage?: string;
}

export default function Input({
  intent,
  id,
  value,
  name,
  type,
  label,
  errorMessage,
  ...props
}: InputProps) {
  return (
    <fieldset className="relative flex-1 w-full">
      <input
        placeholder={" "}
        id={id}
        name={name}
        type={type}
        value={value || null}
        className={inputStyles({ intent })}
        {...props}></input>
      <span className="absolute -top-[1px] left-3 h-[4px] w-auto scale-x-[0.001] peer-focus:scale-x-100 peer-[:not(:placeholder-shown)]:scale-x-100 bg-background duration-200 transition-transform">
        <span className="opacity-0">{label + "x"}</span>
      </span>
      <label
        className="absolute w-fit top-[22px] -translate-y-1/2 left-2 text-sm px-2 duration-200 transition-transform peer-focus:-translate-y-[165%] peer-invalid:text-danger peer-focus:text-active peer-[:not(:placeholder-shown)]:-translate-y-[165%] cursor-text"
        htmlFor={id}>
        {label + "."}
      </label>
      {errorMessage && (
        <p className="mt-2 invisible h-0 peer-[:not(:focus):invalid]:h-auto peer-[:not(:focus):invalid]:visible opacity-0 peer-[:not(:focus):invalid]:opacity-100 duration-300 transition-opacity text-danger text-sm">
          {errorMessage}
        </p>
      )}
    </fieldset>
  );
}
