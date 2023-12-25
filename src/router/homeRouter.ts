import { Home } from "../screens/Home/Home";
import { TabRoute } from "./routes";

export const homeRouter = [
  {
    route: TabRoute.Home,
    showHeader: false,
    screen: Home,
    hideHiderTitle: false,
    title: "",
    index: 1,
  },
];
