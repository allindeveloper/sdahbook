import React from "react";
import { ScrollView, View } from "react-native";
import { commonStyles } from "../../styles/commonStyles";
import { Header } from "../../components/Header/Header";
import { useAppSelector } from "../../hooks/hooks";
import NativeText from "../../components/Text/NativeText";
import { hymnScreenStyles } from "../../styles/modules/hymnScreenStyles";
import HymnVerse from "../../components/Hymn/HymnView";
import Space from "../../components/Space/Space";

export const HymnScreen = () => {
  const { currentHymn } = useAppSelector((state) => state.hymnReducer);

  return (
    <View style={commonStyles.flexOne}>
      <Header title="English" />
      <View style={[hymnScreenStyles.root]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <NativeText bold size={25}>
            {currentHymn?.hymnNumber} - {currentHymn?.hymnTitle}
          </NativeText>
          <Space top={20} />
          <NativeText>
            {currentHymn?.verses.map((item, index) => (
              <HymnVerse key={index} verse={item} />
            ))}
          </NativeText>
        </ScrollView>
      </View>
    </View>
  );
};
