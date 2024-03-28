import { ReactComponent as IconBeachBed } from "../../../assets/icons/beach-bed.svg";
import { ReactComponent as IconBed } from "../../../assets/icons/bed.svg";
import { ReactComponent as IconHotel } from "../../../assets/icons/hotel.svg";
import { FeatureProps } from "../../../components/Feature/types";

export const features: FeatureProps[] = [
  {
    description:
      "Espaço, conforto e tranquilidade que oferecemos aos nossos clientes, você pode ter certeza de que no Hotel Litoral você aproveitará ao máximo sua estadia em Aracaju.",
    icon: IconHotel,
    title: "Espaço, conforto e tranquilidade",
  },
  {
    description:
      "Camas confortáveis, TV, ar condicionado, secador de cabelo, frigobar e WIFI estão à sua disposição.",
    icon: IconBed,
    title: "Acomodação",
  },
  {
    description:
      "O Hotel Litoral fica muito perto da orla de Aracaju. Você pode chegar à praia em apenas 5 minutos a pé. Além disso, você pode aproveitar seu fim de semana curtindo os shows de música ao vivo encontrados ao longo da costa.",
    icon: IconBeachBed,
    title: "Localização",
  },
];
