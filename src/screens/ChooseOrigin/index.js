import { TouchableOpacity, View, Image, Text } from "react-native";
import styles from "./styles";
import GoogleMap from "~components/GoogleMap";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import CustomBtn from "~components/Button/CustomBtn";

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
          <Image source={require("~assets/location.png")} style={styles.icon} />
          <View>
            <Text style={styles.text1}>103 Trần Đình Xu</Text>
            <Text style={styles.text2}>103 Trần Đình Xu, P.Nguyễn Cư Trinh, Q.1, TP.HCM</Text>
          </View>
        </View>
        <View style={styles.confirmBtn}>
          <TouchableOpacity>
            <CustomBtn title="Chọn điểm đón này" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChooseOrigin;
