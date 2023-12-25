import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeNavigator from "./HomeNavigator";
import { Route, TabRoute } from "../router/routes";

const Tab = createMaterialBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={TabRoute.Home}>
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
        }}
        name={Route.HomeTab}
      >
        {() => <HomeNavigator />}
      </Tab.Screen>
      <Tab.Screen
        options={{
          tabBarLabel: "Settings",
        }}
        name={Route.SettingsTab}
      >
        {() => <HomeNavigator />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
