import EStyleSheet from "react-native-extended-stylesheet";
import { colors, text } from "~utils/colors.js";

const styles = EStyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: "1rem",
  },
  item_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon_container: {
    backgroundColor: colors.primary_300,
    width: 22,
    height: 22,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  address_container: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "1rem",
  },
  address1: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: text.color_700,
  },
  address2: {
    fontSize: "0.75rem",
    fontWeight: 500,
    color: text.color_500,
  },
});

export default styles;
