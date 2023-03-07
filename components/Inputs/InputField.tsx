import { TextInput, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";
import { ThemeInterface } from "../../constants/constants";

type InputFieldProps = {
  placeholder: string;
  onChangeText: () => void;
};

const InputField = ({ placeholder, onChangeText }: InputFieldProps) => {
  const theme = useSelector(
    (state: RootState) => state.theme
  ) as ThemeInterface;

  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={theme.primaryColor}
      onChangeText={onChangeText}
      style={[styles.textInput, { color: theme.textColor }]}
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
  },
});

export default InputField;
