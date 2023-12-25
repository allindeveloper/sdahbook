import { Block } from "galio-framework";
import React, { FC } from "react";
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import NativeText from "../Text/NativeText";
import { colors } from "../../styles/colors";
import { Button } from "react-native-paper";

const Touchable = (
  Platform.OS === "ios" ? TouchableOpacity : TouchableNativeFeedback
) as React.ElementType;

interface AppButtonProps {
  title?: string;
  capitalize?: boolean;
  backgroundColor?: string;
  disabled?: boolean;
  textStyle?: React.CSSProperties | {};
  style?: React.CSSProperties | {};
  loading?: boolean;
  onPress?: () => void;
  icon?: JSX.Element;
  fontSize?: number;
  children?: React.ReactNode;
}
const AppButton: FC<AppButtonProps> = (props) => {
  const {
    title,
    onPress,
    capitalize,
    disabled = false,
    textStyle = {},
    icon,
    fontSize,
  } = props;
  return (
    <Button
      mode="contained"
      elevation={5}
      buttonColor={colors.PRIMARY}
      disabled={disabled}
      textColor={colors.WHITE}
      style={styles.button}
      onPress={onPress}
      contentStyle={styles.contentStyle}
    >
      <NativeText
        size={fontSize}
        defaultColor={false}
        style={[
          textStyle,
          {
            color: colors.WHITE,
          },
          capitalize && styles.capitalize,
        ]}
      >
        {title}
      </NativeText>
    </Button>
  );
};

const styles = StyleSheet.create({
  loading: {
    marginRight: 5,
  },
  contentStyle: {
    padding: 10,
  },
  button: {
    borderRadius: 0,
  },
  capitalize: {
    textTransform: "uppercase",
  },
  outline: {
    borderWidth: 1,
    overflow: "hidden",
    backgroundColor: colors.WHITE,
    borderColor: colors.GREY,
  },
});

export default AppButton;
