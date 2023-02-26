import { TextInput, StyleSheet } from "react-native";

import { babyBlue, blueGrotto } from "../../constants/constants";

const InputField = ({ placeholder, onChangeText }) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={blueGrotto}
      onChangeText={onChangeText}
      style={styles.textInput}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 15,
    fontFamily: "SpaceGroteskMedium",
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
    marginBottom: 10,
    width: "50%",
    color: babyBlue,
  },
});

export default InputField;
