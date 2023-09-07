import { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import ChooseVehicleItem from "~components/ChooseVehicleItem";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectVehicleType, setVehicleType } from "~/slices/navSlice";
import { useSelector } from "react-redux";
import { request } from "~utils/request";
import Tooltip from "react-native-walkthrough-tooltip";

const roundNumber = (n) => {
  if (n === 0) return 0;
  return Math.round(n / 1000) * 1000 + 1000;
};

const ChooseVehicle = (props) => {
  const vehicleType = useSelector(selectVehicleType);
  const [chooseIndex, setChooseIndex] = useState(vehicleType === "motorcycle" ? 0 : 1);
  const dispatch = useDispatch();
  const { setVehicleChoose, distanceMotocycle, distanceCar, origin, setLoading } = props;
  const [loadingPrice, setLoadingPrice] = useState(false);
  const [motorcyclePrice, setMotorcyclePrice] = useState(0);
  const [motorcycleSurcharge, setMotorcycleSurcharge] = useState(0);
  const [car4Price, setCar4Price] = useState(0);
  const [car4Surcharge, setCar4Surcharge] = useState(0);
  const [car7Price, setCar7Price] = useState(0);
  const [car7Surcharge, setCar7Surcharge] = useState(0);
  const [surchargeReason, setSurchargeReason] = useState();

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
              const tripCost = res.data.tripCost;
              setMotorcyclePrice(tripCost.totalCost);
              setMotorcycleSurcharge(tripCost.surcharge);
              setSurchargeReason(tripCost.reason);
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
              const tripCost = res.data.tripCost;
              setCar4Price(tripCost.totalCost);
              setCar4Surcharge(tripCost.surcharge);
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
              const tripCost = res.data.tripCost;
              setCar7Price(tripCost.totalCost);
              setCar7Surcharge(tripCost.surcharge);
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
      surcharge: roundNumber(motorcycleSurcharge),
      type: "motorcycle",
    },
    {
      title: "Xe hơi 4 chỗ",
      icon: require("~assets/car.png"),
      price: roundNumber(car4Price),
      surcharge: roundNumber(car4Surcharge),
      type: "car4",
    },
    {
      title: "Xe hơi 7 chỗ",
      icon: require("~assets/car.png"),
      price: roundNumber(car7Price),
      surcharge: roundNumber(car7Surcharge),
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
                surcharge={item.surcharge}
                surchargeReason={surchargeReason}
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
