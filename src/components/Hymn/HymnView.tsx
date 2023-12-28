import { Block } from "galio-framework";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Verse } from "../../types/hymn";
import NativeText from "../Text/NativeText";
import { wp } from "../../utils/globalUtils";
import { colors } from "../../styles/colors";
import { useAppSelector } from "../../hooks/hooks";
import { FontSizes } from "../../types/settings";
export interface HymnViewProps {
  verse: Verse;
}

export const HymnView: React.FC<HymnViewProps> = ({ verse }) => {
  const { currentFont } = useAppSelector((state) => state.settingsReducer);
  return (
    <View style={hymnViewStyles.root}>
      <NativeText
        color={colors.VERSE_NUMBER}
        defaultColor={false}
        bold
        size={18}
      >
        {verse.verseNumber}
      </NativeText>
      <Block style={hymnViewStyles.verseTextContainer}>
        <NativeText
          medium={currentFont === FontSizes.Medium}
          bold={currentFont === FontSizes.Bold}
          regular={currentFont === FontSizes.Regular}
          semiBold={currentFont === FontSizes.SemiBold}
          size={17}
        >
          {verse.text}
        </NativeText>
      </Block>
    </View>
  );
};

export const hymnViewStyles = StyleSheet.create({
  root: {
    marginBottom: 50,
    marginTop: 40,
    width: wp(100),
  },
  verseTextContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    marginBottom: 10,
    marginTop: 10,
    width: wp(100),
  },
});
export default HymnView;
