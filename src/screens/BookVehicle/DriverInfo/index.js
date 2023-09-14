import { TouchableOpacity, View, Text, Image } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar, faMotorcycle, faCarSide, faComments, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { colors } from "~utils/colors.js";
import SearchBar from "~components/SearchBar";
import { useNavigation } from "@react-navigation/native";

const DriverInfo = (props) => {
  const navigation = useNavigation();
  const { originAddress, driverInfo, notification } = props;

  const getShortedAddress = (address) => {
    if (!address) return "N/A";
    const firstCommaIndex = address.indexOf(",");
    return address.substring(0, firstCommaIndex);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.notification}>{notification}</Text>
      {originAddress && <Text style={styles.begin}>{getShortedAddress(originAddress)}</Text>}
      <View style={styles.divLine} />
      <View style={styles.driverInfoContainer}>
        <View style={styles.personalInfoContainer}>
          <Image style={styles.avatar} source={require("~assets/no-avatar.png")} />
          <View style={styles.nameRateContainer}>
            <Text style={styles.name}>{driverInfo?.username}</Text>
            <View style={styles.rateContainer}>
              <Text style={styles.rate}>{driverInfo?.rated}</Text>
              <FontAwesomeIcon icon={faStar} size={13} color={"#FFCF00"} />
            </View>
          </View>
        </View>
        <View style={styles.vehicleInfoContainer}>
          <Text style={styles.plate}>{driverInfo?.vehicle.licensePlate}</Text>
          <View style={styles.vehicleNameContainer}>
            <FontAwesomeIcon
              icon={driverInfo?.vehicle.capacity === 1 ? faMotorcycle : faCarSide}
              size={18}
              color={colors.primary_300}
            />
            <Text style={styles.vehicleName}>
              {driverInfo?.vehicle.capacity === 1
                ? "Yamaha - Sirius"
                : driverInfo?.vehicle.capacity === 4
                ? "Toyota - Vios"
                : "Mitsubishi - Xpander"}
            </Text>
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
