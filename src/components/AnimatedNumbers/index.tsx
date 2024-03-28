import React from "react";
import IncrementNumberAnimation from "../IncrementNumberAnimation";
import "./styles.scss";
import { AnimatedNumbersProps } from "./types";

const AnimatedNumbers: React.FC<{ content: AnimatedNumbersProps[] }> = ({
  content,
}) => {
  return (
    <div className="animated-numbers-container">
      {content.map(({ text, endValue, speed, sizeContent }, idx) => (
        <div className="content-numbers" key={idx + 1}>
          <IncrementNumberAnimation
            className={`number ${sizeContent || "medium"}`}
            endValue={endValue}
            speed={speed || 1500}
          />
          <span className="text">{text}</span>
        </div>
      ))}
    </div>
  );
};

export default AnimatedNumbers;
