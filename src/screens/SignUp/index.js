import { Text, View, TouchableOpacity, Image, Keyboard } from "react-native";
import styles from "./styles";
import { TextInput } from "@react-native-material/core";
import { colors, text } from "~utils/colors.js";
import { LinearGradient } from "expo-linear-gradient";
import CustomBtn from "~components/Button/CustomBtn";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

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
        <TextInput label="Số điện thoại" variant="standard" style={styles.textInput} color={colors.primary_300} />
        <TextInput label="Mật khẩu" variant="standard" style={styles.textInput} color={colors.primary_300} />
        <TextInput label="Xác nhận mật khẩu" variant="standard" style={styles.textInput} color={colors.primary_300} />
        <TouchableOpacity style={styles.confirm}>
          <CustomBtn title="Đăng ký" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
