import { motion } from "framer-motion";
import React from "react";
import { useSlider } from "../../hooks";
import "./styles.scss";
import { SliderProps } from "./types";

const Slider: React.FC<SliderProps> = ({ children }) => {
  const { carouselRef, width } = useSlider();

  return (
    <motion.div
      className="slider-container"
      ref={carouselRef}
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className="slider"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        dragElastic={0.3}
      >
        {children.map((element) => element)}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
