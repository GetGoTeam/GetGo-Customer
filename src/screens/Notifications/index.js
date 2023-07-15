import { StyleSheet, Text, View, Button } from "react-native";
import NavBar from "../../components/NavBar";
import { colors, text } from "../../utils/colors";

const Notifications = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Thông báo</Text>
      </View>
      <NavBar navigation={navigation} activeIndex={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary_50,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Notifications;
