import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import * as api from "../api";
import Button from "../components/Buttons/Button";
import FloatingActionButton from "../components/Buttons/FloatingActionButton";
import LabelText from "../components/Texts/LabelText";
import ErrorText from "../components/Texts/ErrorText";
import InputField from "../components/Inputs/InputField";
import Container from "../components/Containers/Container";
import AppBar from "../components/Containers/AppBar";

import { blueGrotto, navyBlue, Weather } from "../constants/constants";

const WeatherScreen = ({ navigation }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const [oneDayForecast, setOneDayForecast] = useState({
    aboutWeather: "",
    minimumTemp: -100,
    maximumTemp: 100,
  });

  const onPressHandler = async () => {
    Keyboard.dismiss();
    setError(null);
    try {
      const { aboutWeather, minimumTemp, maximumTemp } =
        await api.get1DayForecast(city);

      setOneDayForecast({
        aboutWeather,
        minimumTemp,
        maximumTemp,
      });
    } catch (error) {
      setError("Whoops! Something went wrong");
      throw new Error(error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <AppBar title={Weather} />
        <Text style={styles.header}>Get the Weather</Text>
        <InputField
          placeholder="-- Enter a city --"
          onChangeText={(value) => setCity(value)}
        />
        <Button
          title="Get weather data"
          onPress={onPressHandler}
          disabled={city.length <= 2}
        />
        <Container>
          {oneDayForecast.aboutWeather.length > 0 && (
            <LabelText
              heading="Weather Description"
              text={oneDayForecast.aboutWeather}
            />
          )}
          {oneDayForecast.minimumTemp > -100 && (
            <LabelText
              heading="Minimum Temperature"
              text={`${oneDayForecast.minimumTemp}°C`}
            />
          )}
          {oneDayForecast.maximumTemp < 100 && (
            <LabelText
              heading="Maximum Temperature"
              text={`${oneDayForecast.maximumTemp}°C`}
            />
          )}
          {error && <ErrorText errorText={error} />}
        </Container>
        <FloatingActionButton
          onPress={() => navigation.goBack()}
          title="Back"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: navyBlue,
  },
  header: {
    fontSize: 30,
    fontFamily: "SpaceGroteskBold",
    color: blueGrotto,
    textAlign: "center",
    marginBottom: 15,
    marginHorizontal: 10,
  },
});

export default WeatherScreen;
