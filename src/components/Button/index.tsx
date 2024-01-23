import React from "react";
import "./styles.scss";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ iconPath, text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {iconPath && <img src={iconPath} alt="Icon" />}
      {text}
    </button>
  );
};

export default Button;
