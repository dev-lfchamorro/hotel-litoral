import { motion } from "framer-motion";
import React from "react";
import ImgRoom1 from "../../assets/img/gallery/room-1.jpeg";
import ImgRoom2 from "../../assets/img/gallery/room-2.jpeg";
import ImgRoom3 from "../../assets/img/gallery/room-3.jpeg";
import ImgRoom4 from "../../assets/img/gallery/room-4.jpeg";
import ImgRoom5 from "../../assets/img/gallery/room-5.jpeg";
import { getImgNameByPath } from "../../helpers";
import { useSlider } from "../../hooks";
import Button from "../Button";
import "./styles.scss";

const images = [ImgRoom1, ImgRoom2, ImgRoom3, ImgRoom4, ImgRoom5];

const Slider: React.FC = () => {
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
        {images.map((img, idx) => (
          <motion.div className="item" key={idx}>
            <img src={img} alt={getImgNameByPath(img)} />
            <Button text="Apto. Single" className="button-room" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
