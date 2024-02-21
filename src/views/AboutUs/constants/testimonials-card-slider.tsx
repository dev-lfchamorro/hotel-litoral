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
  {
    avatar: ImgRoom1,
    country: "Brasil",
    description: "Local aconchegante, próximo da orla.",
    gender: "male",
    starRating: 4,
    title: "Estadia aconchegante e tranquila.",
    author: "Audrei",
  },
  {
    avatar: ImgRoom1,
    country: "Brasil",
    description:
      "O café da manhã é simples, mas saboroso. Funcionárias são super atenciosas. O quarto é arrumado e as roupas de banho trocadas DIARIAMENTE.",
    gender: "male",
    starRating: 5,
    title: "Valeu a pena",
    author: "Gustavo",
  },
  {
    avatar: ImgRoom1,
    country: "Brasil",
    description: "Do atendimento, da localização e do café da manhã",
    gender: "male",
    starRating: 5,
    title: "Fantástico",
    author: "Joao",
  },
  {
    avatar: ImgRoom1,
    country: "Brasil",
    description: "Tudooo",
    gender: "female",
    starRating: 5,
    title: "Excepcional",
    author: "Mascarenhasvo",
  },
  {
    avatar: ImgRoom1,
    country: "Brasil",
    description:
      "Já fiquei no Hotel Litoral outras vezes. Ótima relação custo x benefício. Hotel receptivo, perto da praia, facilidade de acesso a vários pontos da orla, equipe atenciosa, bom café da manhã, bom quarto.",
    gender: "male",
    starRating: 5,
    title: "Ótima relação custo x benefício em Aracaju",
    author: "Almerindo",
  },
  {
    avatar: ImgRoom1,
    description:
      "Da hospitalidade e proatividade em ajudar com meu filho de 4 anos.",
    gender: "male",
    starRating: 4,
    title: "Muy bien",
    author: "Lins",
  },
  {
    avatar: ImgRoom1,
    country: "Brasil",
    description: "Limpeza, café da manhã, localização, conforto das camas",
    gender: "female",
    starRating: 3,
    title: "Funcionários muitos receptivos",
    author: "Suely",
  },
  {
    avatar: ImgRoom1,
    country: "Brasil",
    description: "Custo/beneficio",
    gender: "female",
    starRating: 4,
    title: "Bom pra quem vai a trabalho",
    author: "Walace",
  },
];

export const testimonialCardSlider: ReactNode[] = testimonialsCardContent.map(
  (
    { author, avatar, country, description, gender, starRating, title },
    idx
  ) => (
    <TestimonialCard
      author={author}
      avatar={avatar}
      country={country}
      description={description}
      gender={gender}
      key={idx}
      starRating={starRating}
      title={title}
    />
  )
);
