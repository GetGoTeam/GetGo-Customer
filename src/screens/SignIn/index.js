import { Text, View, TouchableOpacity, Image, Keyboard, ActivityIndicator } from "react-native";
import styles from "./styles";
import { TextInput } from "@react-native-material/core";
import { colors, text } from "~utils/colors.js";
import { LinearGradient } from "expo-linear-gradient";
import CustomBtn from "~components/Button/CustomBtn";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "~/slices/navSlice";

const SignIn = () => {
  const navigation = useNavigation();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

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

  const handleComfirm = async () => {
    // setLoading(true);
    var objLogin = {
      email: "customer@gmail.com",
      password: "123456",
    };

    await axios
      .post(`http://localhost:3001/api/customers/login`, objLogin)
      .then((res) => {
        console.log(res.data);
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={[colors.primary_100, "transparent"]} style={styles.background} />
      {!isKeyboardVisible && <Image style={styles.logo} source={require("~assets/logo.png")} />}
      <View style={styles.content}>
        <TextInput label="Số điện thoại" variant="standard" style={styles.textInput} color={colors.primary_300} />
        <TextInput
          secureTextEntry
          label="Mật khẩu"
          variant="standard"
          style={styles.textInput}
          color={colors.primary_300}
        />
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity>
            <Text style={styles.text}>Quên mật khẩu</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleComfirm}>
          <CustomBtn title="Đăng nhập" />
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text style={styles.text}>Chưa có tài khoản?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signUpBtn}>Đăng ký ngay</Text>
          </TouchableOpacity>
        </View>
      </View>

      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={colors.primary_300} animating hidesWhenStopped />
        </View>
      )}
    </View>
  );
};

export default SignIn;
