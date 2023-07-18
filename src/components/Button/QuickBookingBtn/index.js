import { StyleSheet, Text, View } from "react-native";
import { colors, text } from "../../../utils/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

function truncateString(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  } else {
    const truncatedStr = str.substring(0, maxLength);
    const lastSpaceIndex = truncatedStr.lastIndexOf(" ");
    const truncatedWithEllipsis = truncatedStr.substring(0, lastSpaceIndex);
    return truncatedWithEllipsis + "...";
  }
}

export default function QuickBookingBtn(props) {
  const { des, icon } = props;
  const maxLength = 25;

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>Đặt xe đến</Text>
        <Text style={styles.des}>{truncateString(des, maxLength)}</Text>
      </View>
      <FontAwesomeIcon icon={icon} style={styles.icon} size={35} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: colors.primary_200,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  text: {
    marginRight: 20,
  },
  icon: {
    marginRight: 10,
    color: "rgba(0, 0, 0, 0.8)",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: text.color_600,
    marginBottom: 3,
  },
  des: {
    fontSize: 20,
    fontWeight: "bold",
    color: text.color_800,
  },
});
