import Card from "./Card";
import moment from "moment";
import { FiveDayForecast } from "../../types";

type RenderCardProps = {
  fiveDayForecast: FiveDayForecast;
};

const RenderCards = ({ fiveDayForecast }: RenderCardProps) => {
  return (
    <>
      {fiveDayForecast.forecasts.map((forecast, index) => (
        <Card
          key={index}
          minimumTemperature={forecast.minimumTemperature}
          maximumTemperature={forecast.maximumTemperature}
          dayPrecipitationProbability={forecast.precipitationProbabilityDay}
          nightPrecipitationProbability={forecast.precipitationProbabilityNight}
          date={moment().add(index, "day").format("DD-MMM")}
          dayOfWeek={moment().add(index, "days").format("ddd")}
        />
      ))}
    </>
  );
};

export default RenderCards;
