import { Text, View, TouchableOpacity, Image, Keyboard, TextInput } from "react-native";
import styles from "./styles";
// import { TextInput } from "@react-native-material/core";
import { colors, text } from "~utils/colors.js";
import CustomBtn from "~components/Button/CustomBtn";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark, faFlag } from "@fortawesome/free-solid-svg-icons";
import RatingBar from "~components/RatingBar";

const Feedback = () => {
  const navigation = useNavigation();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [rating, setRating] = useState();
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

  return (
    <View style={styles.container}>
      {!isKeyboardVisible && (
        <>
          <View style={styles.reportContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: "MainScreen" }],
                });
              }}
            >
              <FontAwesomeIcon icon={faXmark} size={26} color={colors.primary_300} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Report")}>
              <FontAwesomeIcon icon={faFlag} size={22} color={colors.primary_300} />
            </TouchableOpacity>
          </View>
          <View style={styles.avatarContainer}>
            <Image source={require("~assets/no-avatar.png")} style={styles.avatar} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Bạn thấy chuyến đi thế nào?</Text>
            <Text style={styles.text2}>Hãy giúp chúng tôi cải thiện trải nghiệm bằng cách đánh giá cuốc xe này</Text>
          </View>
          <View style={styles.ratingBar}>
            <RatingBar rating={rating} setRating={setRating} />
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
          placeholder="Nhập nội dung đánh giá..."
          placeholderTextColor={text.color_400}
        />
      </View>
      {!isKeyboardVisible && (
        <TouchableOpacity style={styles.confirm}>
          <CustomBtn title="Gửi đánh giá" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Feedback;
