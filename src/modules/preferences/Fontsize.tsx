import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import NativeText from "../../components/Text/NativeText";
import BottomModal, {
  BottomModalProps,
} from "../../components/Modal/BottomModal";
import { Divider } from "react-native-paper";
import { appPadding } from "../../constants/appConstants";
import { colors } from "../../styles/colors";
import { FontSizes } from "../../types/settings";
import { useAppDispatch } from "../../hooks/hooks";
import { setCurrentFont } from "../../redux/reducers/settingsReducer";

interface FontsizeProps extends Omit<BottomModalProps, "children"> {
  title: string;
}
const Fontsize = ({ isVisible, hideDialog, title }: FontsizeProps) => {
  const dispatch = useAppDispatch();
  const selectOption = (font: FontSizes) => {
    dispatch(setCurrentFont(font));
    setTimeout(() => {
      hideDialog?.();
    }, 0);
  };
  return (
    <BottomModal
      title={title}
      hideDialog={hideDialog}
      isVisible={isVisible}
      height={135}
    >
      <Divider />
      <View style={fontSizeStyles.container}>
        <TouchableHighlight
          onPress={() => selectOption(FontSizes.Regular)}
          underlayColor={colors.GREY_ONE}
          style={fontSizeStyles.item}
        >
          <NativeText size={18}>Regular</NativeText>
        </TouchableHighlight>

        <Divider />

        <TouchableHighlight
          onPress={() => selectOption(FontSizes.Medium)}
          underlayColor={colors.GREY_ONE}
          style={fontSizeStyles.middleItem}
        >
          <NativeText size={18}>Medium</NativeText>
        </TouchableHighlight>

        <Divider />

        <TouchableHighlight
          onPress={() => selectOption(FontSizes.Bold)}
          underlayColor={colors.GREY_ONE}
          style={fontSizeStyles.lastItem}
        >
          <NativeText size={18}>Bold</NativeText>
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
  middleItem: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  lastItem: {
    borderBottomLeftRadius: appPadding,
    borderBottomRightRadius: appPadding,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
export default Fontsize;
