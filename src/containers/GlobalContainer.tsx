import React, { useState } from "react";
import FullModal from "../components/Modal/FullModal";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { toggleHymnSearchDialog } from "../redux/reducers/hymnReducer";
import NativeText from "../components/Text/NativeText";
import { searchDialogStyles } from "../styles/modules/searchDialogStyles";
import { Block } from "galio-framework";
import { colors } from "../styles/colors";
import { TouchableHighlight } from "react-native";

export const GlobalContainer = () => {
  const { showHymnSearchDialog } = useAppSelector((state) => state.hymnReducer);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useAppDispatch();
  const hideHymnSearch = () => {
    dispatch(toggleHymnSearchDialog(!showHymnSearchDialog));
  };

  const handleSetNumber = (currentNumber: number) => {
    console.log("cur", currentNumber);
    setSearchQuery(`${searchQuery}${currentNumber}`);
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
        <Block center style={searchDialogStyles.searchQuery}>
          <NativeText size={45}>{searchQuery}</NativeText>
        </Block>

        {generateNumbers()}
        <Block flex row center space="evenly">
          <Block style={searchDialogStyles.eachNumber}>
            <NativeText
              color={colors.BLACK}
              defaultColor={false}
              size={45}
              center
            >
              0
            </NativeText>
          </Block>
        </Block>
      </FullModal>
    </>
  );
};
