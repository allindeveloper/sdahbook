import React from "react";
import { StyleSheet } from "react-native";
import { Modal } from "react-native-paper";
import { appPadding } from "../../constants/appConstants";

export interface FullModalProps {
  hideModal: () => void;
  children: React.ReactNode;
  visible: boolean;
}
const FullModal = ({ hideModal, visible, children }: FullModalProps) => {
  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={fullModalStyles.container}
    >
      {children}
    </Modal>
  );
};

const fullModalStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    margin: appPadding,
    zIndex: 9105,
  },
});

export default FullModal;
