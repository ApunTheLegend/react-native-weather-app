import { View, Text, StyleSheet } from "react-native";

import Button from "../components/Buttons/Button";
import {
  navyBlue,
  blueGrotto,
  blueGreen,
  Weather,
  Current,
} from "../constants/constants";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the App!</Text>
      <Button
        title="Go to the weather screen"
        onPress={() => navigation.navigate(Weather)}
      />
      <Button
        title="Go to the current weather screen"
        onPress={() => navigation.navigate(Current)}
      />
      <View style={styles.bottom}>
        <Text style={styles.bottomText}>
          Created using React Native, Expo & AccuWeather's API
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
    backgroundColor: navyBlue,
  },
  header: {
    fontSize: 45,
    fontFamily: "SpaceGroteskBold",
    color: blueGrotto,
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
    backgroundColor: blueGreen,
  },
  bottomText: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "SpaceGroteskMedium",
  },
});

export default HomeScreen;
