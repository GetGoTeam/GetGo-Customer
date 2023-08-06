import EStyleSheet from "react-native-extended-stylesheet";
import { colors, text } from "~utils/colors.js";

const styles = EStyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "75%",
  },
  locationContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary_100,
    padding: "1.2rem",
    borderRadius: 5,
    marginTop: "1.5rem",
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
  markerContainer: {
    position: "absolute",
    top: "35%",
    display: "flex",
    alignItems: "center",
  },
  markerHead: {
    backgroundColor: "white",
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 2,
  },
  markerBody: {
    width: 2,
    height: 15,
    backgroundColor: colors.primary_300,
    position: "relative",
    bottom: 8,
  },
  markerFoot: {
    width: 10,
    height: 8,
    borderRadius: 100,
    backgroundColor: text.color_400,
    borderWidth: 2,
    borderColor: text.color_300,
    position: "relative",
    bottom: -11,
  },
});

export default styles;
