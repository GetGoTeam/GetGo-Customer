import { View, Image, Text, ScrollView, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useRef, useEffect, useState } from "react";
import { faChevronLeft, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { colors, text } from "~utils/colors";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import socketServcies from "~utils/websocketContext";
import { useSelector } from "react-redux";
import { selectToken, selectUserInfo, selectDriver } from "~/slices/navSlice";
import { request } from "~utils/request";
import Loading from "~components/Loading";

export default () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [chatBuffers, setChatBuffers] = useState([]);
  const token = useSelector(selectToken);
  const headers = {
    Authorization: "Bearer " + token,
  };
  const userInfo = useSelector(selectUserInfo);
  const [textInput, setTextInput] = useState();
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [gettingMsg, setGettingMsg] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  // const driver = "64f9820a37f9084f94624c15";
  const driver = useSelector(selectDriver);

  const scrollToBottom = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };

  useEffect(() => {
    if (!firstRender) return;
    try {
      console.log("init socket msg");
      socketServcies.initializeSocket("chatting");
    } catch (error) {
      console.log(error);
    } finally {
      setFirstRender(false);
    }
  }, []);

  useEffect(() => {
    (async () => {
      if (gettingMsg) return;
      setLoading(true);
      await request
        .get(`get-messages-driver/${driver.id}`, { headers: headers })
        .then((response) => {
          setChatBuffers(response.data);
          console.log("loaded msg");
        })
        .catch((err) => {
          console.log(err);
        })
        .then(function () {
          setLoading(false);
        });
    })();
  }, []);

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedTime = `${(hours < 10 ? "0" : "") + hours}:${(minutes < 10 ? "0" : "") + minutes}`;
    return formattedTime;
  };

  const handleSendMessage = async () => {
    if (!textInput) return;
    setSending(true);
    const body = {
      driver_receive: driver.id,
      content: textInput,
    };
    await request
      .post("create-message", body, {
        headers: headers,
      })
      .then(function (res) {
        setTextInput();
        setChatBuffers((chatBuffers) => [...chatBuffers, res.data]);
        console.log("sent msg");
      })
      .catch(function (error) {
        console.log("Send message error: ", error);
      })
      .then(function () {
        setSending(false);
      });
  };

  useEffect(() => {
    if (sending) return;
    setGettingMsg(true);
    try {
      socketServcies.on(`message_${userInfo._id}_${driver.id}`, (msg) => {
        if (msg.content.customer_receive) {
          setChatBuffers((chatBuffers) => [...chatBuffers, msg.content]);
          console.log("received msg");
        }
      });
    } catch (error) {
      console.log(error);
    } finally {
      setGettingMsg(false);
    }
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
            <Text style={styles.infor_text}>{driver.username}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faPhone} size={24} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.mess_container}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollToBottom()}
        onLayout={() => scrollToBottom()}
      >
        {chatBuffers.map((item, index) => (
          <View key={index}>
            <View style={item.customer_receive ? styles.mess_receive : styles.mess_send}>
              <Text style={styles.mess_txt}>{item.content}</Text>
              <Text style={styles.mess_time}>{formatTime(item.createdAt)}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.chat_container}>
        <View style={styles.chat_input_container}>
          <TextInput
            style={styles.chat_input}
            placeholder="Nhập tin nhắn..."
            onChangeText={setTextInput}
            value={textInput}
          />
          <View style={[styles.loading, { display: sending ? "flex" : "none" }]}>
            <ActivityIndicator color={colors.primary_300} animating hidesWhenStopped />
          </View>
        </View>
        {textInput && !sending ? (
          <TouchableOpacity onPress={handleSendMessage}>
            <FontAwesomeIcon icon={faPaperPlane} size={24} color={colors.primary_300} />
          </TouchableOpacity>
        ) : (
          <FontAwesomeIcon icon={faPaperPlane} size={24} color={text.color_400} />
        )}
      </View>
      <Loading loading={loading} />
    </View>
  );
};
