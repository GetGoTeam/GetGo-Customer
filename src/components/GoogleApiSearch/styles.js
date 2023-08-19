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
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default styles;
