import { StyleSheet } from "react-native";
import { colors, text } from "~utils/colors.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary_50,
  },
  content: {
    flex: 1,
    marginTop: 50,
  },
  title: {
    marginLeft: 15,
    fontSize: 30,
    fontWeight: "bold",
    color: text.color_800,
    marginBottom: 30,
  },
  time: {
    marginLeft: 15,
    fontSize: 22,
    fontWeight: 600,
    color: text.color_700,
    marginBottom: 20,
  },
  divLine: {
    width: "100%",
    height: 1,
    backgroundColor: text.color_300,
  },
  activityItem: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
});

export default styles;
