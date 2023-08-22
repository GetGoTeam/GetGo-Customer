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
  backBtn: {
    position: "absolute",
    top: 50,
    left: 20,
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
    paddingHorizontal: "1.3rem",
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
  checkboxContainer: {
    marginVertical: "1.5rem",
    width: "85%",
  },
  checkboxItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "1rem",
  },
  checkbox: {
    width: "1rem",
    height: "1rem",
  },
  checkboxLabel: {
    marginLeft: "0.6rem",
    color: text.color_700,
    fontWeight: 500,
    fontSize: "0.9rem",
  },
  TextInputContainer: {
    width: "85%",
    height: "8rem",
    borderColor: text.color_300,
    borderWidth: 1,
    borderRadius: 8,
  },
  textInput: {
    textAlignVertical: "top",
    padding: "1rem",
  },
  confirm: {
    width: "85%",
    position: "absolute",
    bottom: "2rem",
  },
});

export default styles;
