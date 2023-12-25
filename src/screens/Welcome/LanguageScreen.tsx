import React from "react";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import { colors } from "../../styles/colors";
import NativeText from "../../components/Text/NativeText";
import { splashScreenStyles } from "../../styles/modules/splashScreenStyles";
import { commonStyles } from "../../styles/commonStyles";
import { languageScreenStyles } from "../../styles/modules/languageScreenStyles";

const LanguageScreen = () => {
  return (
    <ImageBackground
      style={commonStyles.flexOne}
      source={require("../../assets/images/guitar.webp")}
    >
      <View style={commonStyles.root}>
        <View style={languageScreenStyles.languageView}>
          <TouchableOpacity style={languageScreenStyles.languageItem}>
            <NativeText bold size={35} center font="cursive">
              English
            </NativeText>
          </TouchableOpacity>
          <TouchableOpacity style={languageScreenStyles.languageItem}>
            <NativeText size={35} center font="cursive">
              Igbo
            </NativeText>
          </TouchableOpacity>
        </View>
      </View>
      <View style={languageScreenStyles.bottomItem}>
        <NativeText center defaultColor={false} color={colors.WHITE}>
          SELECT YOUR PREFERRED LANGUAGE
        </NativeText>
      </View>
    </ImageBackground>
  );
};

export default LanguageScreen;
