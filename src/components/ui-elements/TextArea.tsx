interface InputProps {
  id: string;
  name: string;
  label: string;
  errorMessage?: string;
}

export default function TextArea({
  id,
  name,
  label,
  errorMessage,
  ...props
}: InputProps) {
  return (
    <fieldset className="relative w-full flex-1">
      <textarea
        placeholder={" "}
        id={id}
        name={name}
        className="peer w-full rounded-md border-[1px] border-foreground-shade bg-transparent px-4 py-2 transition-colors duration-200 invalid:border-danger focus:border-active focus:outline-0"
        {...props}
      />
      <span className="absolute -top-[1px] left-3 h-[4px] w-auto scale-x-[0.001] bg-background transition-transform duration-200 peer-focus:scale-x-100 peer-[:not(:placeholder-shown)]:scale-x-100">
        <span className="opacity-0">{label + "x"}</span>
      </span>
      <label
        className="absolute left-2 top-[22px] w-fit -translate-y-1/2 cursor-text px-2 text-sm transition-transform duration-200 peer-invalid:text-danger peer-focus:-translate-y-[165%] peer-focus:text-active peer-[:not(:placeholder-shown)]:-translate-y-[165%]"
        htmlFor={id}
      >
        {label + "."}
      </label>
      {errorMessage && (
        <p className="invisible mt-2 h-0 text-sm text-danger opacity-0 transition-opacity duration-300 peer-[:not(:focus):invalid]:visible peer-[:not(:focus):invalid]:h-auto peer-[:not(:focus):invalid]:opacity-100">
          {errorMessage}
        </p>
      )}
    </fieldset>
  );
}
