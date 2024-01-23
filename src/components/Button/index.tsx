import React from "react";
import "./styles.scss";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ iconPath, text, onClick }) => {
  const cursorType = onClick ? "cursor-pointer" : "";

  return (
    <button className={`button ${cursorType}`} onClick={onClick}>
      {iconPath && (
        <img
          src={iconPath}
          alt="Icon"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      )}
      {text}
    </button>
  );
};

export default Button;
