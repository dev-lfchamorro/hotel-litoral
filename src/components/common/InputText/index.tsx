import React from "react";
import "./styles.scss";
import { InputTextProps } from "./types";

const InputText: React.FC<InputTextProps> = ({
  className,
  errorText,
  hasError,
  id,
  label,
  name,
  pattern,
  placeholder,
  readOnly = false,
  required,
  value,
  onChange,
}) => {
  return (
    <div className={`input-text-wrapper ${className || ""}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        name={name}
        pattern={pattern}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        type="text"
        value={value}
        onChange={onChange}
      />
      {hasError && <span>{errorText}</span>}
    </div>
  );
};

export default InputText;
