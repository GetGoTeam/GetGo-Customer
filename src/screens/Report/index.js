import { Text, View, TouchableOpacity, Image, Keyboard, TextInput } from "react-native";
import Checkbox from "expo-checkbox";
import styles from "./styles";
import { colors, text } from "~utils/colors.js";
import CustomBtn from "~components/Button/CustomBtn";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Report = () => {
  const navigation = useNavigation();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [feedback, setFeedback] = useState();

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

  const [checkboxData, setCheckboxData] = useState([
    {
      isChecked: false,
      label: "Hành vi không đúng mực",
    },
    {
      isChecked: false,
      label: "Đến điểm đón trễ",
    },
    {
      isChecked: false,
      label: "Vi phạm giao thông",
    },
    {
      isChecked: false,
      label: "Xảy ra tai nạn",
    },
    {
      isChecked: false,
      label: "Không đảm bảo an toàn",
    },
    {
      isChecked: false,
      label: "Khác",
    },
  ]);

  const handleCheckboxChange = (index) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[index].isChecked = !updatedCheckboxData[index].isChecked;
    setCheckboxData(updatedCheckboxData);
  };

  return (
    <View style={styles.container}>
      {!isKeyboardVisible && (
        <>
          <View style={styles.backBtn}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesomeIcon icon={faAngleLeft} size={22} color={colors.primary_300} />
            </TouchableOpacity>
          </View>
          <View style={styles.avatarContainer}>
            <Image source={require("~assets/no-avatar.png")} style={styles.avatar} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Gửi báo cáo</Text>
            <Text style={styles.text2}>Gửi báo cáo tài xế này về những hành vi vi phạm</Text>
          </View>
          <View style={styles.checkboxContainer}>
            {checkboxData.map((item, index) => (
              <View style={styles.checkboxItem} key={index}>
                <Checkbox
                  color={colors.primary_300}
                  value={item.isChecked}
                  onValueChange={() => handleCheckboxChange(index)}
                  style={styles.checkbox}
                />
                <Text style={styles.checkboxLabel}>{item.label}</Text>
              </View>
            ))}
          </View>
        </>
      )}
      <View style={[styles.TextInputContainer, isKeyboardVisible && { marginTop: 70, height: 300 }]}>
        <TextInput
          editable
          multiline
          onChangeText={(text) => setFeedback(text)}
          value={feedback}
          style={styles.textInput}
          placeholder="Nhập nội dung báo cáo..."
          placeholderTextColor={text.color_400}
        />
      </View>
      {!isKeyboardVisible && (
        <TouchableOpacity style={styles.confirm}>
          <CustomBtn title="Gửi báo cáo" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Report;
