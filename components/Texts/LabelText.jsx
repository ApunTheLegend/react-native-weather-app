import { View, Text, StyleSheet } from "react-native";

import { babyBlue } from "../../constants/constants";

const LabelText = ({ heading, text }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.inputHeading}>{heading}</Text>
      <Text style={styles.inputText}>{text}</Text>
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
    color: babyBlue,
  },
  inputHeading: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "SpaceGroteskBold",
    marginHorizontal: 10,
    color: babyBlue,
  },
});

export default LabelText;
