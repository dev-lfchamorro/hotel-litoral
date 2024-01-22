import { LogoFontSize } from "../enums";

export type LogoProps = {
  hasPrimaryColors?: boolean;
  fontSize: LogoFontSize;
  primaryText?: string;
  secondaryText?: string;
  slogan: string;
};
