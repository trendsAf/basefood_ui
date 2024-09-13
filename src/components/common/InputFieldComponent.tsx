import React, { InputHTMLAttributes } from "react";

interface InputFieldComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputFieldComponent: React.FC<InputFieldComponentProps> = ({
  label,
  ...props
}) => (
  <div className="relative">
    {label && (
      <label className="block mb-2 absolute top-2 left-4 text-black/40 text-sm">
        {label}
      </label>
    )}
    <input className="px-4 py-3 rounded border pt-8 w-full " {...props} />
  </div>
);

export default InputFieldComponent;
