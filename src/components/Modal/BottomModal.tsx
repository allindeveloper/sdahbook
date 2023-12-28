import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Modal from "react-native-modal";
import { colors } from "../../styles/colors";
import { wp } from "../../utils/globalUtils";
import NativeText from "../Text/NativeText";
import { appPadding } from "../../constants/appConstants";

export interface BottomModalProps {
  children: React.ReactNode;
  isVisible: boolean;
  hideDialog?: () => void;
  contentPadding?: number;
  title: string;
  height?: number;
}
const BottomModal = ({
  isVisible,
  children,
  contentPadding,
  title,
  hideDialog,
  height,
}: BottomModalProps) => {
  return (
    <View style={[bottomModalStyles.container]}>
      <Modal
        swipeDirection={["down"]}
        isVisible={isVisible}
        statusBarTranslucent
        collapsable
        useNativeDriverForBackdrop
        onBackdropPress={hideDialog}
        onBackButtonPress={hideDialog}
        onSwipeComplete={hideDialog}
        deviceHeight={Dimensions.get("window").height}
        style={[
          bottomModalStyles.modalStyle,
          {
            marginTop: height && wp(height),
          },
        ]}
      >
        <View
          style={[
            bottomModalStyles.innerView,
            {
              padding: contentPadding,
            },
          ]}
        >
          <View style={bottomModalStyles.title}>
            <NativeText center size={20}>
              {title}
            </NativeText>
          </View>

          {children}
        </View>
      </Modal>
    </View>
  );
};

const bottomModalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: appPadding,
    paddingRight: appPadding,
    textAlign: "center",
  },
  modalStyle: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  innerView: {
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: colors.GRAY,
  },
});

export default BottomModal;
