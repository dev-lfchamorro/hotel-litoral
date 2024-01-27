import { IconSize } from "../enums";

export type IconProps = {
  brightness?: 0 | 1;
  className?: string;
  pathIcon: string;
  size: IconSize;
  text?: string;
  onClick?: () => void;
};
