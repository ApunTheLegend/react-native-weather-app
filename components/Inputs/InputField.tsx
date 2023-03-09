import { TextInput, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";
import { ThemeInterface } from "../../constants/constants";

type InputFieldProps = {
  placeholder: string;
  onChangeText: (value: string) => void;
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
    paddingHorizontal: 15,
    fontSize: 15,
    fontFamily: "SpaceGroteskMedium",
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
    marginBottom: 10,
    width: 150,
  },
});

export default InputField;
