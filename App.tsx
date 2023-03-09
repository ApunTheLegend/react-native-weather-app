import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

import HomeScreen from "./screens/HomeScreen";
import CurrentScreen from "./screens/CurrentScreen";
import ForecastsScreen from "./screens/ForecastsScreen";

import { Home, Current, Forecasts } from "./constants/constants";
import type { RootStackParamList } from "./types";
import store from "./store/store";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [loadedFonts] = useFonts({
    SpaceGroteskBold: require("./assets/fonts/SpaceGrotesk-Bold.ttf"),
    SpaceGroteskLight: require("./assets/fonts/SpaceGrotesk-Light.ttf"),
    SpaceGroteskMedium: require("./assets/fonts/SpaceGrotesk-Medium.ttf"),
    SpaceGroteskRegular: require("./assets/fonts/SpaceGrotesk-Regular.ttf"),
    SpaceGroteskSemiBold: require("./assets/fonts/SpaceGrotesk-SemiBold.ttf"),
  });

  if (!loadedFonts) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Home}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name={Home} component={HomeScreen} />
          <Stack.Screen name={Current} component={CurrentScreen} />
          <Stack.Screen name={Forecasts} component={ForecastsScreen} />
        </Stack.Navigator>
        <StatusBar translucent={true} />
      </NavigationContainer>
    </Provider>
  );
}
