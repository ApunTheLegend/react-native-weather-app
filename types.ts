export type RootStackParamList = {
  Home: undefined;
  Weather: undefined;
  Current: undefined;
};

export interface CurrentForecast {
  weatherText: string;
  temperature: number;
  realFeelTemperature: number;
  windSpeed: number;
  windDirection: string;
}

export interface OneDayForecast {
  aboutWeather: string;
  minimumTemp: number;
  maximumTemp: number;
}

export type FiveDayForecastObject = {
  minimumTemperature: number;
  maximumTemperature: number;
  iconPhraseDay: string;
  iconPhraseNight: string;
};

export interface FiveDayForecast {
  headline: string;
  forecasts: FiveDayForecastObject[];
}
