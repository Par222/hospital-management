function Input(props) {
  return (
    <div className={props?.divClassName || "space-y-2 flex flex-col text-sm"}>
      {props?.label && (
        <label
          htmlFor={props?.input.id}
          className={props?.labelClassName || "font-normal text-tertiarygrey-400 font-title text-base"}
        >
          {props?.label}{props?.input?.required && <span className="text-tertiaryred-50">*</span>}
        </label>
      )}
      <input
        {...props?.input}
        className={props?.inputClassName || "bg-tertiarywhite-100 border border-tertiarygrey-350 focus:outline-none rounded-lg w-full p-2.5"}
      />
      {props?.extra}
    </div>
  );
}

export default Input;
