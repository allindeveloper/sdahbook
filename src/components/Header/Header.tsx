import React from "react";
import { Animated, StatusBar, StyleSheet, View } from "react-native";

import { Appbar } from "react-native-paper";
import { colors } from "../../styles/colors";
import NativeText from "../Text/NativeText";

type HeaderProps = {
  title: string;
};

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.pageHeaderRoot}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.PRIMARY_BOLD}
      />

      <Appbar.Header style={[styles.pageHeader]}>
        <NativeText size={36} defaultColor={false} bold color={colors.WHITE}>
          {title}
        </NativeText>
      </Appbar.Header>
    </View>
  );
};
const styles = StyleSheet.create({
  pageHeaderRoot: {
    shadowColor: colors.BLACKONE,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 10,
    borderBottomRightRadius: 40,
    backgroundColor: colors.WHITE,
    marginBottom: 10,
  },
  pageHeader: {
    marginLeft: 5,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: colors.PRIMARY,
    borderBottomRightRadius: 40,
  },
});
