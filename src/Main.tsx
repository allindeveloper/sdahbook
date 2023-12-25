import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GalioProvider } from "galio-framework";
import React from "react";
import { colors } from "./styles/colors";
import { router } from "./router/router";
import { Router } from "./types/router";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux/store";
import { MainContainer } from "./containers/MainContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const Stack = createNativeStackNavigator();

const persistor = persistStore(store);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
const Main = () => {
  const customTheme = {
    COLORS: { PRIMARY: colors.BLACKONE },
  };
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <NavigationContainer>
              <GalioProvider theme={customTheme}>
                <Stack.Navigator>
                  {router.map((route: Router, index: React.Key | null) => (
                    <Stack.Screen
                      key={index}
                      name={route.route}
                      options={{
                        headerShown: route.showHeader,
                        headerTitle: route.title,
                        gestureEnabled: route.gestureEnabled,
                      }}
                    >
                      {(props) => <route.screen {...props} />}
                    </Stack.Screen>
                  ))}
                </Stack.Navigator>
                <MainContainer />
              </GalioProvider>
            </NavigationContainer>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default Main;
