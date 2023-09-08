import { Text, View } from "react-native";
import styles from "./styles";

function CustomBtn(props) {
  const { title, disable, onPress } = props;

  return (
    <View style={[styles.container, { opacity: disable ? 0.5 : 1 }]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default CustomBtn;
