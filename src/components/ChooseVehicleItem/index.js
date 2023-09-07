import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import styles from "./styles";
import { colors, text } from "~utils/colors.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

function numberWithCommas(x) {
  if (!x) return 0;
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
  return x;
}

const ChooseVehicleItem = (props) => {
  const { icon, title, price, active, surcharge, surchargeReason } = props;

  return (
    <View style={[styles.container, { backgroundColor: active ? colors.primary_100 : colors.primary_50 }]}>
      <View style={styles.titleContainer}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{numberWithCommas(price)}₫</Text>
        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              "Phụ thu",
              (surcharge === 0 ? surchargeReason : surchargeReason + ` ${numberWithCommas(surcharge)}₫`) + "."
            )
          }
        >
          <FontAwesomeIcon icon={faCircleInfo} size={20} color={text.color_600} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChooseVehicleItem;
