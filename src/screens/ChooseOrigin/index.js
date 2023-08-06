import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";
import GoogleMap from "~components/GoogleMap";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft, faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import CustomBtn from "~components/Button/CustomBtn";
import { colors, text } from "~utils/colors.js";
import LocationPicker from "~components/LocationPicker";

const ChooseOrigin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.locationPickerContainer}>
        <LocationPicker />
        <View style={styles.confirmBtn}>
          <TouchableOpacity onPress={() => navigation.navigate("BookVehicle")}>
            <CustomBtn title="Chọn điểm đón này" />
          </TouchableOpacity>
        </View>
        <View style={styles.backBtn}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faAngleLeft} size={22} color={"rgba(0, 0, 0, 0.8)"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChooseOrigin;
