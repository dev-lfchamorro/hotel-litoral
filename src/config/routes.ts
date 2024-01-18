import { lazy } from "react";
import { RoutesConfig } from "../types";
import { paths } from "../constants";

const Home = lazy(() => import("../views/Home"));

export const routes: RoutesConfig[] = [
  {
    path: paths.home,
    component: Home,
  },
];
