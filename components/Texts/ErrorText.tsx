import { Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import type { RootState } from "../../store/store";
import type { ThemeInterface } from "../../constants/constants";

type ErrorTextProps = {
  errorText: string;
};

const ErrorText = ({ errorText }: ErrorTextProps) => {
  const theme = useSelector(
    (state: RootState) => state.theme
  ) as ThemeInterface;

  return (
    <Text style={[styles.error, { color: theme.textColor }]}>{errorText}</Text>
  );
};

const styles = StyleSheet.create({
  error: {
    fontFamily: "SpaceGroteskRegular",
    fontSize: 15,
    marginVertical: 10,
  },
});

export default ErrorText;
