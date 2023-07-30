import { StyleSheet } from "react-native";
import { colors, text } from "~utils/colors.js";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  chooseVehicleContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  pullBarContainer: {
    display: "flex",
    width: "100%",
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  pullBar: {
    width: 50,
    height: 3,
    backgroundColor: text.color_300,
  },
});

export default styles;
