import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Entypo } from "@expo/vector-icons";

import { RootState } from "../../store/store";
import { ThemeInterface } from "../../constants/constants";

type CardProps = {
  minimumTemperature: number;
  maximumTemperature: number;
  dayPrecipitationProbability: number;
  nightPrecipitationProbability: number;
  dayOfWeek: string;
  date: string;
};

const Card = ({
  minimumTemperature,
  maximumTemperature,
  dayPrecipitationProbability,
  nightPrecipitationProbability,
  dayOfWeek,
  date,
}: CardProps) => {
  const theme = useSelector(
    (state: RootState) => state.theme
  ) as ThemeInterface;

  return (
    <View style={[styles.container, { backgroundColor: theme.secondaryColor }]}>
      <View style={styles.dayDateContainer}>
        <Text style={[styles.dayOfWeek, { color: theme.textColor }]}>
          {dayOfWeek}
        </Text>
        <Text style={[styles.date, { color: theme.textColor }]}>{date}</Text>
      </View>
      <View style={styles.minMaxContainer}>
        <Text
          style={[styles.maxTempText, { color: theme.textColor }]}
        >{`${maximumTemperature}°C`}</Text>
        <Text style={[styles.slash, { color: theme.textColor }]}>/</Text>
        <Text
          style={[styles.minTempText, { color: theme.textColor }]}
        >{`${minimumTemperature}°C`}</Text>
      </View>
      <View style={styles.precipationContainer}>
        <Entypo name="drop" size={24} color={theme.textColor} />
        <Text style={[styles.probabilityText, { color: theme.textColor }]}>
          {`${dayPrecipitationProbability}% / ${nightPrecipitationProbability}%`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    flexDirection: "row",
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
  },
  dayDateContainer: {
    flex: 2,
    justifyContent: "center",
  },
  minMaxContainer: {
    flex: 3,
    alignItems: "baseline",
    flexDirection: "row",
  },
  precipationContainer: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    fontFamily: "SpaceGroteskSemiBold",
  },
  dayOfWeek: {
    fontFamily: "SpaceGroteskBold",
  },
  slash: {
    fontSize: 20,
    fontFamily: "SpaceGroteskRegular",
  },
  minTempText: {
    fontSize: 12,
    fontFamily: "SpaceGroteskRegular",
  },
  maxTempText: {
    fontSize: 20,
    fontFamily: "SpaceGroteskMedium",
  },
  probabilityText: {
    fontSize: 13,
    fontFamily: "SpaceGroteskRegular",
  },
});

export default Card;
