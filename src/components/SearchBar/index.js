import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, TextInput } from "react-native";
import styles from "./styles";
import { colors, text } from "~utils/colors.js";

const SearchBar = (props) => {
  const { hint, icon, editable, bgColor, shadow } = props;

  return (
    <View style={[styles.container, shadow ? styles.shadow : null, { backgroundColor: bgColor ? bgColor : "white" }]}>
      <FontAwesomeIcon icon={icon} size={20} color={colors.primary_300} />
      <TextInput
        editable={editable}
        maxLength={35}
        style={styles.textInput}
        placeholder={hint}
        placeholderTextColor={text.color_400}
      />
    </View>
  );
};

export default SearchBar;
