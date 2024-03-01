import React from "react";
import "./styles.scss";

const CircularProgressBar: React.FC = () => {
  let circularProgress = document.querySelector(".circular-progress") as any,
    progressValue = document.querySelector(".progress-value");

  let progressStartValue = 0,
    progressEndValue = 83,
    speed = 40;

  let progress = setInterval(() => {
    progressStartValue++;

    if (progressValue && circularProgress) {
      progressValue.textContent = `${progressStartValue}%`;
      circularProgress.style.background = `conic-gradient(#f0ff ${
        progressStartValue * 3.6
      }deg, #ededed 0deg)`;
    }

    if (progressStartValue === progressEndValue) {
      clearInterval(progress);
    }
    console.log(progressStartValue);
  }, speed);

  return (
    <div className="container">
      <div className="circular-progress">
        <span className="progress-value">0%</span>
      </div>

      <span className="text">HTML & CSS</span>
    </div>
  );
};

export default CircularProgressBar;
