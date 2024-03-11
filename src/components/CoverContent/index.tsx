import React from "react";
import "./styles.scss";
import { CoverContentProps } from "./types";

const CoverContent: React.FC<CoverContentProps> = ({ bgImg, children }) => {
  return (
    <div className="cover-content-container">
      <div className="image">
        <div
          className="cover-bg-image"
          style={{ backgroundImage: `url(${bgImg})` }}
        />
      </div>
      {children}
    </div>
  );
};

export default CoverContent;
