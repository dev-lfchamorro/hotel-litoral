import { ReactNode } from "react";

export type SectionImageTextProps = {
  children: ReactNode;
  imageSize: "full" | "middle";
  img: string;
  sectionOrientation: "right" | "left";
  textContentOrientation: "top" | "middle" | "bottom";
};
