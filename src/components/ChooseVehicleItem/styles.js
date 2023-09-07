import EStyleSheet from "react-native-extended-stylesheet";
import { colors, text } from "~utils/colors.js";

const styles = EStyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "1.2rem",
    paddingVertical: "0.75rem",
    width: "100%",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
  },
  title: {
    marginLeft: "1rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: text.color_800,
  },
  price: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: text.color_800,
  },
  icon: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  priceContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  surcharge: {
    fontSize: "0.7rem",
    fontWeight: 400,
    color: text.color_500,
  },
});

export default styles;
