import EStyleSheet from "react-native-extended-stylesheet";
import { colors, text } from "~utils/colors.js";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary_50,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  map: {
    width: "100%",
    height: "70%",
  },
  backBtn: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "white",
    borderRadius: 100,
    padding: 5,
    elevation: 10,
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    marginVertical: 30,
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  locationContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary_100,
    padding: "1.2rem",
    borderRadius: 5,
    marginBottom: 30,
    width: "90%",
  },
  icon: {
    marginRight: "0.6rem",
    backgroundColor: "white",
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 2,
  },
  textContainer: {
    flexDirection: "column",
    display: "flex",
    width: "100%",
    paddingRight: "1.5rem",
  },
  text1: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: text.color_900,
  },
  text2: {
    fontSize: "0.75rem",
    color: text.color_600,
  },
  confirmBtn: {
    width: "90%",
    marginBottom: 5,
  },
});

export default styles;
