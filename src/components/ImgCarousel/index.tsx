import { motion } from "framer-motion";
import React, { useState } from "react";
import { ReactComponent as IconInfo } from "../../assets/icons/info-circle.svg";
import { getImgNameByPath } from "../../helpers";
import { useSlider } from "../../hooks";
import ImageModal from "../ImageModal";
import { galleryImages } from "./constants";
import "./styles.scss";

const ImgCarousel: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const { carouselRef, width } = useSlider();

  const handleOpenModal = (idx: number) => {
    setSelectedImageIndex(idx);
    setIsOpenModal(true);
  };

  const handleCloseModal = () => setIsOpenModal(false);

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="img-carousel-container">
      <motion.div
        className="img-carousel-wrapper"
        ref={carouselRef}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="gallery"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.3}
        >
          {galleryImages.map((img, idx) => {
            const altAttribute = getImgNameByPath(img);

            return (
              <motion.div
                key={idx + 1}
                onDoubleClick={() => handleOpenModal(idx)}
              >
                <img
                  alt={altAttribute}
                  className="img-carousel-img"
                  loading="eager"
                  src={img}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {isOpenModal && (
          <ImageModal
            currentImg={selectedImageIndex + 1}
            imgUrl={galleryImages[selectedImageIndex]}
            isOpen={isOpenModal}
            totalImg={galleryImages.length}
            onClose={handleCloseModal}
            onNext={handleNextImage}
            onPrev={handlePrevImage}
          />
        )}
      </motion.div>

      <span className="info-text">
        <IconInfo />
        Para ampliar a imagem, clique duas vezes nela
      </span>
    </div>
  );
};

export default ImgCarousel;
