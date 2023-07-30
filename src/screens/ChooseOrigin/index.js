import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";
import GoogleMap from "~components/GoogleMap";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft, faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import CustomBtn from "~components/Button/CustomBtn";
import { colors, text } from "~utils/colors.js";

const ChooseOrigin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <GoogleMap />
      </View>
      <View style={styles.backBtn}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faAngleLeft} size={22} color={"rgba(0, 0, 0, 0.8)"} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.locationContainer}>
          <View style={styles.icon}>
            <FontAwesomeIcon icon={faCircleDot} size={25} color={colors.primary_300} />
          </View>
          <View>
            <Text style={styles.text1}>103 Trần Đình Xu</Text>
            <Text style={styles.text2}>103 Trần Đình Xu, P.Nguyễn Cư Trinh, Q.1, TP.HCM</Text>
          </View>
        </View>
        <View style={styles.confirmBtn}>
          <TouchableOpacity onPress={() => navigation.navigate("BookVehicle")}>
            <CustomBtn title="Chọn điểm đón này" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChooseOrigin;
