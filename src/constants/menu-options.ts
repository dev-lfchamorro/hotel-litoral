import { EMenuOptions } from "../enums";
import { MenuOptions } from "../types";
import { paths } from "./paths";

export const menuOptions: MenuOptions[] = [
  { redirect: paths.home, text: EMenuOptions.home },
  { redirect: paths.aboutUs, text: EMenuOptions.aboutUs },
  { redirect: paths.rooms, text: EMenuOptions.rooms },
  { redirect: paths.contact, text: EMenuOptions.contact },
];
