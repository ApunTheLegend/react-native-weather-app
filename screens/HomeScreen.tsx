import { View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Button from "../components/Buttons/Button";
import { Current, ThemeInterface, Forecasts } from "../constants/constants";
import { cycleTheme } from "../store/slices/themeSlice";
import { RootStackParamList } from "../types";
import { RootState } from "../store/store";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const theme = useSelector(
    (state: RootState) => state.theme
  ) as ThemeInterface;
  const dispatch = useDispatch();

  const handleThemeCycle = () => dispatch(cycleTheme());

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={[styles.header, { color: theme.primaryColor }]}>
        Welcome to the App!
      </Text>
      <Button
        title="Weather Forecast"
        onPress={() => navigation.navigate(Forecasts)}
      />
      <Button
        title="Current Conditions"
        onPress={() => navigation.navigate(Current)}
      />
      <Button title={`Change theme`} onPress={handleThemeCycle} />
      <Text style={[styles.bottomText, { color: theme.textColor }]}>
        Currently using the {theme.name} theme
      </Text>
      <View style={[styles.bottom, { backgroundColor: theme.secondaryColor }]}>
        <Text style={[styles.bottomText, { color: theme.textColor }]}>
          Created using React Native with TypeScript, Redux Toolkit, Expo &
          AccuWeather's API
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 45,
    fontFamily: "SpaceGroteskBold",
    textAlign: "center",
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  bottom: {
    position: "absolute",
    width: "100%",
    height: 70,
    bottom: 0,
    justifyContent: "center",
  },
  bottomText: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "SpaceGroteskMedium",
    paddingHorizontal: 15,
  },
});

export default HomeScreen;
