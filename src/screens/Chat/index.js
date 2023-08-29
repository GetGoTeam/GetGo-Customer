import { View, Image, Text, ScrollView, TextInput, TouchableOpacity, Keyboard } from "react-native";
import React, { useRef, useEffect } from "react";
import { faChevronLeft, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { colors, text } from "~utils/colors";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const data = [
  {
    mess: "Tôi đang đến đón bạn",
    time: "11:29",
    type: "receive",
  },
  {
    mess: "Tôi đang chờ bạn đến đón",
    time: "11:29",
    type: "send",
  },
  {
    mess: "Tôi đang đến đón bạn",
    time: "11:29",
    type: "receive",
  },
  {
    mess: "Tôi đang chờ bạn đến đón",
    time: "11:29",
    type: "send",
  },
  {
    mess: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur illum minima unde itaque assumenda magnam ratione error dolore distinctio? Iusto, ea asperiores! Soluta enim error dolorem optio assumenda, quos corporis",
    time: "11:29",
    type: "receive",
  },
  {
    mess: "Tôi đang chờ bạn đến đón",
    time: "11:29",
    type: "send",
  },
  {
    mess: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur illum minima unde itaque assumenda magnam ratione error dolore distinctio? Iusto, ea asperiores! Soluta enim error dolorem optio assumenda, quos corporis",
    time: "11:29",
    type: "send",
  },
];

export default () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.heading_container}>
        <View style={styles.heading_left}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faChevronLeft} size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.heading_left_infor}>
            <Image style={styles.infor_image} source={require("~assets/no-avatar.png")} />
            <Text style={styles.infor_text}>Nguyễn Văn A</Text>
          </View>
        </View>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faPhone} size={24} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.mess_container} ref={scrollViewRef}>
        {data.map((item, index) => (
          <View key={index}>
            <View style={item.type === "receive" ? styles.mess_receive : styles.mess_send}>
              <Text style={styles.mess_txt}>{item.mess}</Text>
              <Text style={styles.mess_time}>{item.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.chat_container}>
        <TextInput style={styles.chat_input} placeholder="Nhập tin nhắn..." />
        <TouchableOpacity>
          <FontAwesomeIcon icon={faPaperPlane} size={24} color={colors.primary_300} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
