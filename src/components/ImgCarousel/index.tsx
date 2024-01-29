import React from "react";
import { getImgNameByPath } from "../../helpers";
import { galleryImages } from "./constants";
import "./styles.scss";

const ImgCarousel: React.FC = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-wrapper">
        <div className="gallery">
          {galleryImages.map((img, idx) => {
            const altAttribute = getImgNameByPath(img);

            return (
              <img src={img} alt={altAttribute} loading="eager" key={idx + 1} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImgCarousel;
