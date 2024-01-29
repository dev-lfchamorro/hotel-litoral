import React, { useState } from "react";
import { getImgNameByPath } from "../../helpers";
import ImageModal from "../ImageModal";
import { galleryImages } from "./constants";
import "./styles.scss";

const ImgCarousel: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleOpenModal = (idx: number) => {
    setSelectedImageIndex(idx);
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

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
    <div className="gallery-container">
      <div className="gallery-wrapper">
        <div className="gallery">
          {galleryImages.map((img, idx) => {
            const altAttribute = getImgNameByPath(img);

            return (
              <img
                alt={altAttribute}
                className="gallery-img"
                key={idx + 1}
                loading="eager"
                src={img}
                onClick={() => handleOpenModal(idx)}
              />
            );
          })}

          {isOpenModal && (
            <ImageModal
              imgUrl={galleryImages[selectedImageIndex]}
              currentImg={selectedImageIndex + 1}
              totalImg={galleryImages.length}
              onClose={handleCloseModal}
              onNext={handleNextImage}
              onPrev={handlePrevImage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImgCarousel;
