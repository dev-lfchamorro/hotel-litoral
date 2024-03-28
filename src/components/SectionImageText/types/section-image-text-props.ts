import { ReactNode } from "react";

export type SectionImageTextProps = {
  children: ReactNode;
  className?: string;
  imageSize: "full" | "middle";
  img: string;
  sectionOrientation: "right" | "left";
  textContentOrientation: "top" | "middle" | "bottom";
};
