import { paths } from "../constants/paths";

export type RoutesConfig = {
  path: (typeof paths)[keyof typeof paths];
  component: React.ComponentType<any>;
  exact?: boolean;
};
