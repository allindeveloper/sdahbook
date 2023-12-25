import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Route } from "../router/routes";
import { splashRouter } from "../router/splashRouter";

const Stack = createNativeStackNavigator();
const SplashNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Route.SplashNavigator}
      screenOptions={{}}
    >
      {splashRouter.map((route: any, index: React.Key | null | undefined) => (
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

export default SplashNavigator;
