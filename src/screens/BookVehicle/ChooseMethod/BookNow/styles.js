import EStyleSheet from "react-native-extended-stylesheet";
import { colors, text } from "~utils/colors.js";

const styles = EStyleSheet.create({
  containter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  content: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    flex: 1,
    marginLeft: 15,
  },
  locationText: {
    fontSize: "1rem",
    fontWeight: 600,
    color: text.color_800,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationLine: {
    width: 2,
    flexGrow: 1,
    backgroundColor: colors.primary_300,
    marginVertical: 5,
  },
  divLine: {
    width: "100%",
    height: 1,
    backgroundColor: text.color_300,
    marginVertical: "1rem",
  },
});

export default styles;
