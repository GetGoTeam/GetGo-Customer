import { StyleSheet } from "react-native";
import { colors, text } from "@utils/colors.js";

const styles = StyleSheet.create({
  slide: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },
});

export default styles;
