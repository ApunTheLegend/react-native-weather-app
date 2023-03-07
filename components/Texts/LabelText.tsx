import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";
import { ThemeInterface } from "../../constants/constants";

type LabelTextProps = {
  heading: string;
  text: string;
};

const LabelText = ({ heading, text }: LabelTextProps) => {
  const theme = useSelector(
    (state: RootState) => state.theme
  ) as ThemeInterface;

  return (
    <View style={styles.box}>
      <Text style={[styles.inputHeading, { color: theme.textColor }]}>
        {heading}
      </Text>
      <Text style={[styles.inputText, { color: theme.textColor }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
  },
  inputText: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "SpaceGroteskLight",
    marginHorizontal: 10,
  },
  inputHeading: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "SpaceGroteskBold",
    marginHorizontal: 10,
  },
});

export default LabelText;
