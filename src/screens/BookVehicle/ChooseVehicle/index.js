import { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import ChooseVehicleItem from "~components/ChooseVehicleItem";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectVehicleType, setVehicleType } from "~/slices/navSlice";
import { useSelector } from "react-redux";
import Loading from "~components/Loading";
import { request } from "~utils/request";

const roundNumber = (n) => {
  return Math.round(n / 1000) * 1000 + 1000;
};

const ChooseVehicle = (props) => {
  const vehicleType = useSelector(selectVehicleType);
  const [chooseIndex, setChooseIndex] = useState(vehicleType === "motorcycle" ? 0 : 1);
  const dispatch = useDispatch();
  const { setVehicleChoose, distanceMotocycle, distanceCar, origin, setLoading } = props;
  const [loadingPrice, setLoadingPrice] = useState(false);
  const [motorcyclePrice, setMotorcyclePrice] = useState(0);
  const [car4Price, setCar4Price] = useState(0);
  const [car7Price, setCar7Price] = useState(0);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setLoadingPrice(true);
      if (distanceMotocycle && distanceCar) {
        try {
          await request
            .post("calculate-trip-price", {
              latitude: origin.latitude,
              longitude: origin.longitude,
              distance: distanceMotocycle / 1000,
              mode: 1,
            })
            .then(function (res) {
              setMotorcyclePrice(res.data.totalPrice);
            })
            .catch(function (error) {
              console.log("Calculate trip price by motorcycle error: ", error);
            });

          await request
            .post("calculate-trip-price", {
              latitude: origin.latitude,
              longitude: origin.longitude,
              distance: distanceCar / 1000,
              mode: 4,
            })
            .then(function (res) {
              setCar4Price(res.data.totalPrice);
            })
            .catch(function (error) {
              console.log("Calculate trip price by car4 error: ", error);
            });

          await request
            .post("calculate-trip-price", {
              latitude: origin.latitude,
              longitude: origin.longitude,
              distance: distanceCar / 1000,
              mode: 7,
            })
            .then(function (res) {
              setCar7Price(res.data.totalPrice);
            })
            .catch(function (error) {
              console.log("Calculate trip price by car7 error: ", error);
            });
        } finally {
          setLoading(false);
          setLoadingPrice(false);
        }
      }
    })();
  }, [distanceMotocycle, distanceCar]);

  const chooseVehicleData = [
    {
      title: "Xe máy",
      icon: require("~assets/motorcycle.png"),
      price: roundNumber(motorcyclePrice),
      type: "motorcycle",
    },
    {
      title: "Xe hơi 4 chỗ",
      icon: require("~assets/car.png"),
      price: roundNumber(car4Price),
      type: "car4",
    },
    {
      title: "Xe hơi 7 chỗ",
      icon: require("~assets/car.png"),
      price: roundNumber(car7Price),
      type: "car7",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.chooseVehicleContainer}>
        {!loadingPrice &&
          chooseVehicleData.map((item, index) => (
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
