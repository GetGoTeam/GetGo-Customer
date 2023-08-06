import { StyleSheet } from "react-native";
import { colors, text } from "~utils/colors.js";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "flex-start",
  },
  locationcontainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 600,
    color: text.color_800,
    marginLeft: 15,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationLine: {
    width: 2,
    flexGrow: 1,
    backgroundColor: colors.primary_300,
    marginVertical: 5,
  },
  divLine: {
    width: "100%",
    height: 1,
    backgroundColor: text.color_300,
    marginVertical: 20,
  },
  datetimeContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginLeft: 3,
  },
  datetimeIcon: {
    backgroundColor: colors.primary_300,
    padding: 5,
    borderRadius: 5,
  },
});

export default styles;
