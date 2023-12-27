import React from "react";
import { ImageBackground, StatusBar, View } from "react-native";
import { colors } from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";
import NativeText from "../../components/Text/NativeText";
import Swiper from "react-native-swiper";
import { splashScreenStyles } from "../../styles/modules/splashScreenStyles";
import { commonStyles } from "../../styles/commonStyles";
import AppButton from "../../components/Button/AppButton";
import { Route } from "../../router/routes";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { WelcomeStackParamList } from "../../types/welcome";

const WelcomeScreen = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<WelcomeStackParamList, Route.LanguageIntro>
    >();

  const onIndexChanged = (index: number) => {
    //
  };
  const onPressWelcome = () => {
    navigation.navigate(Route.LanguageIntro);
  };
  return (
    <View style={commonStyles.flexOne}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Swiper
        style={splashScreenStyles.wrapper}
        onIndexChanged={onIndexChanged}
        containerStyle={{
          height: "100%",
          width: "100%",
        }}
        dot={
          <View
            style={{
              backgroundColor: "rgba(255,255,255,.3)",
              width: 13,
              height: 13,
              borderRadius: 7,
              marginLeft: 7,
              marginRight: 7,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: "#fff",
              width: 13,
              height: 13,
              borderRadius: 7,
              marginLeft: 7,
              marginRight: 7,
            }}
          />
        }
        paginationStyle={{
          bottom: 80,
        }}
        loop={false}
      >
        <View style={splashScreenStyles.slide}>
          <ImageBackground
            style={splashScreenStyles.image}
            source={require("../../assets/images/splashimageone.webp")}
            resizeMode="cover"
          >
            <View style={splashScreenStyles.imageView}>
              <NativeText
                defaultColor={false}
                color={colors.WHITE}
                font="cursive"
                center
                size={60}
              >
                Let's Rejoice
              </NativeText>
            </View>
          </ImageBackground>
        </View>
        <View style={splashScreenStyles.slide}>
          <ImageBackground
            style={splashScreenStyles.image}
            source={require("../../assets/images/splashimagetwo.webp")}
            resizeMode="cover"
          >
            <View style={splashScreenStyles.imageView}>
              <NativeText
                defaultColor={false}
                color={colors.WHITE}
                center
                font="cursive"
                size={60}
              >
                Let's be Glad
              </NativeText>
            </View>
          </ImageBackground>
        </View>
        <View style={splashScreenStyles.slide}>
          <ImageBackground
            style={splashScreenStyles.image}
            source={require("../../assets/images/splashimagethree.webp")}
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
            <View style={splashScreenStyles.welcomeButton}>
              <AppButton onPress={onPressWelcome} title="Welcome" />
            </View>
          </ImageBackground>
        </View>
      </Swiper>
    </View>
  );
};

export default WelcomeScreen;
