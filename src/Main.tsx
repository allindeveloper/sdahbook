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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PaperProvider, Portal } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GlobalContainer } from "./containers/GlobalContainer";
import { Toasts } from "@backpackapp-io/react-native-toast";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { commonStyles } from "./styles/commonStyles";
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
    <SafeAreaProvider>
      <GestureHandlerRootView style={commonStyles.flexOne}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <NavigationContainer>
                <GalioProvider theme={customTheme}>
                  <PaperProvider>
                    <Portal>
                      <Stack.Navigator>
                        {router.map(
                          (route: Router, index: React.Key | null) => (
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
                          ),
                        )}
                      </Stack.Navigator>
                    </Portal>
                  </PaperProvider>
                  <Toasts />
                  <GlobalContainer />
                </GalioProvider>
              </NavigationContainer>
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default Main;
