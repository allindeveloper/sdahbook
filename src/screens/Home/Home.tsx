import React, { useCallback } from "react";
import { View } from "react-native";
import useHymns from "../../hooks/useHymns";
import { FlashList } from "@shopify/flash-list";
import { HymnBook, HymnScreenStackParamList } from "../../types/hymn";
import HymnItem from "../../components/Card/HymnItem";
import { commonStyles } from "../../styles/commonStyles";
import { Header } from "../../components/Header/Header";
import { homeScreenStyles } from "../../styles/modules/homeScreenStyles";
import { Route } from "../../router/routes";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { saveCurrentHymn } from "../../redux/reducers/hymnReducer";
import { useAppDispatch } from "../../hooks/hooks";
import Config from "react-native-config";

export const Home = () => {
  const { offlineHymn } = useHymns();
  const dispatch = useAppDispatch();

  const navigation =
    useNavigation<
      NativeStackNavigationProp<HymnScreenStackParamList, Route.HymnScreen>
    >();
  const handleClick = useCallback(
    (item: HymnBook) => {
      dispatch(saveCurrentHymn(item));
      navigation.navigate(Route.HymnScreen);
    },
    [navigation],
  );
  const renderItem = React.useCallback(
    ({ item }: { item: HymnBook }) => (
      <HymnItem
        item={item}
        handleClick={handleClick}
        title={item.hymnTitle}
        hymnNumber={item.hymnNumber}
      />
    ),
    [],
  );

  return (
    <View style={commonStyles.flexOne}>
      <Header title={"Hymns"} showSearch />
      <View style={[homeScreenStyles.list]}>
        <FlashList
          data={offlineHymn}
          renderItem={renderItem}
          estimatedItemSize={200}
        />
      </View>
    </View>
  );
};
