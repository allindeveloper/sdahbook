import { StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../colors";

export const searchDialogStyles = StyleSheet.create({
  root: {
    height: 500,
    marginTop: heightPercentageToDP(20),
    paddingTop: 0,
  },
  content: {
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 30
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
  searchQuery: {
    marginBottom: 20
  },
  listTop: {
    marginTop: 100,
  },
});
