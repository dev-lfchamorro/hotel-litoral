import React from "react";
import { getImgNameByPath } from "../../helpers";
import "./styles.scss";
import { SectionImageTextProps } from "./types";

const SectionImageText: React.FC<SectionImageTextProps> = ({
  children: textContent,
  imageSize,
  img,
  sectionOrientation,
  textContentOrientation,
}) => {
  return (
    <div className={`section-image-text-container ${sectionOrientation}`}>
      <div className={`img-side-container ${sectionOrientation} ${imageSize}`}>
        <img src={img} alt={getImgNameByPath(img)} />
      </div>

      <div
        className={`text-content-side-container ${
          imageSize === "full" ? "" : sectionOrientation
        } ${textContentOrientation}`}
      >
        <div className={"text-content-side-wrapper"}>{textContent}</div>
      </div>
    </div>
  );
};

export default SectionImageText;
