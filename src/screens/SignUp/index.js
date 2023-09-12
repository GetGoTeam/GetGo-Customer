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
import { setToken, setUserInfo, selectOtpPhone, selectOtpToken } from "~/slices/navSlice";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRepassword] = useState();
  const [otp, setOtp] = useState();
  const otpPhone = useSelector(selectOtpPhone);
  const otpToken = useSelector(selectOtpToken);

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

  const getUserInfo = async (token) => {
    const headers = {
      Authorization: "Bearer " + token,
    };
    await request
      .get("get-infor", { headers: headers })
      .then(function (res) {
        dispatch(setUserInfo(res.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleConfirm = async () => {
    if (!username) {
      Alert.alert("Lỗi", "Tên đăng nhập không hợp lệ.");
      return;
    } else if (password.length < 6) {
      Alert.alert("Lỗi", "Mật khẩu phải có độ dài từ 6 ký tự trở lên.");
      return;
    } else if (password !== repassword) {
      Alert.alert("Lỗi", "Mật khẩu xác nhận không trùng khớp.");
      return;
    } else if (!otp) {
      Alert.alert("Lỗi", "Bạn chưa nhập mã OTP.");
      return;
    }

    setLoading(true);
    const body = {
      username: username,
      email: `${username}@gmail.com`,
      password: password,
      phone: otpPhone,
      gender: "Female",
      address: "123 duong thi muoui",
      dob: "12/03/2023",
      OTP_token: otpToken,
      otp: parseInt(otp),
    };
    await request
      .post("signup", body)
      .then(function (res) {
        const token = res.data.token;
        dispatch(setToken(token));
        getUserInfo(token);
        navigation.reset({
          index: 0,
          routes: [{ name: "MainScreen" }],
        });
      })
      .catch(function (error) {
        const data = (error.response.data ??= null);
        console.log(data ?? error);
        if (!data) Alert.alert("Lỗi", "Lỗi kết nối tới máy chủ.");
        else {
          if (data.message === "Invalid OTP") Alert.alert("Lỗi", "Mã OTP không chính xác.");
          else Alert.alert("Lỗi", "Tài khoản đã tồn tại.");
        }
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
      {!isKeyboardVisible && <Image style={styles.logo} source={require("~assets/logo.png")} />}
      <View style={styles.content}>
        <TextInput
          label="Tên đăng nhập"
          variant="standard"
          style={styles.textInput}
          color={colors.primary_300}
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          secureTextEntry
          label="Mật khẩu"
          variant="standard"
          style={styles.textInput}
          color={colors.primary_300}
          onChangeText={setPassword}
          value={password}
        />
        <TextInput
          secureTextEntry
          label="Xác nhận mật khẩu"
          variant="standard"
          style={styles.textInput}
          color={colors.primary_300}
          onChangeText={setRepassword}
          value={repassword}
        />
        <TextInput
          label="Mã OTP"
          variant="standard"
          style={styles.textInput}
          color={colors.primary_300}
          onChangeText={setOtp}
          value={otp}
        />
        <TouchableOpacity style={styles.confirm} onPress={handleConfirm}>
          <CustomBtn title="Đăng ký" />
        </TouchableOpacity>
      </View>

      <Loading loading={loading} />
    </View>
  );
};

export default SignUp;
