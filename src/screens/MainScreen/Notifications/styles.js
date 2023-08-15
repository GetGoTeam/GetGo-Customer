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
  title_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: text.color_800,
  },
  divLine: {
    width: "100%",
    height: 1,
    backgroundColor: text.color_300,
  },
  notificationItem: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
});

export default styles;
