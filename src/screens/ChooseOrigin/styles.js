import { StyleSheet } from "react-native";
import { colors, text } from "~utils/colors.js";

const styles = StyleSheet.create({
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
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
    width: "90%",
  },
  locationContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary_100,
    padding: 20,
    borderRadius: 5,
    marginBottom: 30,
    width: "100%",
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  text1: {
    fontSize: 16,
    fontWeight: "bold",
    color: text.color_900,
  },
  text2: {
    fontSize: 12,
    color: text.color_600,
  },
  confirmBtn: {
    width: "100%",
  },
});

export default styles;
