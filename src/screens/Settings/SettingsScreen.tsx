import React, { useCallback } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import useHymns from "../../hooks/useHymns";
import { FlashList } from "@shopify/flash-list";
import { HymnBook, HymnScreenStackParamList } from "../../types/hymn";
import HymnItem from "../../components/Card/HymnItem";
import { commonStyles } from "../../styles/commonStyles";
import { Header } from "../../components/Header/Header";
import { homeScreenStyles } from "../../styles/modules/homeScreenStyles";
import { Route } from "../../router/routes";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { saveCurrentHymn } from "../../redux/reducers/hymnReducer";
import { useAppDispatch } from "../../hooks/hooks";
import NativeText from "../../components/Text/NativeText";
import { settingsScreenStyles } from "../../styles/modules/settingsScreenStyles";
import { colors } from "../../styles/colors";
import { Divider } from "react-native-paper";
import Space from "../../components/Space/Space";

export const SettingsScreen = () => {
  const { offlineHymn } = useHymns();
  const dispatch = useAppDispatch();

  const navigation =
    useNavigation<
      NativeStackNavigationProp<HymnScreenStackParamList, Route.HymnScreen>
    >();

  const handleSetFontSize = () => {
    //
  };
  return (
    <View style={commonStyles.flexOne}>
      <Header title="Settings" />
      <ScrollView>
        <View style={[settingsScreenStyles.root]}>
          <NativeText
            textTransform="uppercase"
            defaultColor={false}
            color={colors.ORANGE}
          >
            Preferences
          </NativeText>
          <TouchableOpacity onPress={handleSetFontSize}>
            <Space top={20} />
            <NativeText defaultColor={false} color={colors.BLACKONE} size={18}>
              Hymn Font Size
            </NativeText>
            <Space top={4} />
            <NativeText defaultColor={false} color={colors.GREYONE} size={15}>
              Large
            </NativeText>
          </TouchableOpacity>
        </View>
        <Divider />
        <TouchableOpacity
          style={[settingsScreenStyles.listItem]}
          onPress={handleSetFontSize}
        >
          <NativeText defaultColor={false} color={colors.BLACK} size={18}>
            Sync Hymn Content
          </NativeText>
          <Space top={4} />
          <NativeText defaultColor={false} color={colors.GREYONE} size={15}>
            Synced on {new Date().getFullYear()}
          </NativeText>
        </TouchableOpacity>
        <Divider />
        <View style={[settingsScreenStyles.root]}>
          <NativeText
            textTransform="uppercase"
            defaultColor={false}
            color={colors.ORANGE}
          >
            APP INFORMATION
          </NativeText>
          <TouchableOpacity onPress={handleSetFontSize}>
            <Space top={20} />
            <NativeText defaultColor={false} color={colors.BLACKONE} size={18}>
              Version Code
            </NativeText>
            <Space top={4} />
            <NativeText defaultColor={false} color={colors.GREYONE} size={15}>
              1.0.1
            </NativeText>
          </TouchableOpacity>
        </View>
        <Divider />
        <TouchableOpacity
          style={[settingsScreenStyles.listItem]}
          onPress={handleSetFontSize}
        >
          <NativeText defaultColor={false} color={colors.BLACK} size={18}>
            Developer
          </NativeText>
          <Space top={4} />
          <NativeText defaultColor={false} color={colors.GREYONE} size={15}>
            allindeveloper
          </NativeText>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity
          style={[settingsScreenStyles.listItem]}
          onPress={handleSetFontSize}
        >
          <NativeText defaultColor={false} color={colors.BLACK} size={18}>
            Donate to
          </NativeText>
          <Space top={4} />
          <NativeText defaultColor={false} color={colors.GREYONE} size={15}>
            Help support future work!
          </NativeText>
        </TouchableOpacity>
        <Divider />
      </ScrollView>
    </View>
  );
};
