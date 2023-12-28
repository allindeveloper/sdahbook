import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import NativeText from "../../components/Text/NativeText";
import BottomModal, {
  BottomModalProps,
} from "../../components/Modal/BottomModal";
import { Divider } from "react-native-paper";
import { appPadding } from "../../constants/appConstants";
import { colors } from "../../styles/colors";
import { FontSizes } from "../../types/settings";

interface FontsizeProps extends Omit<BottomModalProps, "children"> {
  title: string;
}
const Fontsize = ({ isVisible, hideDialog, title }: FontsizeProps) => {
  const selectOption = (font: FontSizes) => {};
  return (
    <BottomModal
      title={title}
      hideDialog={hideDialog}
      isVisible={isVisible}
      height={130}
    >
      <Divider />
      <View style={fontSizeStyles.container}>
        <TouchableHighlight
          onPress={() => selectOption(FontSizes.Small)}
          underlayColor={colors.GREY_ONE}
          style={fontSizeStyles.item}
        >
          <NativeText size={20}>Small</NativeText>
        </TouchableHighlight>

        <Divider />

        <TouchableHighlight
          onPress={() => selectOption(FontSizes.Small)}
          underlayColor={colors.GREY_ONE}
          style={fontSizeStyles.item}
        >
          <NativeText size={20}>Medium</NativeText>
        </TouchableHighlight>

        <Divider />

        <TouchableHighlight
          onPress={() => selectOption(FontSizes.Small)}
          underlayColor={colors.GREY_ONE}
          style={fontSizeStyles.item}
        >
          <NativeText size={20}>Large</NativeText>
        </TouchableHighlight>
      </View>
    </BottomModal>
  );
};
const fontSizeStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    margin: appPadding,
    borderRadius: appPadding,
  },
  item: {
    borderTopLeftRadius: appPadding,
    borderTopRightRadius: appPadding,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
export default Fontsize;
