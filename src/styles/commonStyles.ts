import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { appPadding } from "../constants/appConstants";
import { heightPercentageToDP } from "react-native-responsive-screen";

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
    flexGrow: 1,
    backgroundColor: colors.WHITE,
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
