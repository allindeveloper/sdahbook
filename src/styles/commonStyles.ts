import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { appPadding } from "../constants/appConstants";

const defaultPadding = {
  paddingLeft: appPadding,
  paddingRight: appPadding,
  backgroundColor: colors.WHITE,
};
export const commonStyles = StyleSheet.create({
  root: {
    paddingLeft: appPadding,
    paddingRight: appPadding,
  },
  flexOne: {
    flex: 1,
  },
  justRoot: {
    height: "100%",
    backgroundColor: colors.WHITE,
  },
  fullRoot: {
    ...defaultPadding,
    height: "100%",
  },
  rootYellow: {
    paddingLeft: appPadding,
    paddingRight: appPadding,
    backgroundColor: colors.YELLOW,
    paddingBottom: appPadding,
  },
});
