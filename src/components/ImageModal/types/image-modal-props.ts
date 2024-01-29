export type ImageModalProps = {
  currentImg?: number;
  imgUrl: string;
  isOpen?: boolean;
  totalImg?: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};
