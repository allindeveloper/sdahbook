import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
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

  const handleSyncContent = () => {
    hymns.refetch();
  };

  useEffect(() => {
    if (hymns.isSuccess) {
      console.log("Successfully fetched");
      // show toast
    }
  }, [hymns]);
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
          <TouchableOpacity onPress={handleSetFontSize}>
            <Space top={20} />
            <NativeText defaultColor={false} color={colors.BLACKONE} size={18}>
              Version Code
            </NativeText>
            <Space top={4} />
            <NativeText defaultColor={false} color={colors.GREYONE} size={15}>
              {DeviceInfo.getVersion()}
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

      <Fontsize
        title="Font Size"
        hideDialog={toggleFontSizeModal}
        isVisible={showFontSizeModal}
      />
    </>
  );
};
