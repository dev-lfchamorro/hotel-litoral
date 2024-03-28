import { ListItemType } from "../../../types";

export type ListItemsProps = {
  className?: string;
  description?: string;
  isImportant?: boolean;
  items: ListItemType[];
  title?: string;
};
