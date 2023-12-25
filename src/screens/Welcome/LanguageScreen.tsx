import React from "react";
import { ImageBackground, View } from "react-native";
import { colors } from "../../styles/colors";
import NativeText from "../../components/Text/NativeText";
import { splashScreenStyles } from "../../styles/modules/splashScreenStyles";
import { commonStyles } from "../../styles/commonStyles";

const LanguageScreen = () => {
  return (
    <ImageBackground
      style={commonStyles.flexOne}
      source={require("../../assets/images/guitar.webp")}
    >
      <View style={splashScreenStyles.imageView}>
        <NativeText
          defaultColor={false}
          color={colors.WHITE}
          font="cursive"
          center
          size={60}
        >
          Sing Praises
        </NativeText>
      </View>
    </ImageBackground>
  );
};

export default LanguageScreen;
