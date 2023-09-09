import { Text, View, TouchableOpacity, Image, Keyboard, TextInput, Alert } from "react-native";
import styles from "./styles";
// import { TextInput } from "@react-native-material/core";
import { colors, text } from "~utils/colors.js";
import CustomBtn from "~components/Button/CustomBtn";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark, faFlag } from "@fortawesome/free-solid-svg-icons";
import RatingBar from "~components/RatingBar";
import { useSelector } from "react-redux";
import { selectToken, selectTrip, selectDriver } from "~/slices/navSlice";
import { request } from "~utils/request";
import Loading from "~components/Loading";

const Feedback = () => {
  const navigation = useNavigation();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState();
  const [loading, setLoading] = useState(false);
  const token = useSelector(selectToken);
  const headers = {
    Authorization: "Bearer " + token,
  };
  const trip = useSelector(selectTrip);
  const driverId = useSelector(selectDriver).id;
  // const driverId = "64f9820a37f9084f94624c15";

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

  const handleConfirm = async () => {
    setLoading(true);
    const body = {
      content: feedback ? feedback : "Không có nội dung",
      rating: rating,
      driver: driverId,
      trip: trip,
    };
    await request
      .post("create-feedback", body, {
        headers: headers,
      })
      .then(function (res) {
        console.log("Create feedback successfully!");
        Alert.alert("Thông báo", "Gửi đánh giá thành công.");
        navigation.reset({
          index: 0,
          routes: [{ name: "MainScreen" }],
        });
      })
      .catch(function (error) {
        console.log("Create feedback error: ", error);
      })
      .then(function () {
        setLoading(false);
      });
  };

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
      <View style={[styles.TextInputContainer, isKeyboardVisible && styles.TextInputContainerStretch]}>
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
        <TouchableOpacity style={styles.confirm} onPress={handleConfirm}>
          <CustomBtn title="Gửi đánh giá" />
        </TouchableOpacity>
      )}
      <Loading loading={loading} />
    </View>
  );
};

export default Feedback;
