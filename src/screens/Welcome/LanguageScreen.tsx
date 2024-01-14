import React from "react";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import { colors } from "../../styles/colors";
import NativeText from "../../components/Text/NativeText";
import { commonStyles } from "../../styles/commonStyles";
import { languageScreenStyles } from "../../styles/modules/languageScreenStyles";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Route } from "../../router/routes";
import { LanguageStackParamList } from "../../types/language";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageKeys } from "../../constants/storagekeys";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setLanguage } from "../../redux/reducers/settingsReducer";
import { Language } from "../../constants/locale";

const LanguageScreen = () => {
  const { language } = useAppSelector((state) => state.settingsReducer);
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<
      NativeStackNavigationProp<LanguageStackParamList, Route.TabNavigator>
    >();
  const handleSetLanguage = async (language: Language) => {
    dispatch(setLanguage(language));
    await AsyncStorage.setItem(StorageKeys.IsFirstTime, "1");
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: Route.TabNavigator }],
      }),
    );
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
            onPress={() => handleSetLanguage(Language.English)}
            style={[
              languageScreenStyles.languageItem,
              language === Language.English &&
                languageScreenStyles.languageItemSelected,
            ]}
          >
            <NativeText bold size={35} center font="cursive">
              English
            </NativeText>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleSetLanguage(Language.Igbo)}
            style={[
              languageScreenStyles.languageItem,
              language === Language.Igbo &&
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
