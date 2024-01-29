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

    if (targetElement.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-container">
        <Icon
          pathIcon={IconX}
          size={IconSize.xs}
          onClick={onClose}
          className="close-button"
        />

        <div className="modal-content">
          <img src={imgUrl} alt={getImgNameByPath(imgUrl)} />

          <div className="modal-buttons">
            <div className="modal-buttons-wrapper">
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
              <span>
                Imagem {currentImg} de {totalImg}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
