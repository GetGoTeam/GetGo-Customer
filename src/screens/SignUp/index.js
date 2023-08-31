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
import request from "~utils/request";

const SignUp = () => {
  const navigation = useNavigation();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRepassword] = useState();

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
    if (!username) {
      Alert.alert("Lỗi", "Tên đăng nhập không hợp lệ.");
      return;
    } else if (!PhoneNumberValid(phone)) {
      Alert.alert("Lỗi", "Số điện thoại không hợp lệ.");
      return;
    } else if (password.length < 6) {
      Alert.alert("Lỗi", "Mật khẩu phải có độ dài từ 6 ký tự trở lên.");
      return;
    } else if (password !== repassword) {
      Alert.alert("Lỗi", "Mật khẩu xác nhận không trùng khớp.");
      return;
    }

    setLoading(true);
    const objSignup = {
      username: username,
      password: password,
      phone: phone,
    };
    await request
      .post("signup", objSignup)
      .then(function (res) {
        dispatch(setToken(res.data.token));
        navigation.reset({
          index: 0,
          routes: [{ name: "MainScreen" }],
        });
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert("Lỗi", "Tài khoản đã tồn tại.");
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
          label="Số điện thoại"
          variant="standard"
          style={styles.textInput}
          color={colors.primary_300}
          onChangeText={setPhone}
          value={phone}
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
        <TouchableOpacity style={styles.confirm} onPress={handleConfirm}>
          <CustomBtn title="Đăng ký" />
        </TouchableOpacity>
      </View>

      <Loading loading={loading} />
    </View>
  );
};

export default SignUp;
