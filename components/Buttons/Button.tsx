import { StyleSheet, Pressable, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import type { RootState } from "../../store/store";
import { ThemeInterface } from "../../constants/constants";

type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

const Button = ({ title, onPress, disabled }: ButtonProps) => {
  const theme = useSelector(
    (state: RootState) => state.theme
  ) as ThemeInterface;

  return (
    <TouchableOpacity>
      <Pressable
        onPress={onPress}
        style={[styles.button, { backgroundColor: theme.primaryColor }]}
        disabled={disabled}
      >
        <Text style={[styles.titleText, { color: theme.textColor }]}>
          {title}
        </Text>
      </Pressable>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: "flex-start",
  },
  titleText: {
    textTransform: "uppercase",
    fontFamily: "SpaceGroteskBold",
  },
});

export default Button;
