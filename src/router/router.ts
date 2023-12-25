import SplashNavigator from "../containers/SplashNavigator";
import { TabNavigator } from "../containers/TabNavigator";
import { Router } from "../types/router";
import { Route } from "./routes";

export const router: Router[] = [
  {
    route: Route.SplashNavigator,
    screen: SplashNavigator,
    showHeader: false,
    hideHiderTitle: true,
    title: "",
    index: 0,
  },
  {
    route: Route.TabNavigator,
    screen: TabNavigator,
    showHeader: false,
    hideHiderTitle: true,
    title: "",
    index: 1,
  },
];
