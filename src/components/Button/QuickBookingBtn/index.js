import { Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import styles from "./styles";

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
