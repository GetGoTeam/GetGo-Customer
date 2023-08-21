import EStyleSheet from "react-native-extended-stylesheet";
import { colors, text } from "~utils/colors.js";
import { fontSize } from "./../../utils/sizes";

const styles = EStyleSheet.create({
  container: {
    backgroundColor: colors.primary_50,
    displax: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

export default styles;
