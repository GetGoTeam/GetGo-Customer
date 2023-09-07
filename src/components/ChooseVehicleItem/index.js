import { View, Text, Image } from "react-native";
import styles from "./styles";
import { colors } from "~utils/colors.js";

function numberWithCommas(x) {
  if (!x) return 0;
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
  return x;
}

const ChooseVehicleItem = (props) => {
  const { icon, title, price, active, surcharge } = props;

  return (
    <View style={[styles.container, { backgroundColor: active ? colors.primary_100 : colors.primary_50 }]}>
      <View style={styles.titleContainer}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{numberWithCommas(price)}₫</Text>
        <Text style={styles.surcharge}>&#40;phụ thu {numberWithCommas(surcharge)}₫&#41;</Text>
      </View>
    </View>
  );
};

export default ChooseVehicleItem;
