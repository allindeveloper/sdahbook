import { useEffect } from "react";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { Route } from "../../router/routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageKeys } from "../../constants/storagekeys";

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const checkFirstTimeUser = async () => {
      const firstTime = await AsyncStorage.getItem(StorageKeys.IsFirstTime);
      const isFirstTimeUser = !firstTime ? true : false;
      try {
        if (isFirstTimeUser) {
          setTimeout(() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: Route.Welcome }],
              }),
            );
          }, 1000);
        } else {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: Route.TabNavigator }],
            }),
          );
        }
      } catch (error) {}
    };

    checkFirstTimeUser();
  }, []);

  return null;
};

export default SplashScreen;
