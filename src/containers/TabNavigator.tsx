import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/AntDesign";

import HomeNavigator from "./HomeNavigator";
import { Route, TabRoute } from "../router/routes";
import { colors } from "../styles/colors";
import { useTheme } from "react-native-paper";

const Tab = createMaterialBottomTabNavigator();

export const TabNavigator = () => {
  const theme = useTheme();
  theme.colors.secondaryContainer = colors.PRIMARY;
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: colors.TAB_BACKGROUND,
      }}
      initialRouteName={TabRoute.Home}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => {
            return <Icon name="home" size={25} color={color} />;
          },
        }}
        name={Route.HomeTab}
      >
        {() => <HomeNavigator />}
      </Tab.Screen>
      <Tab.Screen
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => {
            return <Icon name="setting" size={25} color={color} />;
          },
        }}
        name={Route.SettingsTab}
      >
        {() => <HomeNavigator />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
