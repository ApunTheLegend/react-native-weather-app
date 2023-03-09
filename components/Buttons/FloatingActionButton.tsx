import { TouchableOpacity, Pressable, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

import type { RootState } from "../../store/store";
import { ThemeInterface } from "../../constants/constants";

type FloatingActionButtonType = {
  onPress: () => void;
  title: string;
};

const FloatingActionButton = ({ onPress, title }: FloatingActionButtonType) => {
  const theme = useSelector(
    (state: RootState) => state.theme
  ) as ThemeInterface;

  return (
    <TouchableOpacity
      style={[styles.fab, { backgroundColor: theme.primaryColor }]}
    >
      <Pressable onPress={onPress}>
        <Text style={[styles.fabText, { color: theme.textColor }]}>
          {title}
        </Text>
      </Pressable>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 5,
    right: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  fabText: {
    textTransform: "uppercase",
    fontFamily: "SpaceGroteskBold",
  },
});

export default FloatingActionButton;
