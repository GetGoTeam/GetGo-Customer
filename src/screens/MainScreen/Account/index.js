import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight, faLock, faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { colors, text } from "~utils/colors.js";
import { useState } from "react";
import ToolItem from "~components/ToolItem";
import { useDispatch } from "react-redux";
import { setToken } from "~/slices/navSlice";
import { useNavigation } from "@react-navigation/native";

const Account = () => {
  const [vip, setVip] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert("Đăng xuất", "Bạn có chắc muốn đăng xuất khỏi tài khoản này?", [
      {
        text: "Hủy",
        style: "cancel",
      },
      {
        text: "Đồng ý",
        onPress: () => {
          dispatch(setToken(null));
          navigation.reset({
            index: 0,
            routes: [{ name: "SignIn" }],
          });
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.personalInfo}>
          <Image style={styles.avatar} source={require("~assets/no-avatar.png")} />
          <View style={styles.usernameContainer}>
            <Text style={styles.username}>Nguyễn Văn A</Text>
            {vip ? (
              <TouchableOpacity onPress={() => setVip(!vip)}>
                <View style={styles.vipContainer}>
                  <Image style={styles.vipIcon} source={require("~assets/vip.png")} />
                  <Text style={styles.isVipText}>Thành viên VIP</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setVip(!vip)}>
                <View style={styles.vipContainer}>
                  <Text style={styles.vipRegisterText}>Đăng ký VIP</Text>
                  <FontAwesomeIcon icon={faChevronRight} size={13} color={text.color_400} />
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.toolContainer}>
          <View style={styles.divLine} />
          <TouchableOpacity style={styles.toolItem}>
            <ToolItem title="Cập nhật thông tin" icon={faUser} />
          </TouchableOpacity>
          <View style={styles.divLine} />
          <TouchableOpacity style={styles.toolItem}>
            <ToolItem title="Đổi mật khẩu" icon={faLock} />
          </TouchableOpacity>
          <View style={styles.divLine} />
          <TouchableOpacity style={styles.toolItem} onPress={handleLogout}>
            <ToolItem title="Đăng xuất" icon={faRightFromBracket} />
          </TouchableOpacity>
          <View style={styles.divLine} />
        </View>
      </View>
    </View>
  );
};

export default Account;
