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
});

export default styles;
