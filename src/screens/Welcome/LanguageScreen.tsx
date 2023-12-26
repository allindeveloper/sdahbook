import React, { useState } from "react";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import { colors } from "../../styles/colors";
import NativeText from "../../components/Text/NativeText";
import { commonStyles } from "../../styles/commonStyles";
import { languageScreenStyles } from "../../styles/modules/languageScreenStyles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Route } from "../../router/routes";
import { LanguageStackParamList } from "../../types/language";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageKeys } from "../../constants/storagekeys";

const LanguageScreen = () => {
  const [selectedLanguage, setselectedLanguage] = useState("");
  const navigation =
    useNavigation<
      NativeStackNavigationProp<LanguageStackParamList, Route.TabNavigator>
    >();
  const handleSetLanguage = async (language: string) => {
    setselectedLanguage(language);
    await AsyncStorage.setItem(StorageKeys.IsFirstTime, "1");
    navigation.navigate(Route.TabNavigator);
  };
  return (
    <ImageBackground
      style={commonStyles.flexOne}
      source={require("../../assets/images/guitar.webp")}
    >
      <View style={commonStyles.root}>
        <View style={languageScreenStyles.languageView}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleSetLanguage("english")}
            style={[
              languageScreenStyles.languageItem,
              selectedLanguage === "english" &&
                languageScreenStyles.languageItemSelected,
            ]}
          >
            <NativeText bold size={35} center font="cursive">
              English
            </NativeText>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleSetLanguage("igbo")}
            style={[
              languageScreenStyles.languageItem,
              selectedLanguage === "igbo" &&
                languageScreenStyles.languageItemSelected,
            ]}
          >
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
