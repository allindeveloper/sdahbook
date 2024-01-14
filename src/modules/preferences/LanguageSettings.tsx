import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import NativeText from "../../components/Text/NativeText";
import BottomModal, {
  BottomModalProps,
} from "../../components/Modal/BottomModal";
import { Divider } from "react-native-paper";
import { appPadding } from "../../constants/appConstants";
import { colors } from "../../styles/colors";
import { useAppDispatch } from "../../hooks/hooks";
import { setLanguage } from "../../redux/reducers/settingsReducer";
import { Language } from "../../constants/locale";

interface FontsizeProps extends Omit<BottomModalProps, "children"> {
  title: string;
}
const LanguageSettings = ({ isVisible, hideDialog, title }: FontsizeProps) => {
  const dispatch = useAppDispatch();
  const selectOption = (language: Language) => {
    dispatch(setLanguage(language));
    setTimeout(() => {
      hideDialog?.();
    }, 0);
  };
  return (
    <BottomModal
      title={title}
      hideDialog={hideDialog}
      isVisible={isVisible}
      height={150}
    >
      <Divider />
      <View style={languageSettingsStyles.container}>
        <TouchableHighlight
          onPress={() => selectOption(Language.English)}
          underlayColor={colors.GREY_ONE}
          style={languageSettingsStyles.item}
        >
          <NativeText size={18}>English</NativeText>
        </TouchableHighlight>

        <Divider />

        <TouchableHighlight
          onPress={() => selectOption(Language.Igbo)}
          underlayColor={colors.GREY_ONE}
          style={languageSettingsStyles.lastItem}
        >
          <NativeText size={18}>Igbo</NativeText>
        </TouchableHighlight>
      </View>
    </BottomModal>
  );
};
const languageSettingsStyles = StyleSheet.create({
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
  lastItem: {
    borderBottomLeftRadius: appPadding,
    borderBottomRightRadius: appPadding,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
export default LanguageSettings;
