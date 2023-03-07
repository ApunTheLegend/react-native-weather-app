import axios from "axios";

import {
  CurrentForecast,
  FiveDayForecast,
  FiveDayForecastObject,
  OneDayForecast,
} from "../types";

const accuweatherApiKey = process.env.ACCUWEATHER_API_KEY;
const accuweatherBaseUrl = process.env.ACCUWEATHER_BASE_URL;

const axiosConfig = axios.create({
  baseURL: accuweatherBaseUrl,
});

export const getLocationKey = async (cityQuery: string): Promise<number> => {
  try {
    const response = await axiosConfig.get(
      `/locations/v1/cities/autocomplete?apikey=${accuweatherApiKey}&q=${encodeURI(
        cityQuery.trim()
      )}`
    );

    return response.data[0]["Key"];
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const get1DayForecast = async (
  cityQuery: string
): Promise<OneDayForecast> => {
  try {
    const locationKey = await getLocationKey(cityQuery);

    const response = await axiosConfig.get(
      `/forecasts/v1/daily/1day/${encodeURI(
        locationKey.toString()
      )}?apikey=${accuweatherApiKey}&metric=true`
    );

    return {
      aboutWeather: response.data["Headline"]["Text"],
      minimumTemp:
        response.data["DailyForecasts"][0]["Temperature"]["Minimum"]["Value"],
      maximumTemp:
        response.data["DailyForecasts"][0]["Temperature"]["Maximum"]["Value"],
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const get5DayForecast = async (
  cityQuery: string
): Promise<FiveDayForecast> => {
  try {
    const locationKey = await getLocationKey(cityQuery);

    const response = await axios.get(
      `/forecasts/v1/daily/5day/${encodeURI(
        locationKey.toString()
      )}?apikey=${accuweatherApiKey}&metric=true`
    );

    const forecasts = response.data["DailyForecasts"];
    const _5DayForecasts: FiveDayForecastObject[] = [];
    forecasts.map((forecast: any) => {
      _5DayForecasts.push({
        minimumTemperature: forecast["Temperature"]["Minimum"],
        maximumTemperature: forecast["Temperature"]["Maximum"],
        iconPhraseDay: forecast["Day"]["IconPhrase"],
        iconPhraseNight: forecast["Night"]["IconPhrase"],
      });
    });

    return {
      headline: response.data["Headline"]["Text"],
      forecasts: _5DayForecasts,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getCurrentForecast = async (
  cityQuery: string
): Promise<CurrentForecast> => {
  try {
    const locationKey: number = await getLocationKey(cityQuery);

    const response = await axiosConfig.get(
      `/currentconditions/v1/${encodeURI(
        locationKey.toString()
      )}?apikey=${accuweatherApiKey}&details=true`
    );

    const data = response.data[0];

    return {
      weatherText: data["WeatherText"],
      temperature: data["Temperature"]["Metric"]["Value"],
      realFeelTemperature: data["RealFeelTemperature"]["Metric"]["Value"],
      windSpeed: data["Wind"]["Speed"]["Metric"]["Value"],
      windDirection: data["Wind"]["Direction"]["Localized"],
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
