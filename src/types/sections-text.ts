import { EMenuOptions } from "../enums";
import { SectionText } from "./section-text";

export type SectionTextMap = {
  [key in EMenuOptions]?: SectionText[];
};
