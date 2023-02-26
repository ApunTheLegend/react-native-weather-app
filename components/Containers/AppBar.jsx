import { Text, View, StyleSheet } from "react-native";

import { blueGrotto, babyBlue } from "../../constants/constants";

const AppBar = ({ title }) => {
  return (
    <View style={styles.appBar}>
      <Text style={styles.appBarTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    position: "absolute",
    backgroundColor: blueGrotto,
    width: "100%",
    height: 100,
    top: 0,
    alignItems: "center",
  },
  appBarTitle: {
    position: "absolute",
    bottom: 10,
    fontFamily: "SpaceGroteskBold",
    color: babyBlue,
    fontSize: 25,
    textAlign: "center",
  },
});

export default AppBar;
