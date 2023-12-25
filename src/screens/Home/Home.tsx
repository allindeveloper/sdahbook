import React, { useEffect } from "react";
import { View } from "react-native";
import useHymns from "../../hooks/useHymns";
import { FlashList } from "@shopify/flash-list";
import { HymnBook } from "../../types/hymn";
import HymnItem from "../../components/Card/HymnItem";
import { commonStyles } from "../../styles/commonStyles";

export const Home = () => {
  const { hymns } = useHymns();

  useEffect(() => {
    console.log("hymns", hymns);
  }, []);

  const renderItem = React.useCallback(
    ({ item }: { item: HymnBook }) => (
      <HymnItem title={item.hymnTitle} hymnNumber={item.hymnNumber} />
    ),
    [],
  );
  return (
    <View style={commonStyles.flexOne}>
      <FlashList
        data={hymns.data}
        renderItem={renderItem}
        estimatedItemSize={200}
      />
    </View>
  );
};
