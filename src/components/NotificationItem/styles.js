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
  title_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: "1rem",
    fontWeight: 500,
    color: text.color_800,
  },
  time: {
    fontSize: "0.8rem",
    fontWeight: 500,
    color: text.color_400,
  },
  titleTime_container: {
    marginLeft: "1rem",
  },
});

export default styles;
