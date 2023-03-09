import React from "react";
import { Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { ThemeInterface } from "../../constants/constants";
import { RootState } from "../../store/store";

type HeaderTextProps = {
  headerText: string;
};

const HeaderText = ({ headerText }: HeaderTextProps) => {
  const theme = useSelector(
    (state: RootState) => state.theme
  ) as ThemeInterface;

  return (
    <Text style={[styles.header, { color: theme.primaryColor }]}>
      {headerText}
    </Text>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontFamily: "SpaceGroteskBold",
    textAlign: "center",
    marginBottom: 15,
    marginHorizontal: 10,
  },
});

export default HeaderText;
