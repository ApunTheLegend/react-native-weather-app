export interface ThemeInterface {
  backgroundColor: string;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  name: string;
}

// https://www.canva.com/colors/color-palettes/rosettes-and-cream/
const rosettesAndCream: ThemeInterface = {
  backgroundColor: "#b6e2d3",
  primaryColor: "#ef7c8e",
  secondaryColor: "#d8a7b1",
  textColor: "#fae8e0",
  name: "Rosettes and Cream",
};

// https://www.canva.com/colors/color-palettes/summer-splash/
const summerSplash: ThemeInterface = {
  backgroundColor: "#05445e",
  primaryColor: "#189ab4",
  secondaryColor: "#75e6da",
  textColor: "#d4f1f4",
  name: "Summer Splash",
};

// https://www.canva.com/colors/color-palettes/retro-punch/
const retroPunch: ThemeInterface = {
  backgroundColor: "#2ff3e0",
  primaryColor: "#fa26a0",
  secondaryColor: "#f51720",
  textColor: "#f8d210",
  name: "Retro Punch",
};

// https://www.canva.com/colors/color-palettes/strawberry-froth/
const strawberryFroth: ThemeInterface = {
  backgroundColor: "#e43d40",
  primaryColor: "#f85c70",
  secondaryColor: "#f37970",
  textColor: "#fabec0",
  name: "Strawberry Froth",
};

// https://www.canva.com/colors/color-palettes/facing-forward/
const facingForward: ThemeInterface = {
  backgroundColor: "#004369",
  primaryColor: "#01949a",
  secondaryColor: "#db1f48",
  textColor: "#e5dd68",
  name: "Facing Forward",
};

// https://www.canva.com/colors/color-palettes/handpainted-sky/
const handpaintedSky: ThemeInterface = {
  backgroundColor: "#5d59af",
  primaryColor: "#a072be",
  secondaryColor: "#be81b6",
  textColor: "#e390c8",
  name: "Handpainted Sky",
};

// https://www.canva.com/colors/color-palettes/touch-of-rose/
const touchOfRose: ThemeInterface = {
  backgroundColor: "#faa590",
  primaryColor: "#b43930",
  secondaryColor: "#fbe5e0",
  textColor: "#f28a80",
  name: "Touch of Rose",
};

// https://www.canva.com/colors/color-palettes/pastel-dreams/
const pastelDreams: ThemeInterface = {
  backgroundColor: "#ffaebc",
  primaryColor: "#a0e7e5",
  secondaryColor: "#b4f8c8",
  textColor: "#fbe7c6",
  name: "Pastel Dreams",
};

export const themesArray: ThemeInterface[] = [
  rosettesAndCream,
  summerSplash,
  retroPunch,
  strawberryFroth,
  facingForward,
  handpaintedSky,
  touchOfRose,
  pastelDreams,
];

export const Home = "Home";
export const Weather = "Weather";
export const Current = "Current";
export const FiveDayWeather = "FiveDayWeather";
export const Forecasts = "Forecasts";
