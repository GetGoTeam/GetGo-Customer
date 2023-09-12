import EStyleSheet from "react-native-extended-stylesheet";
import { colors, text } from "~utils/colors.js";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary_50,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  background: {
    height: "55%",
    width: "120%",
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 260,
    borderTopLeftRadius: 170,
  },
  backBtn: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  logo: {
    height: "6.5rem",
    resizeMode: "contain",
    marginBottom: "2.5rem",
  },
  content: {
    width: "85%",
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: 5,
    elevation: 8,
  },
  textInput: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
  text: {
    color: text.color_400,
  },
  confirm: {
    marginTop: "1.5rem",
  },
});

export default styles;
