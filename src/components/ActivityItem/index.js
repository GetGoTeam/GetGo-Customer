import { Text, View, Image } from "react-native";
import styles from "./styles";

function numberWithCommas(x) {
  if (!x) return 0;
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
  return x;
}

const ActivityItem = (props) => {
  const { destination, time, price, vehicleType } = props;

  return (
    <View style={styles.container}>
      <Image
        source={vehicleType === "motorcycle" ? require("~assets/motorcycle.png") : require("~assets/car.png")}
        style={styles.icon}
      />
      <View style={styles.text_container}>
        <Text style={styles.destination}>Chuyến đi đến {destination}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <Text style={styles.price}>{numberWithCommas(price)}₫</Text>
    </View>
  );
};

export default ActivityItem;
