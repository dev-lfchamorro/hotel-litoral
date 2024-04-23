import { EMenuOptions } from "../enums";
import { SectionText } from "./section-text";

export type SectionContentMap = {
  [key in EMenuOptions]?: SectionText[];
};
