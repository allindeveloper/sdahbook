import React from "react";
import { Image, ImageBackground, StatusBar, View } from "react-native";
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
import { welcomeScreenStyles } from "../../styles/modules/welcomeScreenStyles";
import { Block } from "galio-framework";

const WelcomeScreen = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<WelcomeStackParamList, Route.LanguageIntro>
    >();

  const onPressWelcome = () => {
    navigation.navigate(Route.LanguageIntro);
  };
  return (
    <View style={[commonStyles.flexOne]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Swiper
        dot={<View style={welcomeScreenStyles.dot} />}
        activeDot={<View style={welcomeScreenStyles.activeDot} />}
        paginationStyle={welcomeScreenStyles.pagination}
        loop={false}
      >
        <View style={splashScreenStyles.slide}>
          <ImageBackground
            style={splashScreenStyles.image}
            source={require("../../assets/images/splashimageone.webp")}
            resizeMode="cover"
          >
            <Block>
              <Image
                source={require("../../assets/images/sdahbook.png")}
                style={splashScreenStyles.logoImage}
              />
            </Block>
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
            <Block>
              <Image
                source={require("../../assets/images/sdahbook.png")}
                style={splashScreenStyles.logoImage}
              />
            </Block>
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
            <Block>
              <Image
                source={require("../../assets/images/sdahbook.png")}
                style={splashScreenStyles.logoImage}
              />
            </Block>
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
