import React, { useCallback, useEffect } from "react";
import {
  Platform,
  StatusBar,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { Modal } from "react-native-paper";
import { appPadding } from "../../constants/appConstants";

export interface FullModalProps {
  hideModal: () => void;
  children: React.ReactNode;
  visible: boolean;
  height?: number;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
}
const FullModal = ({
  hideModal,
  style,
  contentStyle,
  visible,
  children,
  height,
}: FullModalProps) => {
  useEffect(
    useCallback(() => {
      StatusBar.setBarStyle("light-content");
      Platform.OS === "android" && StatusBar.setBackgroundColor("transparent");
      StatusBar.setTranslucent(true);
    }, []),
  );
  return (
    <>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        style={style}
        contentContainerStyle={[fullModalStyles.container, contentStyle]}
      >
        {children}
      </Modal>
    </>
  );
};

const fullModalStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: appPadding,
    flex: 1,
  },
});

export default FullModal;
