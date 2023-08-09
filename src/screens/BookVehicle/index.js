import { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import GoogleMap from "~components/GoogleMap";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import ChooseVehicle from "./ChooseVehicle";
import ChooseeMethod from "./ChooseMethod";
import CustomBtn from "~components/Button/CustomBtn";
import { useState } from "react";
import DriverInfo from "./DriverInfo";
import { useSelector } from "react-redux";
import { selectVehicleType } from "~/slices/navSlice";

const BookVehicle = () => {
  const navigation = useNavigation();
  const [confirmBtnTitle, setConfirmBtnTitle] = useState("Tiếp tục");
  const [content, setContent] = useState("ChooseVehicle");
  const vehicleType = useSelector(selectVehicleType);

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
      //...
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <GoogleMap />
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
          <FontAwesomeIcon icon={faAngleLeft} size={22} color={"rgba(0, 0, 0, 0.8)"} />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.pullBarContainer}>
          <View style={styles.pullBar} />
        </View>
        <View style={styles.content}>
          {content === "ChooseVehicle" ? (
            <ChooseVehicle />
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
    </View>
  );
};

export default BookVehicle;
