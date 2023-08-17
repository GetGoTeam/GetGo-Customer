import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import ActivityItem from "~components/ActivityItem";

const data = [
  {
    destination: "227 Nguyễn Văn Cừ",
    time: "18/06/2023 lúc 11:24",
    price: 30000,
    vehicleType: "car4",
  },
  {
    destination: "227 Nguyễn Văn Cừ",
    time: "18/06/2023 lúc 11:24",
    price: 60000,
    vehicleType: "car7",
  },
  {
    destination: "227 Nguyễn Văn Cừ",
    time: "18/06/2023 lúc 11:24",
    price: 20000,
    vehicleType: "motorcycle",
  },
];

const Activities = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Hoạt động</Text>
        <Text style={styles.time}>Gần đây</Text>
        {data.map((item, index) => (
          <View key={index}>
            <Text style={styles.divLine} />
            <TouchableOpacity style={styles.activityItem}>
              <ActivityItem
                destination={item.destination}
                time={item.time}
                price={item.price}
                vehicleType={item.vehicleType}
              />
            </TouchableOpacity>
          </View>
        ))}
        <Text style={styles.divLine} />
      </View>
    </View>
  );
};

export default Activities;
