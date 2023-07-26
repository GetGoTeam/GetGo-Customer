import { Text, View } from "react-native";
import styles from "./styles";
import GoogleMap from "~components/GoogleMap";

const Activities = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* <Text>Hoạt động</Text> */}
        <GoogleMap />
      </View>
    </View>
  );
};

export default Activities;
