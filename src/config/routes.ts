import { lazy } from "react";
import { paths } from "../constants";
import { RoutesConfig } from "../types";

const AboutUs = lazy(() => import("../views/AboutUs"));
const Contact = lazy(() => import("../views/Contact"));
const Home = lazy(() => import("../views/Home"));
const Rooms = lazy(() => import("../views/Rooms"));

export const routes: RoutesConfig[] = [
  {
    path: paths.home,
    component: Home,
  },
  {
    path: paths.aboutUs,
    component: AboutUs,
  },
  {
    path: paths.rooms,
    component: Rooms,
  },
  {
    path: paths.contact,
    component: Contact,
  },
  {
    path: paths.notFound,
    component: Home,
  },
];
