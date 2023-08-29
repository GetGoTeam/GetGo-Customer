import EStyleSheet from "react-native-extended-stylesheet";
import { colors, text } from "~utils/colors.js";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  heading_container: {
    backgroundColor: colors.primary_300,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "3rem",
    padding: "1rem",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  heading_left: {
    flexDirection: "row",
    alignItems: "center",
  },
  heading_left_infor: {
    marginLeft: "1rem",
    flexDirection: "row",
    alignItems: "center",
  },
  infor_image: {
    height: 40,
    width: 40,
    borderRadius: 100,
    resizeMode: "cover",
  },
  infor_text: {
    fontSize: "1.2rem",
    color: "white",
    fontWeight: "bold",
    marginLeft: "1rem",
  },
  mess_container: {
    backgroundColor: colors.primary_50,
    padding: "1rem",
  },
  mess_receive: {
    width: "auto",
    maxWidth: "18rem",
    padding: 10,
    marginBottom: 20,
    backgroundColor: colors.primary_75,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  mess_send: {
    width: "auto",
    maxWidth: "18rem",
    padding: 10,
    marginBottom: 20,
    backgroundColor: colors.primary_100,
    borderRadius: 10,
    alignSelf: "flex-end",
  },
  mess_txt: {
    fontSize: "1rem",
    color: text.color_800,
  },
  mess_time: {
    fontSize: "0.75rem",
    color: text.color_500,
    alignSelf: "flex-end",
  },
  chat_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: colors.primary_50,
    borderTopWidth: 0.5,
    borderColor: text.color_200,
  },
  chat_input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: "1rem",
    borderRadius: 100,
    backgroundColor: "#fafafa",
    borderWidth: 1,
    borderColor: text.color_300,
    marginRight: 15,
  },
});

export default styles;
