import { EMenuOptions } from "../enums";
import { SectionText } from "./section-text";

type SectionTextMap = {
  [key in EMenuOptions]?: SectionText[];
};

export const SectionsText: SectionTextMap = {
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
  [EMenuOptions.aboutUs]: [
    {
      description:
        "A 100 m da ORLA, em sua parte central, proxime da Passarela do Caranguejo e das Feiras de Artesanatos; o Hotel Litoral oferece aos seus hóspedes o conforto e tranquilidade para passar as ferias do seus sonhos.",
      title: "Hotel Litoral",
    },
    {
      description:
        "Oferecemos quartos totalmente confortáveis, você pode ter a total tranquilidade de se hospedar em um hotel localizado em excelente localização e muito próximo da praia, além de ter a vantagem de estar perto da Orla, então seus planos de fim de semana, eles serão realmente variado.",
      title: "Alojamento",
    },
    {
      description:
        "Desfrute do conforto de um hotel aconchegante próximo a qualquer atividade noturna ou matinal, como você preferir, pois estamos localizados no centro da Orla de Atalaya, um lugar privilegiado para relaxar na praia a apenas 5 minutos e cercar-se dos melhores bares na cidade para curtir uma noite de música ao vivo e excelente ambiente.",
      title: "Lugar ideal",
    },
  ],
  [EMenuOptions.rooms]: [
    {
      description:
        "Os 23 quartos do Hotel Litoral foram projetados para descansar. Neles você pode desfrutar de um espaço adequado para a sua viagem e curtir a praia, pois está em uma excelente localização. Da mesma forma, nossos serviços são projetados para tornar a sua estadia muito mais agradável e divertida.",
      title: "Reserve um quarto",
    },
  ],
};
