import { ListItemType } from "../../../types";

export type ListItemsProps = {
  description?: string;
  isImportant?: boolean;
  items: ListItemType[];
  title?: string;
};
