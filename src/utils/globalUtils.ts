import { Dimensions, Platform } from "react-native";

const { width: viewportWidth } = Dimensions.get("window");
export const IS_ANDROID = Platform.OS === "android";
export const IS_IOS = Platform.OS === "ios";
export const wp = (percentage: number) => {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
};
