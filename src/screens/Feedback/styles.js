import EStyleSheet from "react-native-extended-stylesheet";
import { colors, text } from "~utils/colors.js";
import { fontSize } from "./../../utils/sizes";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary_50,
    alignItems: "center",
    width: "100%",
  },
  reportContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 25,
    marginTop: "3rem",
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: "5rem",
  },
  avatar: {
    height: "5rem",
    width: "5rem",
    resizeMode: "center",
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: text.color_300,
  },
  textContainer: {
    marginTop: "1.5rem",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "1.5rem",
  },
  text1: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: text.color_700,
  },
  text2: {
    fontSize: "0.9rem",
    marginTop: 5,
    fontWeight: 500,
    color: text.color_500,
    textAlign: "center",
  },
  ratingBar: {
    backgroundColor: "transparent",
  },
  ratingBar: {
    marginVertical: "1.5rem",
    width: "100%",
  },
});

export default styles;
