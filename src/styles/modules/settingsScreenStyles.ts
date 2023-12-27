import { StyleSheet } from "react-native";
import { appPadding } from "../../constants/appConstants";

export const settingsScreenStyles = StyleSheet.create({
  root: {
    padding: appPadding
  },
  listItem: {
    paddingTop: appPadding,
    paddingBottom: appPadding,
    paddingLeft: appPadding,
  },
  listTop: {
    marginTop: 100,
  },
});
