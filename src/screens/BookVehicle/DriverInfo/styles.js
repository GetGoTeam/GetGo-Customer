import { StyleSheet } from "react-native";
import { colors, text } from "~utils/colors.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary_50,
    justifyContent: "flex-start",
    width: "100%",
  },
  notification: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    color: text.color_800,
  },
  begin: {
    fontSize: 16,
    fontWeight: 600,
    marginLeft: 20,
    color: text.color_600,
  },
  divLine: {
    width: "100%",
    height: 1,
    backgroundColor: text.color_300,
    marginVertical: 15,
  },
  driverInfoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  personalInfoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    height: 45,
    width: 45,
    resizeMode: "center",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: text.color_300,
  },
  nameRateContainer: {
    display: "flex",
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 600,
    color: text.color_800,
  },
  rateContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  rate: {
    fontSize: 15,
    fontWeight: 600,
    color: text.color_800,
    marginRight: 3,
  },
  vehicleInfoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  plate: {
    fontSize: 22,
    fontWeight: "bold",
    color: text.color_800,
  },
  vehicleNameContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  vehicleName: {
    fontSize: 15,
    fontWeight: 500,
    color: text.color_600,
    marginLeft: 5,
  },
  chatContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
  chatBar: {
    width: "85%",
  },
  callIcon: {
    marginLeft: 10,
  },
});

export default styles;
