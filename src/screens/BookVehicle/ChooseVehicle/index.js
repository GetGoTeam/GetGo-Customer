import { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import CustomBtn from "~components/Button/CustomBtn";
import ChooseVehicleItem from "~components/ChooseVehicleItem";
import { useState } from "react";

const chooseVehicleData = [
  {
    title: "Xe máy",
    icon: require("~assets/motorcycle.png"),
    price: 30000,
  },
  {
    title: "Xe hơi 4 chỗ",
    icon: require("~assets/car.png"),
    price: 50000,
  },
  {
    title: "Xe hơi 7 chỗ",
    icon: require("~assets/car.png"),
    price: 80000,
  },
];

const ChooseVehicle = () => {
  const [chooseIndex, setChooseIndex] = useState(0);

  return (
    <View style={styles.container}>
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
  );
};

export default ChooseVehicle;
