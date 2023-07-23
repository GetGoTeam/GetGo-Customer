import { Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import styles from "./styles";

export default function BookingBtn(props) {
  const { title, icon } = props;

  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={icon} style={styles.icon} size={35} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
