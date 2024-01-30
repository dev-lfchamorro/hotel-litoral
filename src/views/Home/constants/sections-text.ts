import { EMenuOptions } from "../../../enums/menu-options";
import { SectionText } from "../../../types";

type SectionTextMap = {
  [key in EMenuOptions]?: SectionText[];
};

export const homeSectionsText: SectionTextMap = {
  [EMenuOptions.home]: [
    {
      description:
        "Desde o 2002, oferecemos o melhor serviço possível a turistas brasileiros e estrangeiros, localizado a apenas 100 metros da praia, com excelente qualidade humana e instalações simples, mas muito confortáveis ​​e atenciosas; cuidamos para que você se sinta confortável em nosso hotel, oferecemos um excelente café da manhã, onde você pode comer confortavelmente e começar o dia com a melhor atitude.",
      title: "Hotel Litoral / Desde o 2002",
    },
    {
      description:
        "No nosso Hotel Litoral, você encontrará alguns tipos de quartos que se ajustam às suas necessidades, são quartos confortáveis ​​e totalmente adequados para fazer você se sentir em casa.",
      title: "Reserve um quarto",
    },
  ],
};
