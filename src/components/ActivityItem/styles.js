import EStyleSheet from "react-native-extended-stylesheet";
import { colors, text } from "~utils/colors.js";
import { fontSize } from "./../../utils/sizes";

const styles = EStyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: "3rem",
    width: "3rem",
    resizeMode: "contain",
  },
  text_container: {
    marginHorizontal: 10,
    flex: 1,
  },
  destination: {
    fontSize: "1rem",
    fontWeight: 500,
    color: text.color_800,
  },
  time: {
    fontSize: "0.8rem",
    fontWeight: 500,
    color: text.color_400,
  },
  price: {
    fontSize: "1rem",
    fontWeight: 600,
    color: text.color_800,
  },
});

export default styles;
