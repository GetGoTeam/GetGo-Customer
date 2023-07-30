import { StyleSheet } from "react-native";
import { colors, text } from "~utils/colors.js";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary_200,
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  icon: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: text.color_800,
    marginLeft: 10,
  },
});

export default styles;
