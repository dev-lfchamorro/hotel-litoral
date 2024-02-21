import { ReactNode } from "react";
import ImgRoom1 from "../../../assets/img/gallery/room-1.jpeg";
import TestimonialCard from "../../../components/TestimonialCard";
import { TestimonialCardProps } from "../../../components/TestimonialCard/types";

const testimonialsCardContent: TestimonialCardProps[] = [
  {
    avatar: ImgRoom1,
    country: "Chile",
    description:
      "Es limpio y cómodo, buena relación precio calidad. Camas y ahmohadas comodas.",
    gender: "female",
    starRating: 3,
    title: "Fantástico",
    author: "Maria",
  },
];

export const testimonialCardSlider: ReactNode[] = testimonialsCardContent.map(
  (
    { avatar, title, starRating, author, country, description, gender },
    idx
  ) => (
    <TestimonialCard
      avatar={avatar}
      country={country}
      description={description}
      gender={gender}
      key={idx}
      starRating={starRating}
      title={title}
      author={author}
    />
  )
);
