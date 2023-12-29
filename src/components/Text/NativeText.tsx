import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../styles/colors";

export interface NativeTextProps {
  children?: React.ReactNode | React.ReactNode[] | undefined;
  size?: TextStyle["fontSize"];
  fontWeight?: TextStyle["fontWeight"];
  textTransform?: TextStyle["textTransform"];
  bold?: boolean;
  color?: string;
  style?: StyleProp<TextStyle>;
  defaultColor?: boolean;
  regular?: boolean;
  medium?: boolean;
  semiBold?: boolean;
  center?: boolean;
  customWidth?: boolean;
  width?: number;
  maxWidth?: number;
  font?: "default" | "cursive";
  marginRight?: number;
}
const NativeText = ({
  style,
  center,
  children,
  size = 14,
  bold,
  regular,
  semiBold,
  defaultColor = true,
  color,
  customWidth = false,
  width = 50,
  maxWidth = 50,
  font,
  marginRight,
  textTransform,
  medium,
}: NativeTextProps) => {
  return (
    <Text
      allowFontScaling
      adjustsFontSizeToFit
      style={[
        style,
        font === "cursive"
          ? cursiveStyles.regularText
          : bold
          ? defaulStyles.boldText
          : regular
          ? defaulStyles.regularText
          : semiBold
          ? defaulStyles.semiBoldText
          : medium
          ? defaulStyles.mediumText
          : null,
        {
          textTransform,
          marginRight: marginRight,
          color: defaultColor ? colors.BLACKONE : color,
          fontSize: size,
          textAlign: center ? "center" : "auto",
          width: customWidth ? width : "auto",
          maxWidth: customWidth ? widthPercentageToDP(maxWidth) : "auto",
          height: customWidth ? 20 : "auto",
        },
      ]}
    >
      {children}
    </Text>
  );
};

const cursiveStyles = StyleSheet.create({
  regularText: {
    fontFamily: "GreatVibes-Regular",
  },
});

const defaulStyles = StyleSheet.create({
  regularText: {
    fontFamily: "Montserrat-Regular",
  },
  mediumText: {
    fontFamily: "Montserrat-Medium",
  },
  boldText: {
    fontFamily: "Montserrat-Bold",
    fontWeight: "700",
  },
  semiBoldText: {
    fontFamily: "Montserrat-SemiBold",
    fontWeight: "600",
  },
  slashText: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
});

export default NativeText;
