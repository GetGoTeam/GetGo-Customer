import { Text, View, Image } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { text } from "~utils/colors.js";

const ToolItem = (props) => {
  const { title, icon } = props;

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <FontAwesomeIcon icon={icon} size={24} color={text.color_700} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <FontAwesomeIcon icon={faChevronRight} size={16} color={text.color_700} />
    </View>
  );
};

export default ToolItem;
