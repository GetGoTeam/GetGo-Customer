import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleDot, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { colors, text } from "~utils/colors.js";

const BookNow = () => {
  const maxLength = 50;

  const origin = "227 Nguyễn Văn Cừ";
  const destination = "300 An Dương Vương";

  return (
    <View style={styles.containter}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon icon={faCircleDot} size={26} color={colors.primary_300} />
          <View style={styles.locationLine} />
          <FontAwesomeIcon icon={faLocationDot} size={30} color={colors.primary_300} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.locationText}>{truncateString(origin, maxLength)}</Text>
          <View style={styles.divLine} />
          <Text style={styles.locationText}>{truncateString(destination, maxLength)}</Text>
        </View>
      </View>
    </View>
  );
};

export default BookNow;

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
