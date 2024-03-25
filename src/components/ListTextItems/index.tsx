import React from "react";
import "./styles.scss";
import { ListTextItemsProps } from "./types";

const ListTextItems: React.FC<ListTextItemsProps> = ({ listItems }) => {
  return (
    <ul className="list-text-items-container">
      {listItems.map((item, idx) => (
        <li key={idx + 1}>
          <span className="title">{item.title}</span>
          {item.value}
        </li>
      ))}
    </ul>
  );
};

export default ListTextItems;
