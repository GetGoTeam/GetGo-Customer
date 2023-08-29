import { TouchableOpacity, View, Text, Image } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar, faMotorcycle, faComments, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { colors } from "~utils/colors.js";
import SearchBar from "~components/SearchBar";
import { useNavigation } from "@react-navigation/native";

const DriverInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.notification}>Tài xế sắp đến</Text>
      <Text style={styles.begin}>227 Nguyễn Văn Cừ</Text>
      <View style={styles.divLine} />
      <View style={styles.driverInfoContainer}>
        <View style={styles.personalInfoContainer}>
          <Image style={styles.avatar} source={require("~assets/no-avatar.png")} />
          <View style={styles.nameRateContainer}>
            <Text style={styles.name}>Nguyễn Văn A</Text>
            <View style={styles.rateContainer}>
              <Text style={styles.rate}>4.9</Text>
              <FontAwesomeIcon icon={faStar} size={13} color={"#FFCF00"} />
            </View>
          </View>
        </View>
        <View style={styles.vehicleInfoContainer}>
          <Text style={styles.plate}>49F4-490.53</Text>
          <View style={styles.vehicleNameContainer}>
            <FontAwesomeIcon icon={faMotorcycle} size={18} color={colors.primary_300} />
            <Text style={styles.vehicleName}>Yamaha - Sirius</Text>
          </View>
        </View>
      </View>
      <View style={styles.chatContainer}>
        <TouchableOpacity style={styles.chatBar} onPress={() => navigation.navigate("Chat")}>
          <SearchBar hint="Chat với tài xế" icon={faComments} bgColor={colors.primary_50} editable={false} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.callIcon}>
          <FontAwesomeIcon icon={faSquarePhone} size={50} color={colors.primary_300} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DriverInfo;
