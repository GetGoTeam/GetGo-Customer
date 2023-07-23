import { StyleSheet, Text, View } from "react-native";
import { colors, text } from "@utils/colors.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function BookingBtn(props) {
  const { title, icon } = props;

  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={icon} style={styles.icon} size={35} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary_200,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  icon: {
    marginRight: 20,
    color: text.color_800,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: text.color_800,
  },
});
