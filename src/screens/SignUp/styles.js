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
    height: "66%",
    width: "125%",
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: "18rem",
    borderTopLeftRadius: "9rem",
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
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default styles;
