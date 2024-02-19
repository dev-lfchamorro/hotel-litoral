import { motion } from "framer-motion";
import React from "react";
import { getImgNameByPath } from "../../helpers";
import Button from "../Button";
import "./styles.scss";
import { RoomCardSliderProps } from "./types";

const RoomCardSlider: React.FC<RoomCardSliderProps> = ({ img, text }) => {
  return (
    <motion.div className="item">
      <img src={img} alt={getImgNameByPath(img)} />
      <Button text={text} className="button-room" />
    </motion.div>
  );
};

export default RoomCardSlider;
