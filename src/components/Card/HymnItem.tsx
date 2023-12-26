import { Block } from "galio-framework";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../../styles/colors";
import Space from "../Space/Space";
import NativeText from "../Text/NativeText";
import { Surface } from "react-native-paper";
import { appPadding } from "../../constants/appConstants";
import { HymnBook } from "../../types/hymn";
export interface HymnItemProps {
  title: string;
  hymnNumber: string;
  handleClick: (item: HymnBook) => void;
  item: HymnBook;
}

export const HymnItem: React.FC<HymnItemProps> = ({
  title,
  item,
  hymnNumber,
  handleClick,
}) => {
  return (
    <TouchableOpacity
      onPress={() => handleClick(item)}
      style={hymnItemStyles.root}
    >
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
    </TouchableOpacity>
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
