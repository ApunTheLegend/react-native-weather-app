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

import { Weather } from "../constants/constants";
import type { RootStackParamList } from "../types";

type WeatherScreenProps = NativeStackScreenProps<RootStackParamList, "Weather">;

const WeatherScreen = ({ navigation }: WeatherScreenProps) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState<string | null>(null);
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
    } catch (error: any) {
      setError("Whoops! Something went wrong");
    }
  };

  return (
    <ScreenWithAppbar appbarTitle={Weather} headerText={"Get the Weather"}>
      <InputField
        placeholder="-- Enter a city --"
        onChangeText={(value: string) => setCity(value)}
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
    </ScreenWithAppbar>
  );
};

export default WeatherScreen;
