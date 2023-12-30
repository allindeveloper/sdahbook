import React, { useState } from "react";
import { Linking, ScrollView, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header/Header";
import NativeText from "../../components/Text/NativeText";
import { settingsScreenStyles } from "../../styles/modules/settingsScreenStyles";
import { colors } from "../../styles/colors";
import { Divider } from "react-native-paper";
import Space from "../../components/Space/Space";
import Fontsize from "../../modules/preferences/Fontsize";
import { useAppSelector } from "../../hooks/hooks";
import { capitalizeString } from "../../utils/stringUtils";
import DeviceInfo from "react-native-device-info";
import useHymns from "../../hooks/useHymns";
import useToast from "../../hooks/useAppToast";
import { Block } from "galio-framework";
import { ToastPosition, toast } from "@backpackapp-io/react-native-toast";
import NetInfo from "@react-native-community/netinfo";

export const SettingsScreen = () => {
  const { dispatchToast } = useToast();
  const { hymns } = useHymns();
  const [showFontSizeModal, setshowFontSizeModal] = useState(false);

  const { currentFont } = useAppSelector((state) => state.settingsReducer);

  const handleSetFontSize = () => {
    toggleFontSizeModal();
  };

  const toggleFontSizeModal = () => {
    setshowFontSizeModal(!showFontSizeModal);
  };

  const handleSyncContent = async () => {
    const netInfoState = await NetInfo.fetch();
    if (!netInfoState.isConnected) {
      dispatchToast({
        message: "Please check your network.",
      });
      return;
    }
    toast.promise(
      hymns.refetch(),
      {
        loading: "Hymn syncing..",
        success: (data) => `Successfully synced`,
        error: (err) => `Could not sync`,
      },
      {
        position: ToastPosition.BOTTOM,
        duration: 2000,
      },
    );
  };

  const handleOpenProfile = () => {
    const url = "https://github.com/allindeveloper";
    Linking.openURL(url);
  };

  return (
    <>
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
              {capitalizeString(currentFont)}
            </NativeText>
          </TouchableOpacity>
        </View>
        <Divider />
        <TouchableOpacity
          style={[settingsScreenStyles.listItem]}
          onPress={handleSyncContent}
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
          <Block>
            <Space top={20} />
            <NativeText defaultColor={false} color={colors.BLACKONE} size={18}>
              Version Code
            </NativeText>
            <Space top={4} />
            <NativeText defaultColor={false} color={colors.GREYONE} size={15}>
              {DeviceInfo.getVersion()}
            </NativeText>
          </Block>
        </View>
        <Divider />
        <TouchableOpacity
          style={[settingsScreenStyles.listItem]}
          onPress={handleOpenProfile}
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
      </ScrollView>

      <Fontsize
        title="Font Size"
        hideDialog={toggleFontSizeModal}
        isVisible={showFontSizeModal}
      />
    </>
  );
};
