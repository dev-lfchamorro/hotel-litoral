import React from "react";
import "./styles.scss";
import { SectionParallaxProps } from "./types";

const SectionParallax: React.FC<SectionParallaxProps> = ({ children, img }) => {
  console.log(img);
  return (
    <div
      className="section-parallax-container"
      style={{ backgroundImage: `url(${img})` }}
    >
      {children}
    </div>
  );
};

export default SectionParallax;
