import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { colors, text } from "@utils/colors.js";

const SearchBar = (props) => {
  const { hint, icon, editable } = props;

  return (
    <View style={[styles.container, styles.shadow]}>
      <FontAwesomeIcon icon={icon} size={20} color={colors.primary_300} />
      <TextInput editable={editable} maxLength={35} style={styles.textInput} placeholder={hint} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderRadius: 5,
    width: "90%",
  },
  shadow: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 8, // Áp dụng shadow cho Android
  },
  textInput: {
    padding: 10,
    width: "100%",
    fontSize: 16,
  },
});

export default SearchBar;
