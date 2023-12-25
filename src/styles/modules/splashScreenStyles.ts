import { Dimensions, StyleSheet } from "react-native";
import { wp } from "../../utils/globalUtils";
import { heightPercentageToDP } from "react-native-responsive-screen";
const { width, height } = Dimensions.get("window");

export const splashScreenStyles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  slide: {
    flex: 1,
    backgroundColor: "transparent",
  },
  container: {
    flex: 1,
  },

  imgBackground: {
    width,
    height,
    backgroundColor: "transparent",
    position: "absolute",
  },

  image: {
    width,
    height,
  },
  imageView: {
    position: "absolute",
    bottom: 150,
    width: wp(100),
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  welcomeButton: {
    position: "absolute",
    bottom: heightPercentageToDP(3),
    width: wp(100),
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
