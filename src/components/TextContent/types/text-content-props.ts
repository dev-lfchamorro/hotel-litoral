import { ReactNode } from "react";

export type TextContentProps = {
  children: ReactNode;
  orientation: "left" | "center" | "right";
  size: "small" | "medium" | "large";
  title: string;
};
