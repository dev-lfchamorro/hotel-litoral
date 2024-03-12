import React from "react";
import IconCupHotFill from "../../assets/icons/cup-hot-fill.svg";
import IconTv from "../../assets/icons/tv.svg";
import IconWifi from "../../assets/icons/wifi.svg";
import IconAir from "../../assets/img/icons/air-50.png";
import IconBed from "../../assets/img/icons/bed-50.png";
import IconFridge from "../../assets/img/icons/fridge-64.png";
import IconHairDryer from "../../assets/img/icons/hairdryer-64.png";
import IconShower from "../../assets/img/icons/shower-50.png";
import { ListItemType } from "../../types";
import ListItems from "../ListItems";
import "./styles.scss";
import { RoomCardProps } from "./types";

const data: ListItemType[] = [
  { textItem: "Camas box de casal", iconItem: IconBed },
  { textItem: "TV LED com canais a cabo", iconItem: IconTv },
  { textItem: "Ar condicionado SPLIT", iconItem: IconAir },
  { textItem: "Secador de cabelo", iconItem: IconHairDryer },
  { textItem: "Frigobar", iconItem: IconFridge },
  { textItem: "Wi-Fi", iconItem: IconWifi },
];

const RoomCard: React.FC<RoomCardProps> = ({ image }) => {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="card-body">
        <ListItems
          className="card-body-list-items"
          items={data}
          title="Apto. Single"
        />
      </div>

      <div className="card-footer">
        <img src={IconShower} alt="IconShower" width={16} />
        <img src={IconCupHotFill} alt="IconCupHot" width={16} />
      </div>
    </div>
  );
};

export default RoomCard;
