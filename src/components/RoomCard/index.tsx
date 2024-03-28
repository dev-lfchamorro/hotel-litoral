import React from "react";
import {
  listItemsForRoomCardBody,
  listItemsForRoomCardFooter,
} from "../../constants";
import { getImgNameByPath } from "../../helpers/get-img-name-by-path";
import ListItems from "../ListItems";
import "./styles.scss";
import { RoomCardProps } from "./types";

const RoomCard: React.FC<RoomCardProps> = ({ image, title }) => {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="card-body">
        <ListItems
          className="card-body-list-items"
          items={listItemsForRoomCardBody}
          title={title}
        />
      </div>

      <div className="card-footer">
        {listItemsForRoomCardFooter.map((icon, idx) => (
          <img
            alt={getImgNameByPath(icon)}
            key={idx + 1}
            src={icon}
            width={16}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomCard;
