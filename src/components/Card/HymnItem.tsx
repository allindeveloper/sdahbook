import { Block } from "galio-framework";
import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../styles/colors";
import Space from "../Space/Space";
import NativeText from "../Text/NativeText";
import { Surface } from "react-native-paper";
import { appPadding } from "../../constants/appConstants";
export interface HymnItemProps {
  title: string;
  hymnNumber: number;
}

export const HymnItem: React.FC<HymnItemProps> = ({ title, hymnNumber }) => {
  return (
    <Block style={hymnItemStyles.root}>
      <Block left>
        <NativeText regular size={18}>
          Hymn {hymnNumber}
        </NativeText>
        <Space top={5} />
        <NativeText semiBold size={18}>
          {title}
        </NativeText>
        <Space top={10} />
      </Block>
    </Block>
  );
};

export const hymnItemStyles = StyleSheet.create({
  root: {
    margin: appPadding - 8,
    marginBottom: 5,
    paddingLeft: 16,
    borderColor: colors.GREYONE,
    borderWidth: 1,
    backgroundColor: colors.WHITE,
    borderRadius: 4,
    paddingBottom: 5,
    paddingTop: 5,
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 3,
  },
});
export default HymnItem;
