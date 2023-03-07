import React from "react";
import {
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import AppBar from "./AppBar";
import FloatingActionButton from "../Buttons/FloatingActionButton";
import type { RootState } from "../../store/store";
import { ThemeInterface } from "../../constants/constants";

type ScreenWithAppbarProps = {
  appbarTitle: string;
  headerText: string;
  children: React.ReactNode;
};

const ScreenWithAppbar = ({
  appbarTitle,
  headerText,
  children,
}: ScreenWithAppbarProps) => {
  const theme = useSelector(
    (state: RootState) => state.theme
  ) as ThemeInterface;
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={[styles.container, { backgroundColor: theme.backgroundColor }]}
      >
        <AppBar title={appbarTitle} />
        {headerText && (
          <Text style={[styles.header, { color: theme.primaryColor }]}>
            {headerText}
          </Text>
        )}
        {children}
        <FloatingActionButton
          onPress={() => navigation.goBack()}
          title="Back"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    fontFamily: "SpaceGroteskBold",
    textAlign: "center",
    marginBottom: 15,
    marginHorizontal: 10,
  },
});

export default ScreenWithAppbar;
