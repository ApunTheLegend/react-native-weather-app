import React, { useState } from "react";
import { Keyboard } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import * as api from "../api";
import ScreenWithAppbar from "../components/Containers/ScreenWithAppbar";
import Button from "../components/Buttons/Button";
import LabelText from "../components/Texts/LabelText";
import ErrorText from "../components/Texts/ErrorText";
import InputField from "../components/Inputs/InputField";
import Container from "../components/Containers/Container";

import { Current } from "../constants/constants";
import type { RootStackParamList } from "../types";

type CurrentScreenProps = NativeStackScreenProps<RootStackParamList, "Current">;

const CurrentScreen = ({ navigation }: CurrentScreenProps) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState<string | null>(null);
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
    } catch (error: any) {
      setError("Whoops! Something went wrong");
    }
  };

  return (
    <ScreenWithAppbar
      appbarTitle={Current}
      headerText={"Get the Current Conditions"}
    >
      <InputField
        placeholder="-- Enter a city --"
        onChangeText={(value: string) => setCity(value)}
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
          <LabelText heading="Temperature" text={`${current.temperature}°C`} />
        )}
        {current.realFeelTemperature < 100 && (
          <LabelText
            heading="Real Feel Temperature"
            text={`${current.realFeelTemperature}°C`}
          />
        )}
        {current.windSpeed > -1 && (
          <LabelText heading="Wind Speed" text={`${current.windSpeed} km/h`} />
        )}
        {current.windDirection.length > 0 && (
          <LabelText heading="Wind Direction" text={current.windDirection} />
        )}
        {error && <ErrorText errorText={error} />}
      </Container>
    </ScreenWithAppbar>
  );
};

export default CurrentScreen;
