import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { EColors, EMainColors } from "../../enums";
import "./styles.scss";
import { CircularProgressBarProps } from "./types";

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  endValue,
  speed,
  text,
}) => {
  const [progressStartValue, setProgressStartValue] = useState(0);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const progressValue = `${progressStartValue}%`;
  const progressEndValue = endValue;

  const circularProgressStyle = {
    background: `conic-gradient(${EMainColors.primary} ${
      progressStartValue * 3.6
    }deg, ${EColors.white} 0deg)`,
  };

  useEffect(() => {
    if (inView) {
      const progress = setInterval(() => {
        setProgressStartValue((prevValue) => {
          const nextValue = prevValue + 1;

          if (nextValue <= progressEndValue) {
            return nextValue;
          } else {
            clearInterval(progress);
            return prevValue;
          }
        });
      }, speed);

      return () => {
        clearInterval(progress);
      };
    }
  }, [speed, progressEndValue, inView]);

  return (
    <div className="circular-progress-container">
      <div
        className="circular-progress"
        ref={ref}
        style={circularProgressStyle}
      >
        <div className="circular-progress-content">
          <span className="progress-value">{progressValue}</span>
          <span className="text">{text}</span>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
