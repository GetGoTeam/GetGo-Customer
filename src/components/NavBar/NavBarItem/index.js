import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { colors, text } from "./../../../utils/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function NavBarItem(props) {
  const { title, icon, active, navigation, navigate } = props;

  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigate)}>
      <View style={styles.container}>
        <FontAwesomeIcon icon={icon} style={[styles.icon, active ? styles.active : ""]} size={25} />
        <Text style={[styles.title, active ? styles.active : ""]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  title: {
    fontSize: 15,
    color: text.color_400,
    fontWeight: "bold",
  },
  icon: {
    color: text.color_400,
  },
  active: {
    color: colors.primary_300,
  },
});