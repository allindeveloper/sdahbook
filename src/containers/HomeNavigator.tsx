import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { homeRouter } from "../router/homeRouter";
import { TabRoute } from "../router/routes";

const Stack = createNativeStackNavigator();
const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={TabRoute.Home} screenOptions={{}}>
      {homeRouter.map((route: any, index: React.Key | null | undefined) => (
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

export default HomeNavigator;
