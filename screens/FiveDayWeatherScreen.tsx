import React, { useState } from "react";
import { Keyboard } from "react-native";
import Container from "../components/Containers/Container";
import ScreenWithAppbar from "../components/Containers/ScreenWithAppbar";
import * as api from "../api";

import { FiveDayForecast } from "../types";
import InputField from "../components/Inputs/InputField";
import Button from "../components/Buttons/Button";
import ErrorText from "../components/Texts/ErrorText";
import LabelText from "../components/Texts/LabelText";
import RenderCards from "../components/Cards/RenderCards";

const FiveDayWeatherScreen = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState<null | string>(null);
  const [fiveDayForecast, setFiveDayForecast] = useState<FiveDayForecast>({
    headline: "",
    forecasts: [],
  });

  const onPressHandler = async () => {
    Keyboard.dismiss();
    setError(null);
    try {
      const { headline, forecasts } = await api.get5DayForecast(city);
      setFiveDayForecast({ headline, forecasts });
    } catch (error: any) {
      setError("Guess what happened? Yeah, some problem...");
    }
  };

  return (
    <ScreenWithAppbar
      appbarTitle="Five Day Forecast"
      headerText="Get the 5 Day Forecast"
    >
      <InputField
        placeholder="-- Enter a city --"
        onChangeText={(value: string) => setCity(value)}
      />
      <Button
        title="Get 5 day data"
        onPress={onPressHandler}
        disabled={city.length <= 2}
      />
      <Container>
        {fiveDayForecast.headline.length > 0 && (
          <LabelText
            heading="Some Information"
            text={fiveDayForecast.headline}
          />
        )}
        <RenderCards fiveDayForecast={fiveDayForecast} />
        {error && <ErrorText errorText={error} />}
      </Container>
    </ScreenWithAppbar>
  );
};

export default FiveDayWeatherScreen;
