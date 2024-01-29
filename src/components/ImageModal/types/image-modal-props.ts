export type ImageModalProps = {
  currentImg?: number;
  imgUrl: string;
  totalImg?: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};
