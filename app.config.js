import { config } from "dotenv";

config();

module.exports = {
  expo: {
    name: "weather-app",
    slug: "weather-app",
    version: "1.0.0",
    orientation: "portrait",
    plugins: [
      [
        "expo-location",
        {
          locationAlwaysAndWhenInUsePermission:
            "Allow $(PRODUCT_NAME) to use your location.",
          isAndroidBackgroundLocationEnabled:
            "Allow $(PRODUCT_NAME) to use your location",
        },
      ],
    ],
    extra: {
      accuweatherApiKey: process.env.ACCUWEATHER_API_KEY,
      accuweatherBaseUrl: process.env.ACCUWEATHER_BASE_URL,
      mapboxApiKey: process.env.MAPBOX_API_KEY,
    },
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/smartphone1.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.apunthelegend.weatherapp",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/too-hot.png",
        backgroundColor: "#FFFFFF",
      },
      softwareKeyboardLayoutMode: "pan",
      package: "com.apunthelegend.weatherapp",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "3d823278-0815-4c91-a1f8-f4d27d4fc1cc",
      },
    },
  },
};
