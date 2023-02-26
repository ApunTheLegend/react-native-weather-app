import { TouchableOpacity, Pressable, StyleSheet, Text } from "react-native";

import { blueGrotto, babyBlue } from "../../constants/constants";

const FloatingActionButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.fab}>
      <Pressable onPress={onPress}>
        <Text style={styles.fabText}>{title}</Text>
      </Pressable>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: blueGrotto,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  fabText: {
    color: babyBlue,
    textTransform: "uppercase",
    fontFamily: "SpaceGroteskBold",
  },
});

export default FloatingActionButton;
