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
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className={`input-text-wrapper ${className || ""}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className="input-field"
        id={id}
        name={name}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={onChange}
      />
      {hasError && <span>{errorText}</span>}
    </div>
  );
};

export default InputText;
