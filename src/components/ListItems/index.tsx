import React from "react";
import Icon from "../Icon";
import { IconSize } from "../Icon/enums";
import "./styles.scss";
import { ListItemsProps } from "./types";

const ListItems: React.FC<ListItemsProps> = ({
  description,
  isImportant,
  items,
  title,
}) => {
  const importantClassName = isImportant ? "important-content" : "";

  return (
    <div className="list-items-container">
      <span className={`list-title ${importantClassName}`}>{title}</span>

      {description && <p className="list-description">{description}</p>}

      <ul className="list-items">
        {items.map((item, idx) => (
          <li key={idx + 1}>
            {item.iconItem && (
              <Icon
                pathIcon={item.iconItem}
                size={IconSize.xs}
                brightness={1}
              />
            )}
            <span> {`${isImportant ? "-" : ""} ${item.textItem}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
