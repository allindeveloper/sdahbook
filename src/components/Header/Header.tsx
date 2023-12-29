import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewProps,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { colors } from "../../styles/colors";
import { appPadding } from "../../constants/appConstants";
import NativeText from "../Text/NativeText";
import { Block } from "galio-framework";
import { toggleHymnSearchDialog } from "../../redux/reducers/hymnReducer";
import { useAppDispatch } from "../../hooks/hooks";

type PageHeaderProps = {
  leftNode?: JSX.Element;
  rightNode?: JSX.Element;
  title?: string;
  handleOnPressLeftItem?: () => void;
  handleOnPressRightItem?: () => void;
  rightContainerStyle?: ViewProps["style"] | null;
  leftContainerStyle?: ViewProps["style"] | null;
  showBack?: boolean;
  showSearch?: boolean;
};

export const Header: React.FC<PageHeaderProps> = ({
  leftNode = null,
  rightNode = null,
  handleOnPressLeftItem = null,
  rightContainerStyle = null,
  leftContainerStyle = null,
  showBack,
  title,
  showSearch,
  handleOnPressRightItem,
}) => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();

  const handeBack = () => {
    if (showBack) {
      navigation.goBack();
    } else {
      handleOnPressLeftItem?.();
    }
  };
  const handleSearch = () => {
    dispatch(toggleHymnSearchDialog(true));
  };

  return (
    <View style={styles.pageHeaderRoot}>
      <View style={styles.pageHeaderContainer}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.PRIMARY_BOLD}
        />
        <Pressable
          onPress={handeBack}
          style={leftContainerStyle || styles.leftItem}
        >
          {showBack ? (
            <Block row left>
              <View>
                <MaterialIcons
                  name="arrow-back"
                  color={colors.BLACKONE}
                  size={30}
                />
              </View>
              <View style={styles.titleWithBack}>
                <NativeText
                  size={23}
                  defaultColor={false}
                  bold
                  color={colors.BLACKONE}
                >
                  {title}
                </NativeText>
              </View>
            </Block>
          ) : (
            <NativeText
              size={36}
              defaultColor={false}
              bold
              color={colors.BLACKONE}
            >
              {title}
            </NativeText>
          )}
        </Pressable>
        <TouchableOpacity
          onPress={handleSearch}
          style={rightContainerStyle || styles.rightItem}
        >
          {showSearch ? (
            <AntDesign name="search1" color={colors.BLACKONE} size={28} />
          ) : (
            rightNode
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  titleWithBack: {
    marginLeft: 10,
  },
  pageHeaderRoot: {
    shadowColor: colors.BLACKONE,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 10,
    zIndex: 999,
    backgroundColor: colors.PRIMARY,
    borderBottomRightRadius: 40,
  },
  pageHeaderContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "ios" ? 50 : 20,
    paddingBottom: 20,
    paddingLeft: appPadding - 5,
    paddingRight: appPadding,
    backgroundColor: colors.PRIMARY,
    borderBottomRightRadius: 40,
  },
  leftItem: {
    flex: 1,
    paddingLeft: 4,
    paddingTop: 4,
    paddingBottom: 4,
  },
  rightItem: {
    flex: 1,
    paddingRight: 10,
    paddingTop: 4,
    alignItems: "flex-end",
  },
  headerItem: {
    width: "100%",
    paddingTop: 4,
  },
});
