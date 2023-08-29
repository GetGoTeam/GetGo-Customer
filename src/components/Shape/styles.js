import { StyleSheet } from "react-native";
import { colors, text } from "~utils/colors.js";

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "red",
  },
  triangleDown: {
    transform: [{ rotate: "180deg" }],
  },
  parallelogram: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
  },
  parallelogramInner: {
    backgroundColor: "red",
  },
  parallelogramRight: {
    top: 0,
    position: "absolute",
  },
  parallelogramLeft: {
    top: 0,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  label: {
    color: text.color_700,
    fontWeight: 700,
  },
});

export default styles;
