import { Text, View, TouchableOpacity, ScrollView, Alert } from "react-native";
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
  const deleteAll = () => {
    Alert.alert("Xóa toàn bộ thông báo", "Bạn có chắc muốn xóa toàn bộ thông báo hay không?", [
      {
        text: "Hủy",
        style: "cancel",
      },
      {
        text: "Đồng ý",
        onPress: () => {},
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.title_container}>
          <Text style={styles.title}>Thông báo</Text>
          <TouchableOpacity onPress={deleteAll}>
            <FontAwesomeIcon icon={faTrashCan} size={24} color={text.color_700} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          {data.map((item, index) => (
            <View key={index}>
              <Text style={styles.divLine} />
              <TouchableOpacity style={styles.notificationItem}>
                <NotificationItem title={item.title} time={item.time} />
              </TouchableOpacity>
            </View>
          ))}
          <Text style={styles.divLine} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Notifications;
