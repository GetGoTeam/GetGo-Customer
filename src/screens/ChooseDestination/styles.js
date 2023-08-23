import EStyleSheet from "react-native-extended-stylesheet";
import { colors, text } from "~utils/colors.js";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary_50,
    alignItems: "center",
    justifyContent: "center",
  },
  GooglePlacesAutocomplete: {
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  header: {
    backgroundColor: colors.primary_200,
    height: 175,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  backBtn: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 40,
  },
  text1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.8)",
  },
  text2: {
    fontSize: 16,
    fontWeight: 500,
    color: "rgba(0, 0, 0, 0.6)",
  },
  headerImage: {
    flex: 0.8,
    resizeMode: "contain",
    alignSelf: "center",
  },
  body: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  searchBar: {
    position: "absolute",
    top: -20,
    width: "95%",
    height: "100%",
  },
  bookingBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  bookingBtnContainer: {
    width: "90%",
  },
  carousel: {
    width: "100%",
    marginTop: 30,
  },
  recommendation: {
    marginTop: 30,
    width: "90%",
  },
  divLine: {
    width: "100%",
    height: 1,
    backgroundColor: text.color_300,
  },
  confirmBtn: {
    width: "90%",
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
