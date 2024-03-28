import { ReactElement } from "react";

export type TestimonialCardProps = {
  author: string;
  avatar: string | ReactElement;
  country?: string;
  description?: string;
  gender?: "female" | "male";
  starRating: number;
  title: string;
};
