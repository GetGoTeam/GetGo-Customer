import { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import ChooseVehicleItem from "~components/ChooseVehicleItem";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectVehicleType, setVehicleType, selectOrigin, selectDestination } from "~/slices/navSlice";
import { useSelector } from "react-redux";
import { GOONG_APIKEY } from "@env";
import axios from "axios";

const DefaultChooseVehicleData = [
  {
    title: "Xe máy",
    icon: require("~assets/motorcycle.png"),
    price: 30000,
    type: "motorcycle",
  },
  {
    title: "Xe hơi 4 chỗ",
    icon: require("~assets/car.png"),
    price: 50000,
    type: "car4",
  },
  {
    title: "Xe hơi 7 chỗ",
    icon: require("~assets/car.png"),
    price: 80000,
    type: "car7",
  },
];

const getDistance = async (oriLat, oriLng, desLat, desLng, vehicle) => {
  const url = `https://rsapi.goong.io/DistanceMatrix?origins=${oriLat},${oriLng}&destinations=${desLat},${desLng}&vehicle=${vehicle}&api_key=${GOONG_APIKEY}`;

  try {
    const response = await axios.get(url);
    if (response.data) {
      const distance = response.data.rows[0].elements[0].distance.value;
      return distance;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting place from coordinates:", error);
    return "Error";
  }
};

const roundNumber = (n) => {
  return Math.round(n / 1000) * 1000 + 1000;
};

const ChooseVehicle = () => {
  const vehicleType = useSelector(selectVehicleType);
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const [chooseIndex, setChooseIndex] = useState(vehicleType === "motorcycle" ? 0 : 1);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [chooseVehicleData, setChooseVehicleData] = useState(DefaultChooseVehicleData);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const distance = await getDistance(
          origin.latitude,
          origin.longitude,
          destination.latitude,
          destination.longitude,
          vehicleType === "motorcycle" ? "bike" : "car"
        );

        setChooseVehicleData([
          {
            title: "Xe máy",
            icon: require("~assets/motorcycle.png"),
            price: roundNumber((15000 * distance) / 1000),
            type: "motorcycle",
          },
          {
            title: "Xe hơi 4 chỗ",
            icon: require("~assets/car.png"),
            price: roundNumber((30000 * distance) / 1000),
            type: "car4",
          },
          {
            title: "Xe hơi 7 chỗ",
            icon: require("~assets/car.png"),
            price: roundNumber((50000 * distance) / 1000),
            type: "car7",
          },
        ]);
      } catch (error) {
        console.error("Lỗi tính quãng đường:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

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
