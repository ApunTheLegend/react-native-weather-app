import { createSlice } from "@reduxjs/toolkit";

import { themesArray, ThemeInterface } from "../../constants/constants";

export interface InitialState extends ThemeInterface {
  themeIndex: number;
}

const initialState: InitialState = {
  themeIndex: 0,
  name: themesArray[0]?.name ?? "",
  backgroundColor: themesArray[0]?.backgroundColor ?? "",
  primaryColor: themesArray[0]?.primaryColor ?? "",
  secondaryColor: themesArray[0]?.secondaryColor ?? "",
  textColor: themesArray[0]?.textColor ?? "",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    cycleTheme: (state) => {
      state.themeIndex = (state.themeIndex + 1) % themesArray.length;
      const theme = themesArray[state.themeIndex];
      // Change colors after cyclic iteration of the themes array
      if (theme) {
        state.name = theme.name;
        state.backgroundColor = theme.backgroundColor;
        state.primaryColor = theme.primaryColor;
        state.secondaryColor = theme.secondaryColor;
        state.textColor = theme.textColor;
      }
    },
  },
});

export const { cycleTheme } = themeSlice.actions;
export default themeSlice.reducer;
