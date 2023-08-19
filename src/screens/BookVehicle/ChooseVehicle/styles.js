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
  divLine: {
    width: "100%",
    height: 1,
    backgroundColor: text.color_300,
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
