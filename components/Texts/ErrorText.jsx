import { Text, StyleSheet } from "react-native";
import { babyBlue } from "../../constants/constants";

const ErrorText = ({ errorText }) => {
  return <Text style={styles.error}>{errorText}</Text>;
};

const styles = StyleSheet.create({
  error: {
    fontFamily: "SpaceGroteskRegular",
    fontSize: 15,
    color: babyBlue,
    marginVertical: 10,
  },
});

export default ErrorText;
