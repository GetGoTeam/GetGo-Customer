import { TouchableOpacity, View, Alert } from "react-native";
import styles from "./styles";
import GoogleMap from "~components/GoogleMap";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import ChooseVehicle from "./ChooseVehicle";
import ChooseeMethod from "./ChooseMethod";
import CustomBtn from "~components/Button/CustomBtn";
import { useState, useEffect } from "react";
import DriverInfo from "./DriverInfo";
import { useSelector, useDispatch } from "react-redux";
import { selectVehicleType, selectTravelTime, setTravelTime, selectOrigin, selectDestination } from "~/slices/navSlice";
import { decode } from "@googlemaps/polyline-codec";
import { GOONG_APIKEY } from "@env";
import Loading from "~components/Loading";
import { Parallelogram } from "~components/Shape";
import { colors } from "~utils/colors";

const BookVehicle = () => {
  const navigation = useNavigation();
  const [confirmBtnTitle, setConfirmBtnTitle] = useState("Tiếp tục");
  const [content, setContent] = useState("ChooseVehicle");
  const vehicleType = useSelector(selectVehicleType);
  const travelTime = useSelector(selectTravelTime);
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [polylineMotocycle, setPolylineMotocycle] = useState();
  const [distanceMotocycle, setDistanceMotocycle] = useState();
  const [polylineCar, setPolylineCar] = useState();
  const [distanceCar, setDistanceCar] = useState();
  const [vehiclechoose, setVehicleChoose] = useState(vehicleType);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const polylineMotocycleTmp = await getPolyline(
          origin.latitude,
          origin.longitude,
          destination.latitude,
          destination.longitude,
          "bike"
        );
        setPolylineMotocycle(polylineMotocycleTmp.polyline);
        setDistanceMotocycle(polylineMotocycleTmp.distance);

        const polylineCarTmp = await getPolyline(
          origin.latitude,
          origin.longitude,
          destination.latitude,
          destination.longitude,
          "car"
        );
        setPolylineCar(polylineCarTmp.polyline);
        setDistanceCar(polylineCarTmp.distance);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const getPolyline = async (oriLat, oriLng, desLat, desLng, vehicle) => {
    try {
      const url = `https://rsapi.goong.io/Direction?origin=${oriLat},${oriLng}&destination=${desLat},${desLng}&vehicle=${vehicle}&api_key=${GOONG_APIKEY}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.geocoded_waypoints[0].geocoder_status === "OK") {
        const polyline = decode(data.routes[0].overview_polyline.points).map((point) => {
          return {
            latitude: point[0],
            longitude: point[1],
          };
        });
        const distance = data.routes[0].legs[0].distance.value;
        return { distance: distance, polyline: polyline };
      } else {
        console.error("No results found.");
        return null;
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  function handleConfirm() {
    if (content === "ChooseVehicle") {
      setConfirmBtnTitle("Đặt xe");
      setContent("BookNow");
    } else if (content === "BookNow") {
      setConfirmBtnTitle("Hủy tìm kiếm");
      setContent("FindingDriver");
    } else if (content === "FindingDriver") {
      setConfirmBtnTitle("Đặt xe");
      setContent("BookNow");
    } else if (content === "Scheduling") {
      if (!travelTime) Alert.alert("Lỗi", "Vui lòng chọn thời gian đặt xe.");
      else if (string2Date(travelTime) <= new Date()) Alert.alert("Lỗi", "Thời gian đặt xe không hợp lệ!");
      else {
        dispatch(setTravelTime(null));
        Alert.alert(
          "Đã đặt xe vào " + travelTime,
          "Chúng tôi sẽ báo cho bạn biết thông tin tài xế khi gần đến giờ đón.",
          [
            {
              text: "Đã hiểu",
              onPress: () => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: "MainScreen" }],
                });
              },
            },
          ]
        );
      }
    }
  }

  function string2Date(date) {
    if (!date) return null;
    const [datePart, timePart] = date.split(" ");
    const [day, month, year] = datePart.split("/").map(Number);
    const [hour, minute] = timePart.split(":").map(Number);
    return new Date(year, month - 1, day, hour, minute);
  }

  function hexToRgb(hex) {
    // Xóa ký tự "#" nếu có
    hex = hex.replace("#", "");

    // Chuyển đổi mã hex thành giá trị RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Trả về kết quả dưới dạng chuỗi mã màu RGB
    return `${r}, ${g}, ${b}`;
  }

  return (
    <View style={styles.container}>
      <View style={styles.map}>
        {!loading && <GoogleMap polyline={vehiclechoose === "motorcycle" ? polylineMotocycle : polylineCar} />}
      </View>
      <View style={styles.backBtn}>
        <TouchableOpacity
          onPress={() => {
            if (content === "ChooseVehicle") navigation.goBack();
            else {
              setContent("ChooseVehicle");
              setConfirmBtnTitle("Tiếp tục");
            }
          }}
        >
          <FontAwesomeIcon icon={faAngleLeft} color={"rgba(0, 0, 0, 0.8)"} />
        </TouchableOpacity>
      </View>

      <View style={styles.distanceLabel}>
        <Parallelogram
          bgColor={`rgba(${hexToRgb(colors.primary_300)}, ${0.9})`}
          w={
            (((vehiclechoose === "motorcycle" ? distanceMotocycle : distanceCar) / 1000).toFixed(1) + " km").length * 7
          }
          h={25}
          label={((vehiclechoose === "motorcycle" ? distanceMotocycle : distanceCar) / 1000).toFixed(1) + " km"}
          labelStyle={{ color: "white", fontSize: 12 }}
        />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.pullBarContainer}>
          <View style={styles.pullBar} />
        </View>
        <View style={styles.content}>
          {content === "ChooseVehicle" ? (
            <ChooseVehicle
              setVehicleChoose={setVehicleChoose}
              distanceMotocycle={distanceMotocycle}
              distanceCar={distanceCar}
            />
          ) : (
            <ChooseeMethod
              setConfirmBtnTitle={setConfirmBtnTitle}
              vehicleType={vehicleType}
              content={content}
              setContent={setContent}
            />
          )}
          {/* <DriverInfo /> */}

          <View style={styles.confirmBtn}>
            <TouchableOpacity onPress={handleConfirm}>
              <CustomBtn title={confirmBtnTitle} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Loading loading={loading} />
    </View>
  );
};

export default BookVehicle;
