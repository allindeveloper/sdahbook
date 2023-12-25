import { StyleSheet } from "react-native";
import { wp } from "../../utils/globalUtils";
import { colors } from "../colors";

export const languageScreenStyles = StyleSheet.create({
  imageView: {
    position: "absolute",
    bottom: 150,
    width: wp(100),
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  languageItem: {
    backgroundColor: colors.PRIMARY,
    width: wp(70),
    marginBottom: 20,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 30,
    padding: 20,
    borderColor: colors.TRANSPARENT,
    borderWidth: 1,
    borderStyle: "solid",
  },
  languageItemSelected: {
    borderColor: colors.BLACKONE,
    borderWidth: 1,
    borderStyle: "solid",
  },
  languageView: {
    marginTop: wp(50),
  },
  bottomItem: {
    position: "absolute",
    bottom: 20,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
