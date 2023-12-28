import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  View,
  ViewProps,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../styles/colors";
import { appPadding } from "../../constants/appConstants";
import NativeText from "../Text/NativeText";
import { Block } from "galio-framework";

type PageHeaderProps = {
  leftNode?: JSX.Element;
  rightNode?: JSX.Element;
  title?: string;
  handleOnPressLeftItem?: () => void;
  handleOnPressRightItem?: () => void;
  rightContainerStyle?: ViewProps["style"] | null;
  leftContainerStyle?: ViewProps["style"] | null;
  showBack?: boolean;
};

export const Header: React.FC<PageHeaderProps> = ({
  leftNode = null,
  rightNode = null,
  handleOnPressLeftItem = null,
  rightContainerStyle = null,
  leftContainerStyle = null,
  showBack,
  title,
}) => {
  const navigation = useNavigation<any>();
  const handeBack = () => {
    if (showBack) {
      navigation.goBack();
    } else {
      handleOnPressLeftItem?.();
    }
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
    paddingRight: 4,
    paddingTop: 4,
    alignItems: "flex-end",
  },
  headerItem: {
    width: "100%",
    paddingTop: 4,
  },
});
