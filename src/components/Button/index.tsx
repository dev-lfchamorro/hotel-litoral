import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import "./styles.scss";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  className,
  iconPath,
  iconSize = 18,
  isLoading,
  text,
  textSize,
  onClick,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const cursorType = onClick ? "cursor-pointer" : "";

  useEffect(() => {
    if (iconPath) {
      const img = new Image();
      img.src = iconPath;
      img.onload = () => setImageLoaded(true);
    }
  }, [iconPath]);

  return (
    <button
      className={`button ${cursorType} ${className}`}
      disabled={isLoading}
      onClick={isLoading ? () => false : onClick}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {iconPath && (
            <img
              alt="Icon"
              height={imageLoaded ? iconSize : 18}
              loading="lazy"
              src={iconPath}
              style={{ filter: "brightness(0) invert(1)" }}
              width={imageLoaded ? iconSize : 18}
            />
          )}
          <span style={{ fontSize: textSize || 16 }}>{text}</span>
        </>
      )}
    </button>
  );
};

export default Button;
