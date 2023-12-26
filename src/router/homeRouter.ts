import { Home } from "../screens/Home/Home";
import { HymnScreen } from "../screens/Hymn/HymnScreen";
import { Route, TabRoute } from "./routes";

export const homeRouter = [
  {
    route: TabRoute.Home,
    showHeader: false,
    screen: Home,
    hideHiderTitle: false,
    title: "",
    index: 1,
  },
  {
    route: Route.HymnScreen,
    showHeader: false,
    screen: HymnScreen,
    hideHiderTitle: false,
    title: "",
    index: 1,
  },
];
