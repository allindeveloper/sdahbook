import React, { useState } from "react";
import FullModal from "../components/Modal/FullModal";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { toggleHymnSearchDialog } from "../redux/reducers/hymnReducer";
import NativeText from "../components/Text/NativeText";
import { searchDialogStyles } from "../styles/modules/searchDialogStyles";
import { Block } from "galio-framework";
import { colors } from "../styles/colors";

export const GlobalContainer = () => {
  const { showHymnSearchDialog } = useAppSelector((state) => state.hymnReducer);
  const [searchQuery, setSearchQuery] = useState("200");
  const dispatch = useAppDispatch();
  const hideHymnSearch = () => {
    dispatch(toggleHymnSearchDialog(!showHymnSearchDialog));
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

        <Block flex row space="evenly">
          {/*  */}
          <Block style={searchDialogStyles.eachNumber}>
            <NativeText
              color={colors.BLACK}
              defaultColor={false}
              size={45}
              center
            >
              1
            </NativeText>
          </Block>
          <Block style={searchDialogStyles.eachNumber}>
            <NativeText
              color={colors.BLACK}
              defaultColor={false}
              size={45}
              center
            >
              2
            </NativeText>
          </Block>
          <Block style={searchDialogStyles.eachNumber}>
            <NativeText
              color={colors.BLACK}
              defaultColor={false}
              size={45}
              center
            >
              3
            </NativeText>
          </Block>
          {/*  */}
        </Block>
        {/*  */}
        <Block flex row space="evenly">
          {/*  */}
          <Block style={searchDialogStyles.eachNumber}>
            <NativeText
              color={colors.BLACK}
              defaultColor={false}
              size={45}
              center
            >
              4
            </NativeText>
          </Block>
          <Block style={searchDialogStyles.eachNumber}>
            <NativeText
              color={colors.BLACK}
              defaultColor={false}
              size={45}
              center
            >
              5
            </NativeText>
          </Block>
          <Block style={searchDialogStyles.eachNumber}>
            <NativeText
              color={colors.BLACK}
              defaultColor={false}
              size={45}
              center
            >
              6
            </NativeText>
          </Block>
          {/*  */}
        </Block>
        {/*  */}
        <Block flex row space="evenly">
          {/*  */}
          <Block style={searchDialogStyles.eachNumber}>
            <NativeText
              color={colors.BLACK}
              defaultColor={false}
              size={45}
              center
            >
              7
            </NativeText>
          </Block>
          <Block style={searchDialogStyles.eachNumber}>
            <NativeText
              color={colors.BLACK}
              defaultColor={false}
              size={45}
              center
            >
              8
            </NativeText>
          </Block>
          <Block style={searchDialogStyles.eachNumber}>
            <NativeText
              color={colors.BLACK}
              defaultColor={false}
              size={45}
              center
            >
              9
            </NativeText>
          </Block>
          {/*  */}
        </Block>
        {/*  */}
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
