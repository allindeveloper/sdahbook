import React from "react";
import { View } from "react-native";
import useHymns from "../../hooks/useHymns";
import { FlashList } from "@shopify/flash-list";
import { HymnBook } from "../../types/hymn";
import HymnItem from "../../components/Card/HymnItem";
import { commonStyles } from "../../styles/commonStyles";
import { Header } from "../../components/Header/Header";
import { homeScreenStyles } from "../../styles/modules/homeScreenStyles";

export const Home = () => {
  const { hymns } = useHymns();

  const renderItem = React.useCallback(
    ({ item }: { item: HymnBook }) => (
      <HymnItem title={item.hymnTitle} hymnNumber={item.hymnNumber} />
    ),
    [],
  );
  return (
    <View style={commonStyles.flexOne}>
      <Header title="English" />
      <View style={[homeScreenStyles.list]}>
        <FlashList
          data={hymns.data}
          renderItem={renderItem}
          estimatedItemSize={200}
        />
      </View>
    </View>
  );
};
