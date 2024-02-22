import React from "react";
import IncrementNumberAnimation from "../IncrementNumberAnimation";
import { AnimatedNumbersProps } from "./types";
import "./styles.scss";

const AnimatedNumbers: React.FC = () => {
  return (
    <div className="animated-numbers-container">
      <div className="content-numbers">
        <IncrementNumberAnimation
          className="number"
          endValue={23}
          speed={1500}
        />
        <span className="text">Quartos</span>
      </div>

      <div className="content-numbers">
        <IncrementNumberAnimation
          className="number"
          endValue={230}
          speed={2300}
        />
        <span className="text">Turistas este ano</span>
      </div>

      <div className="content-numbers">
        <IncrementNumberAnimation
          className="number"
          endValue={10}
          speed={2500}
        />
        <span className="text">Estacionamentos</span>
      </div>
    </div>
  );
};

export default AnimatedNumbers;
