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
    height: "50%",
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
  chooseVehicleContainer: {
    display: "flex",
    flexDirection: "column",
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
    width: "90%",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
  },
  title: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: text.color_700,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: text.color_700,
  },
});

export default styles;
