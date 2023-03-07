import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import type { RootState } from "../../store/store";
import { ThemeInterface } from "../../constants/constants";

type AppBarProps = {
  title: string;
};

const AppBar = ({ title }: AppBarProps) => {
  const theme = useSelector(
    (state: RootState) => state.theme
  ) as ThemeInterface;

  return (
    <View style={[styles.appBar, { backgroundColor: theme.primaryColor }]}>
      <Text style={[styles.appBarTitle, { color: theme.textColor }]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    position: "absolute",
    width: "100%",
    height: 100,
    top: 0,
    alignItems: "center",
  },
  appBarTitle: {
    position: "absolute",
    bottom: 10,
    fontFamily: "SpaceGroteskBold",
    fontSize: 25,
    textAlign: "center",
  },
});

export default AppBar;
