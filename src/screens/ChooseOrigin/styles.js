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
  locationPickerContainer: {
    width: "100%",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
  confirmBtn: {
    width: "90%",
    position: "absolute",
    bottom: 35,
  },
  map: {
    width: "100%",
    height: "65%",
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
    top: "26.5%",
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
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 0.15)",
    position: "relative",
    bottom: -11,
  },
});

export default styles;
