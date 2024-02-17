import { ReactNode } from "react";

export type TextContentProps = {
  children: ReactNode;
  className?: string;
  orientation: "left" | "center" | "right";
  size: "small" | "medium" | "large";
  title: string;
};
