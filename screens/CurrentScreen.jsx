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

import { blueGrotto, navyBlue, Current } from "../constants/constants";

const CurrentScreen = ({ navigation }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const [current, setCurrent] = useState({
    weatherText: "",
    temperature: 100,
    realFeelTemperature: 100,
    windSpeed: -1,
    windDirection: "",
  });

  const onPressHandler = async () => {
    Keyboard.dismiss();
    setError(null);
    try {
      const {
        weatherText,
        temperature,
        realFeelTemperature,
        windSpeed,
        windDirection,
      } = await api.getCurrentForecast(city);

      setCurrent({
        weatherText,
        temperature,
        realFeelTemperature,
        windSpeed,
        windDirection,
      });
    } catch (error) {
      setError("Whoops! Something went wrong");
      throw new Error(error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <AppBar title={Current} />
        <Text style={styles.header}>Get the Current Conditions</Text>
        <InputField
          placeholder="-- Enter a city --"
          onChangeText={(value) => setCity(value)}
        />
        <Button
          title="Get current conditions"
          onPress={onPressHandler}
          disabled={city.length <= 2}
        />
        <Container>
          {current.weatherText.length > 0 && (
            <LabelText
              heading="About the current conditions"
              text={current.weatherText}
            />
          )}
          {current.temperature < 100 && (
            <LabelText
              heading="Temperature"
              text={`${current.temperature}°C`}
            />
          )}
          {current.realFeelTemperature < 100 && (
            <LabelText
              heading="Real Feel Temperature"
              text={`${current.realFeelTemperature}°C`}
            />
          )}
          {current.windSpeed > -1 && (
            <LabelText
              heading="Wind Speed"
              text={`${current.windSpeed} km/h`}
            />
          )}
          {current.windDirection.length > 0 && (
            <LabelText heading="Wind Direction" text={current.windDirection} />
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

export default CurrentScreen;
