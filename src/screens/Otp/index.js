import { View, TouchableOpacity, Image, Keyboard, Alert } from "react-native";
import styles from "./styles";
import { TextInput } from "@react-native-material/core";
import { colors, text } from "~utils/colors.js";
import { LinearGradient } from "expo-linear-gradient";
import CustomBtn from "~components/Button/CustomBtn";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import Loading from "~components/Loading";
import { request } from "~utils/request";
import { setOtpPhone, setOtpToken } from "~/slices/navSlice";
import { useDispatch } from "react-redux";

const Otp = () => {
  const navigation = useNavigation();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });

    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  function PhoneNumberValid(number) {
    return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
  }

  const handleConfirm = async () => {
    if (!PhoneNumberValid(phone)) {
      Alert.alert("Lỗi", "Số điện thoại không hợp lệ.");
      return;
    }

    setLoading(true);
    const body = {
      phone: phone,
    };
    await request
      .post("create-otp", body)
      .then(function (res) {
        dispatch(setOtpToken(res.data.OTP_token));
        dispatch(setOtpPhone(phone));
        navigation.navigate("SignUp");
      })
      .catch(function (error) {
        console.log("Create OTP error: ", error);
      })
      .then(function () {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      {!isKeyboardVisible && (
        <View style={styles.backBtn}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faAngleLeft} size={22} color={colors.primary_300} />
          </TouchableOpacity>
        </View>
      )}
      <LinearGradient colors={[colors.primary_100, "transparent"]} style={styles.background} />
      <Image style={styles.logo} source={require("~assets/logo.png")} />
      <View style={styles.content}>
        <TextInput
          label="Số điện thoại"
          variant="standard"
          style={styles.textInput}
          color={colors.primary_300}
          onChangeText={setPhone}
          value={phone}
        />
        <TouchableOpacity style={styles.confirm} onPress={handleConfirm}>
          <CustomBtn title="Tiếp tục" />
        </TouchableOpacity>
      </View>

      <Loading loading={loading} />
    </View>
  );
};

export default Otp;
