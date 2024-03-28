import React from "react";
import { FixedContentProps } from "./types";

const FixedContent: React.FC<FixedContentProps> = ({
  bottom = 20,
  children,
  left,
  right = 20,
  top,
}) => {
  return (
    <div
      className="fixed-content-container"
      style={{
        bottom,
        left,
        position: "fixed",
        right,
        top,
        zIndex: 3,
      }}
    >
      {children}
    </div>
  );
};

export default FixedContent;
