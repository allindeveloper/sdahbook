import React, { useState } from "react";
import FullModal from "../components/Modal/FullModal";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {
  saveCurrentHymn,
  toggleHymnSearchDialog,
} from "../redux/reducers/hymnReducer";
import NativeText from "../components/Text/NativeText";
import { searchDialogStyles } from "../styles/modules/searchDialogStyles";
import { Block } from "galio-framework";
import { colors } from "../styles/colors";
import { Pressable, TouchableHighlight, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Divider } from "react-native-paper";
import Space from "../components/Space/Space";
import useHymns from "../hooks/useHymns";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HymnScreenStackParamList } from "../types/hymn";
import { Route } from "../router/routes";

export const GlobalContainer = () => {
  const { showHymnSearchDialog } = useAppSelector((state) => state.hymnReducer);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useAppDispatch();
  const { offlineHymn } = useHymns();
  const navigation =
    useNavigation<
      NativeStackNavigationProp<HymnScreenStackParamList, Route.HymnScreen>
    >();
  const hideHymnSearch = () => {
    dispatch(toggleHymnSearchDialog(!showHymnSearchDialog));
  };

  const handleSetNumber = (currentNumber: number) => {
    setSearchQuery(`${searchQuery}${currentNumber}`);
  };

  const handleBackPress = () => {
    setSearchQuery((prevSearchQuery) => prevSearchQuery.slice(0, -1));
  };

  const handleSearchNumber = () => {
    const foundHymn = offlineHymn.find(
      (hymn) => String(hymn.number) === String(searchQuery),
    );
    if (!foundHymn) {
      return;
    }
    hideHymnSearch();
    setSearchQuery("");
    dispatch(saveCurrentHymn(foundHymn));
    navigation.navigate(Route.HymnScreen);
  };
  const generateNumbers = () => {
    const rows = 3;
    const columns = 3;
    const numbers = [];

    let number = 1;

    for (let i = 0; i < rows; i++) {
      const rowNumbers = [];

      for (let j = 0; j < columns; j++) {
        if (number <= 9) {
          const currentNumber = number;
          rowNumbers.push(
            <TouchableHighlight
              onPress={() => handleSetNumber(currentNumber)}
              underlayColor={colors.GREY_ONE}
              key={number}
              style={searchDialogStyles.eachNumber}
            >
              <NativeText
                color={colors.BLACK}
                defaultColor={false}
                size={45}
                center
              >
                {number}
              </NativeText>
            </TouchableHighlight>,
          );
          number++;
        }
      }

      numbers.push(
        <Block key={i} flex row space="evenly">
          {rowNumbers}
        </Block>,
      );
    }

    return numbers;
  };
  return (
    <>
      <FullModal
        contentStyle={searchDialogStyles.content}
        style={searchDialogStyles.root}
        visible={showHymnSearchDialog}
        hideModal={hideHymnSearch}
      >
        <Block flex space="evenly" right style={searchDialogStyles.searchQuery}>
          <Block style={searchDialogStyles.searchQueryText}>
            <NativeText size={45}>{searchQuery}</NativeText>
          </Block>
          <Pressable
            style={searchDialogStyles.backSpace}
            onPress={handleBackPress}
          >
            <Ionicons name="backspace" color={colors.BLACKONE} size={28} />
          </Pressable>
        </Block>
        <Divider bold />
        <Space top={20} />
        {generateNumbers()}
        <Block row flex center>
          <TouchableHighlight
            onPress={() => handleSetNumber(0)}
            underlayColor={colors.GREY_ONE}
            style={searchDialogStyles.eachNumber}
          >
            <NativeText
              color={colors.BLACK}
              defaultColor={false}
              size={45}
              center
            >
              0
            </NativeText>
          </TouchableHighlight>
          <Pressable onPress={handleSearchNumber} style={searchDialogStyles.go}>
            <Ionicons name="enter-outline" color={colors.BLACKONE} size={35} />
          </Pressable>
        </Block>
      </FullModal>
    </>
  );
};
