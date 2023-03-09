import React from "react";
import { useSelector } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CurrentScreen from "./CurrentScreen";
import FiveDayWeatherScreen from "./FiveDayWeatherScreen";
import {
  Weather,
  FiveDayWeather,
  ThemeInterface,
} from "../constants/constants";
import type { RootTabParamList } from "./types";
import type { RootState } from "../store/store";

const Tab = createBottomTabNavigator<RootTabParamList>();

const ForecastsScreen = () => {
  const theme = useSelector(
    (state: RootState) => state.theme
  ) as ThemeInterface;

  return (
    <Tab.Navigator
      initialRouteName={Weather}
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "SpaceGroteskBold",
          fontSize: 13,
        },
        tabBarActiveTintColor: theme.textColor,
        tabBarStyle: {
          backgroundColor: theme.primaryColor,
        },
      }}
    >
      <Tab.Screen
        name={Weather}
        component={CurrentScreen}
        options={{
          tabBarLabel: "Weather",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="weather-cloudy"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={FiveDayWeather}
        component={FiveDayWeatherScreen}
        options={{
          tabBarLabel: "5 Day Weather",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="weather-cloudy"
              size={size}
              color={color}
            />
          ),
          tabBarBadge: "5 day",
          tabBarBadgeStyle: {
            color: theme.textColor,
            backgroundColor: theme.secondaryColor,
            fontFamily: "SpaceGroteskBold",
            fontSize: 10,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default ForecastsScreen;
