import React from "react";
import { getImgNameByPath } from "../../helpers";
import Icon from "../Icon";
import { IconSize } from "../Icon/enums";
import IconChevronLeft from "./../../assets/icons/chevron-compact-left.svg";
import IconChevronRight from "./../../assets/icons/chevron-compact-right.svg";
import IconX from "./../../assets/icons/x.svg";
import "./styles.scss";
import { ImageModalProps } from "./types";

const ImageModal: React.FC<ImageModalProps> = ({
  imgUrl,
  currentImg,
  totalImg,
  onClose,
  onNext,
  onPrev,
}) => {
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const targetElement = e.target as HTMLElement;

    if (targetElement.classList.contains("image-modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="image-modal-overlay" onClick={handleClose}>
      <div className="image-modal-container">
        <Icon
          pathIcon={IconX}
          size={IconSize.xs}
          onClick={onClose}
          className="close-button"
        />

        <div className="image-modal-content">
          <img src={imgUrl} alt={getImgNameByPath(imgUrl)} />

          <div className="image-modal-buttons">
            <div className="image-modal-buttons-icons">
              <Icon
                pathIcon={IconChevronLeft}
                size={IconSize.xs}
                onClick={onPrev}
                className="icon-button"
              />

              <Icon
                pathIcon={IconChevronRight}
                size={IconSize.xs}
                onClick={onNext}
                className="icon-button"
              />
            </div>

            {currentImg && totalImg && (
              <span className="image-modal-buttons-text">
                Imagem <b>{currentImg}</b> de <b>{totalImg}</b>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
