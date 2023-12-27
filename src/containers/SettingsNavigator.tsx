import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TabRoute } from "../router/routes";
import { settingsRouter } from "../router/settingsRouter";

const Stack = createNativeStackNavigator();
const SettingsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={TabRoute.Home} screenOptions={{}}>
      {settingsRouter.map((route: any, index: React.Key | null | undefined) => (
        <Stack.Screen
          key={index}
          name={route.route}
          options={{
            headerShown: route.showHeader,
            headerTitle: route.title,
          }}
        >
          {(props) => <route.screen {...props} />}
        </Stack.Screen>
      ))}
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
