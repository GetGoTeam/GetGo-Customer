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

const BookVehicle = () => {
  const navigation = useNavigation();
  const [confirmBtnTitle, setConfirmBtnTitle] = useState("Tiếp tục");
  const [content, setContent] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <GoogleMap />
      </View>
      <View style={styles.backBtn}>
        <TouchableOpacity
          onPress={() => {
            if (content === 0) navigation.goBack();
            else {
              setContent(0);
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
          {content === 0 ? <ChooseVehicle /> : <ChooseeMethod setConfirmBtnTitle={setConfirmBtnTitle} />}

          <View style={styles.confirmBtn}>
            <TouchableOpacity
              onPress={() => {
                if (content === 0) {
                  setConfirmBtnTitle("Đặt xe");
                  setContent(1);
                }
              }}
            >
              <CustomBtn title={confirmBtnTitle} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookVehicle;
