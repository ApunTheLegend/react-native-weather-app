import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import WeatherScreen from "./screens/WeatherScreen";
import CurrentScreen from "./screens/CurrentScreen";
import { Home, Weather, Current } from "./constants/constants";

const Stack = createNativeStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Home}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={Home} component={HomeScreen} />
        <Stack.Screen name={Weather} component={WeatherScreen} />
        <Stack.Screen name={Current} component={CurrentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
