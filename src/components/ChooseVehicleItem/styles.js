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
    marginLeft: "0.75rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: text.color_800,
  },
  price: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: text.color_800,
    marginRight: "0.5rem",
  },
  icon: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  priceContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default styles;
