import { Text, View, Image } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { colors, text } from "~utils/colors.js";

const RecommendationItem = (props) => {
  const { address } = props;

  const getShortedAddress = (address) => {
    if (!address) return "N/A";
    const firstCommaIndex = address.indexOf(",");
    return address.substring(0, firstCommaIndex);
  };

  const getDetailAddress = (address) => {
    if (!address) return "N/A";
    const firstCommaIndex = address.indexOf(",");
    const lastCommaIndex = address.lastIndexOf(",");
    return address.substring(firstCommaIndex + 2, lastCommaIndex);
  };

  return (
    <View style={styles.container}>
      <View style={styles.item_container}>
        <View style={styles.icon_container}>
          <FontAwesomeIcon icon={faLocationDot} size={12} color="white" />
        </View>
        <View style={styles.address_container}>
          <Text style={styles.address1}>{getShortedAddress(address)}</Text>
          <Text style={styles.address2}>{getDetailAddress(address)}</Text>
        </View>
      </View>
      <FontAwesomeIcon icon={faChevronRight} size={16} color={colors.primary_300} />
    </View>
  );
};

export default RecommendationItem;
