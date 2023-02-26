import axios from "axios";
import { API_KEY, BASE_URL } from "@env";

const axiosConfig = axios.create({
  baseURL: BASE_URL,
});

export const getLocationKey = async (cityQuery) => {
  try {
    const response = await axiosConfig.get(
      `/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${encodeURI(
        cityQuery.trim()
      )}`
    );

    return response.data[0]["Key"];
  } catch (error) {
    throw new Error(error.message);
  }
};

export const get1DayForecast = async (cityQuery) => {
  try {
    const locationKey = await getLocationKey(cityQuery);

    const response = await axiosConfig.get(
      `/forecasts/v1/daily/1day/${encodeURI(
        locationKey
      )}?apikey=${API_KEY}&metric=true`
    );

    return {
      aboutWeather: response.data["Headline"]["Text"],
      minimumTemp:
        response.data["DailyForecasts"][0]["Temperature"]["Minimum"]["Value"],
      maximumTemp:
        response.data["DailyForecasts"][0]["Temperature"]["Maximum"]["Value"],
    };
  } catch (error) {
    throw new Error({ message: error.message });
  }
};

export const getCurrentForecast = async (cityQuery) => {
  try {
    const locationKey = await getLocationKey(cityQuery);

    const response = await axiosConfig.get(
      `/currentconditions/v1/${encodeURI(
        locationKey
      )}?apikey=${API_KEY}&details=true`
    );

    const data = response.data[0];

    return {
      weatherText: data["WeatherText"],
      temperature: data["Temperature"]["Metric"]["Value"],
      realFeelTemperature: data["RealFeelTemperature"]["Metric"]["Value"],
      windSpeed: data["Wind"]["Speed"]["Metric"]["Value"],
      windDirection: data["Wind"]["Direction"]["Localized"],
    };
  } catch (error) {
    throw new Error({ message: error.message });
  }
};
