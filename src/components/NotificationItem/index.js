import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { text } from "~utils/colors.js";

const NotificationItem = (props) => {
  const { title, time, onpressDelete } = props;

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <FontAwesomeIcon icon={faBell} size={24} color={text.color_700} />
        <View style={styles.titleTime_container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
      <TouchableOpacity onpress={onpressDelete}>
        <FontAwesomeIcon icon={faTrashCan} size={24} color={text.color_700} />
      </TouchableOpacity>
    </View>
  );
};

export default NotificationItem;
