import SplashScreen from "../screens/Splash/SplashScreen";
import LanguageScreen from "../screens/Welcome/LanguageScreen";
import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import { Route } from "./routes";

export const splashRouter = [
  {
    route: Route.Splash,
    showHeader: false,
    screen: SplashScreen,
    hideHiderTitle: false,
    title: "",
    index: 1,
  },
  {
    route: Route.Welcome,
    showHeader: false,
    screen: WelcomeScreen,
    hideHiderTitle: false,
    title: "",
    index: 2,
  },
  {
    route: Route.LanguageIntro,
    showHeader: false,
    screen: LanguageScreen,
    hideHiderTitle: false,
    title: "",
    index: 3,
  },
];
