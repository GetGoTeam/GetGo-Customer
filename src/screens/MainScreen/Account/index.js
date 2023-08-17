import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { colors, text } from "~utils/colors.js";
import { useState } from "react";
import ToolItem from "~components/ToolItem";

const Account = () => {
  const [vip, setVip] = useState(false);

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
        </View>
      </View>
    </View>
  );
};

export default Account;
