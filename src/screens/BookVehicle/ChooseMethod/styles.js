import EStyleSheet from "react-native-extended-stylesheet";
import { colors, text } from "~utils/colors.js";

const styles = EStyleSheet.create({
  container: {
    width: "90%",
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  findingDriverContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  findingDriverIcon: {
    height: "3rem",
    width: "3rem",
    resizeMode: "contain",
  },
  findingDriverText: {
    marginHorizontal: "1rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: text.color_800,
  },
  divLine: {
    width: "100%",
    height: 1,
    backgroundColor: text.color_300,
    marginVertical: "1rem",
  },
  sliderContainer: {
    flexDirection: "row",
    marginBottom: 20,
    height: 32,
    position: "relative",
  },
  sliderAnimation: {
    position: "absolute",
    width: "25%",
    height: "100%",
    top: 0,
    left: 0,
    borderWidth: 2,
    borderColor: colors.primary_300,
    borderRadius: 5,
  },
  sliderItem: {
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default styles;
