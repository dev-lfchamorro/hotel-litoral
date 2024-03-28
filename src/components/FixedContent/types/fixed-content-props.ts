import { ReactNode } from "react";

export type FixedContentProps = {
  bottom?: number;
  children: ReactNode;
  left?: number;
  right?: number;
  top?: number;
};
