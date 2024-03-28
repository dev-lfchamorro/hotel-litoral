import React from "react";
import "./styles.scss";
import { TextareaProps } from "./types";

const TextArea: React.FC<TextareaProps> = ({
  className,
  cols = 30,
  errorText,
  hasError,
  id,
  label,
  name,
  placeholder,
  readOnly = false,
  required,
  rows = 10,
  value,
  onChange,
}) => {
  return (
    <div className={`textarea-wrapper ${className || ""}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        cols={cols}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        rows={rows}
        value={value}
      ></textarea>
      {hasError && <span>{errorText}</span>}
    </div>
  );
};

export default TextArea;
