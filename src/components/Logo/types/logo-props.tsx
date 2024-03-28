import { LogoFontSize } from "../enums";

export type LogoProps = {
  className?: string;
  hasPrimaryColors?: boolean;
  fontSize: LogoFontSize;
  primaryText?: string;
  secondaryText?: string;
  slogan: string;
};
