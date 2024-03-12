import IconCupHotFill from "../assets/icons/cup-hot-fill.svg";
import IconShower from "../assets/img/icons/shower-50.png";
import IconTv from "../assets/icons/tv.svg";
import IconWifi from "../assets/icons/wifi.svg";
import IconAir from "../assets/img/icons/air-50.png";
import IconBed from "../assets/img/icons/bed-50.png";
import IconFridge from "../assets/img/icons/fridge-64.png";
import IconHairDryer from "../assets/img/icons/hairdryer-64.png";
import { ListItemType } from "../types";

export const listItemsForRoomCardBody: ListItemType[] = [
  { textItem: "Camas box de casal", iconItem: IconBed },
  { textItem: "TV LED com canais a cabo", iconItem: IconTv },
  { textItem: "Ar condicionado SPLIT", iconItem: IconAir },
  { textItem: "Secador de cabelo", iconItem: IconHairDryer },
  { textItem: "Frigobar", iconItem: IconFridge },
  { textItem: "Wi-Fi", iconItem: IconWifi },
];

export const listItemsForRoomCardFooter: string[] = [
  IconCupHotFill,
  IconShower,
];
