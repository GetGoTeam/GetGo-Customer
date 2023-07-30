import { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import GoogleMap from "~components/GoogleMap";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft, faMotorcycle, faCarSide } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import CustomBtn from "~components/Button/CustomBtn";
import ChooseVehicleItem from "~components/ChooseVehicleItem";
import { useState } from "react";

const chooseVehicleData = [
  {
    title: "Xe máy",
    icon: faMotorcycle,
    price: 30000,
  },
  {
    title: "Xe hơi 4 chỗ",
    icon: faCarSide,
    price: 50000,
  },
  {
    title: "Xe hơi 7 chỗ",
    icon: faCarSide,
    price: 80000,
  },
];

const ChooseVehicle = () => {
  const navigation = useNavigation();

  const [chooseIndex, setChooseIndex] = useState(0);

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
      <View style={styles.contentContainer}>
        <View style={styles.pullBarContainer}>
          <View style={styles.pullBar} />
        </View>

        <View style={styles.content}>
          <View style={styles.chooseVehicleContainer}>
            {chooseVehicleData.map((item, index) => (
              <TouchableOpacity onPress={() => setChooseIndex(index)} activeOpacity={0.8} key={index}>
                <ChooseVehicleItem
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  price={item.price}
                  active={chooseIndex === index ? true : false}
                />
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.confirmBtn}>
            <TouchableOpacity>
              <CustomBtn title="Đặt xe" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChooseVehicle;
