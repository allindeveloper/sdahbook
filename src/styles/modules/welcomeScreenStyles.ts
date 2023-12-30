import { StyleSheet } from "react-native";
import { colors } from "../colors";

export const welcomeScreenStyles = StyleSheet.create({
  dot: {
    backgroundColor: "rgba(255,255,255,.3)",
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7,
  },
  activeDot: {
    backgroundColor: colors.WHITE,
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7,
  },
  pagination: {
    bottom: 80,
  },
});
