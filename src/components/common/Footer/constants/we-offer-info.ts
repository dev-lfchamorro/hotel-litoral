import IconCupHot from "../../../../assets/icons/cup-hot.svg";
import IconTv from "../../../../assets/icons/tv.svg";
import IconWifi from "../../../../assets/icons/wifi.svg";
import IconAir from "../../../../assets/img/air-50.png";
import IconBed from "../../../../assets/img/bed-50.png";
import IconCradle from "../../../../assets/img/cradle-64.png";
import IconFridge from "../../../../assets/img/fridge-64.png";
import IconGarage from "../../../../assets/img/garage-50.png";
import IconHairDryer from "../../../../assets/img/hairdryer-64.png";
import { ListItemType } from "../../../../types";

export const WeOfferInfo: ListItemType[] = [
  {
    textItem: "TV de LED com canais por assinatura",
    iconItem: IconTv,
  },
  { textItem: "WI-FI", iconItem: IconWifi },
  { textItem: "Ótimo café da manhã (incluso)", iconItem: IconCupHot },
  { textItem: "Ar-condicionado split", iconItem: IconAir },
  { textItem: "Garagem fechada - GRATUITA", iconItem: IconGarage },
  {
    textItem: "Secador de cabelo em todos os aptos",
    iconItem: IconHairDryer,
  },
  { textItem: "Berço (apenas 1)", iconItem: IconCradle },
  { textItem: "Frigobar com preços acessíveis", iconItem: IconFridge },
  { textItem: "Cama box", iconItem: IconBed },
];
