import { StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../colors";
import { appPadding } from "../../constants/appConstants";

export const searchDialogStyles = StyleSheet.create({
  root: {
    height: 500,
    marginTop: heightPercentageToDP(20),
    paddingTop: 0,
  },
  content: {
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 30,
  },
  eachNumber: {
    backgroundColor: colors.GRAY,
    height: 70,
    borderRadius: 50,
    width: 70,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  eachNumberDisabled: {
    backgroundColor: colors.DISABLED,
  },
  go: {
    backgroundColor: colors.PRIMARY,
    height: 70,
    borderRadius: 50,
    width: 70,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    position: "absolute",
    right: -100,
  },
  searchQuery: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    position: "relative",
  },
  searchQueryText: {
    alignContent: "center",
    alignItems: "center",
  },
  backSpace: {
    backgroundColor: colors.GRAY,
    padding: 10,
    borderRadius: 4,
    position: "absolute",
    right: appPadding + 25,
  },
  listTop: {
    marginTop: 100,
  },
});
