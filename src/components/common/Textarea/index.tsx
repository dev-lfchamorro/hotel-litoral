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
  required,
  rows = 10,
  readOnly = false,
  value,
  onChange,
}) => {
  return (
    <div className={`textarea-wrapper ${className || ""}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        className="textarea-field"
        cols={cols}
        id={id}
        readOnly={readOnly}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        value={value}
        required={required}
      ></textarea>
      {hasError && <span>{errorText}</span>}
    </div>
  );
};

export default TextArea;
