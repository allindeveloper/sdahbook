import { SettingsScreen } from "../screens/Settings/SettingsScreen";
import { Route } from "./routes";

export const settingsRouter = [
  {
    route: Route.SettingsScreen,
    showHeader: false,
    screen: SettingsScreen,
    hideHiderTitle: false,
    title: "",
    index: 0,
  },
];
