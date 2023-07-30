import { StyleSheet } from "react-native";
import { colors, text } from "~utils/colors.js";

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  sliderContainer: {
    flexDirection: "row",
    marginBottom: 20,
    height: 32,
    position: "relative",
  },
  sliderAnimation: {
    position: "absolute",
    width: "25%",
    height: "100%",
    top: 0,
    left: 0,
    borderWidth: 2,
    borderColor: colors.primary_300,
    borderRadius: 5,
  },
  sliderItem: {
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default styles;
