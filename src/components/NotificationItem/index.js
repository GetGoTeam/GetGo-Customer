import { Text, View, Image } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { text } from "~utils/colors.js";

const NotificationItem = (props) => {
  const { title, time } = props;

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <FontAwesomeIcon icon={faBell} size={24} color={text.color_700} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

export default NotificationItem;
