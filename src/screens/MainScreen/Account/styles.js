import { StyleSheet } from "react-native";
import { colors, text } from "~utils/colors.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary_50,
  },
  content: {
    marginTop: 50,
  },
  personalInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 1000,
    resizeMode: "cover",
  },
  usernameContainer: {
    marginLeft: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: text.color_700,
  },
  vipContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  vipRegisterText: {
    fontSize: 13,
    fontWeight: 500,
    color: text.color_400,
    marginRight: 3,
  },
  vipIcon: {
    width: 25,
    height: 25,
  },
  isVipText: {
    fontSize: 13,
    fontWeight: 900,
    color: colors.primary_300,
    marginLeft: 3,
  },
  toolContainer: {
    marginTop: 50,
  },
  divLine: {
    width: "100%",
    height: 1,
    backgroundColor: text.color_300,
  },
  toolItem: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
});

export default styles;
