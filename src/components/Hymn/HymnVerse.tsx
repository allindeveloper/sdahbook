import { Block } from "galio-framework";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../../styles/colors";
import { appPadding } from "../../constants/appConstants";
import { HymnBook, Verse } from "../../types/hymn";
import NativeText from "../Text/NativeText";
import { wp } from "../../utils/globalUtils";
export interface HymnVerseProps {
  verse: Verse;
}

export const HymnVerse: React.FC<HymnVerseProps> = ({ verse }) => {
  return (
    <View style={hymnVerseStyles.root}>
      <NativeText bold size={18}>
        {verse.verseNumber}
      </NativeText>
      <Block style={hymnVerseStyles.verseTextContainer}>
        <NativeText medium size={17}>
          {verse.text}
        </NativeText>
      </Block>
    </View>
  );
};

export const hymnVerseStyles = StyleSheet.create({
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
  },
});
export default HymnVerse;
