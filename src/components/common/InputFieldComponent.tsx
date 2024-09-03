import React, { InputHTMLAttributes } from "react";

interface InputFieldComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputFieldComponent: React.FC<InputFieldComponentProps> = ({
  label,
  ...props
}) => (
  <div>
    {label && <label className="block mb-2">{label}</label>}
    <input className="px-4 py-3 rounded border w-full" {...props} />
  </div>
);

export default InputFieldComponent;
