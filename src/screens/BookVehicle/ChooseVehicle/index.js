import { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import ChooseVehicleItem from "~components/ChooseVehicleItem";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectVehicleType, setVehicleType } from "~/slices/navSlice";
import { useSelector } from "react-redux";

const roundNumber = (n) => {
  return Math.round(n / 1000) * 1000 + 1000;
};

const ChooseVehicle = (props) => {
  const vehicleType = useSelector(selectVehicleType);
  const [chooseIndex, setChooseIndex] = useState(vehicleType === "motorcycle" ? 0 : 1);
  const dispatch = useDispatch();
  const { setVehicleChoose, distanceMotocycle, distanceCar } = props;
  const chooseVehicleData = [
    {
      title: "Xe máy",
      icon: require("~assets/motorcycle.png"),
      price: roundNumber((10000 * distanceMotocycle) / 1000),
      type: "motorcycle",
    },
    {
      title: "Xe hơi 4 chỗ",
      icon: require("~assets/car.png"),
      price: roundNumber((20000 * distanceCar) / 1000),
      type: "car4",
    },
    {
      title: "Xe hơi 7 chỗ",
      icon: require("~assets/car.png"),
      price: roundNumber((30000 * distanceCar) / 1000),
      type: "car7",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.chooseVehicleContainer}>
        {chooseVehicleData.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={index}
            onPress={() => {
              setChooseIndex(index);
              dispatch(setVehicleType(item.type));
              setVehicleChoose(item.type);
            }}
          >
            {index === 0 && <View style={styles.divLine} />}
            <ChooseVehicleItem
              key={index}
              title={item.title}
              icon={item.icon}
              price={item.price}
              active={chooseIndex === index ? true : false}
            />
            <View style={styles.divLine} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ChooseVehicle;
