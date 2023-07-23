import { StyleSheet } from "react-native";
import { colors, text } from "~utils/colors.js";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderRadius: 5,
    width: "100%",
    height: "auto",
    elevation: 8,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
