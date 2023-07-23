import { StyleSheet, Text, View, Button } from "react-native";
import { colors, text } from "../../../utils/colors";

const Account = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Tài khoản</Text>
      </View>
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

export default Account;