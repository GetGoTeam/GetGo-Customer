import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleDot, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";
import { colors, text } from "~utils/colors.js";
import { useState } from "react";

const Schedule = () => {
  const [time, setTime] = useState();
  const maxLength = 50;

  const origin = "227 Nguyễn Văn Cừ";
  const destination = "300 An Dương Vương";

  return (
    <View style={styles.containter}>
      <View style={styles.locationcontainer}>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon icon={faCircleDot} size={26} color={colors.primary_300} />
          <View style={styles.locationLine} />
          <FontAwesomeIcon icon={faLocationDot} size={30} color={colors.primary_300} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{truncateString(origin, maxLength)}</Text>
          <View style={styles.divLine} />
          <Text style={styles.text}>{truncateString(destination, maxLength)}</Text>
        </View>
      </View>
      <View style={styles.divLine} />
      <TouchableOpacity>
        <View style={styles.datetimeContainer}>
          <View style={styles.datetimeIcon}>
            <FontAwesomeIcon icon={faClock} size={16} color={colors.primary_50} />
          </View>
          <Text style={styles.text}>{time ? time : "Chọn thời gian đặt xe"}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Schedule;

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
