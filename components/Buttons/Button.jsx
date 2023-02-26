import { StyleSheet, Pressable, Text, TouchableOpacity } from "react-native";

import { babyBlue, blueGrotto } from "../../constants/constants";

const Button = ({ title, onPress, disabled }) => {
  return (
    <TouchableOpacity>
      <Pressable onPress={onPress} style={styles.button} disabled={disabled}>
        <Text style={styles.titleText}>{title}</Text>
      </Pressable>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: blueGrotto,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    marginVertical: 10,
  },
  titleText: {
    color: babyBlue,
    textTransform: "uppercase",
    fontFamily: "SpaceGroteskBold",
  },
});

export default Button;
