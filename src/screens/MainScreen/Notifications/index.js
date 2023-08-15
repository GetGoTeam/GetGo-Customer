import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import NotificationItem from "~components/NotificationItem";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { colors, text } from "~utils/colors.js";

const data = [
  {
    title: "Thông báo quan trọng",
    time: "18/06/2023",
  },
  {
    title: "Thông báo quan trọng",
    time: "18/06/2023",
  },
  {
    title: "Thông báo quan trọng",
    time: "18/06/2023",
  },
];

const Notifications = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.title_container}>
          <Text style={styles.title}>Thông báo</Text>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faTrashCan} size={24} color={text.color_700} />
          </TouchableOpacity>
        </View>
        {data.map((item, index) => (
          <View key={index}>
            <Text style={styles.divLine} />
            <View style={styles.notificationItem}>
              <NotificationItem title={item.title} time={item.time} />
            </View>
          </View>
        ))}
        <Text style={styles.divLine} />
      </View>
    </View>
  );
};

export default Notifications;
