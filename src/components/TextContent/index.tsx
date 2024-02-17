import React from "react";
import "./styles.scss";
import { TextContentProps } from "./types";

const TextContent: React.FC<TextContentProps> = ({
  children,
  className,
  orientation,
  size,
  title,
}) => {
  return (
    <div className={`text-content-container ${orientation} ${className}`}>
      <h1 className={`text-content-title ${size}`}>{title}</h1>
      <div className={`text-content-children ${orientation}`}>{children}</div>
    </div>
  );
};

export default TextContent;
