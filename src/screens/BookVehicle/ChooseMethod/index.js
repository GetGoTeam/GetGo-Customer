import React from "react";
import { View, Text, TouchableOpacity, Animated, ScrollView, Image, Dimensions, ActivityIndicator } from "react-native";
import { colors, text } from "~utils/colors.js";
import styles from "./styles";
import BookNow from "./BookNow";
import Schedule from "./Schedule";

const { width } = Dimensions.get("window");

export default class ChooseeMethod extends React.Component {
  state = {
    active: 0,
    xTabOne: 0,
    xTabTwo: 0,
    translateX: new Animated.Value(0),
    translateXTabOne: new Animated.Value(0),
    translateXTabTwo: new Animated.Value(width),
    translateY: -1000,
  };

  handleSlide = (type) => {
    let { active, xTabOne, xTabTwo, translateX, translateXTabOne, translateXTabTwo } = this.state;
    Animated.spring(translateX, {
      toValue: type,
      duration: 100,
      useNativeDriver: true,
    }).start();
    if (active === 0) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: width,
          duration: 100,
          useNativeDriver: true,
        }).start(),
      ]);
    } else {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -width,
          duration: 100,
          useNativeDriver: true,
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }).start(),
      ]);
    }
  };

  render() {
    const { setConfirmBtnTitle, vehicleType, content, setContent } = this.props;
    let { xTabOne, xTabTwo, translateX, active, translateXTabOne, translateXTabTwo, translateY } = this.state;

    return (
      <View style={styles.container}>
        {content === "FindingDriver" ? (
          <>
            <View style={styles.findingDriverContainer}>
              <Image
                source={vehicleType === "motorcycle" ? require("~assets/motorcycle.png") : require("~assets/car.png")}
                style={styles.findingDriverIcon}
              />
              <Text style={styles.findingDriverText}>Đang tìm xe</Text>
              <ActivityIndicator color={colors.primary_300} />
            </View>
            <View style={styles.divLine} />
          </>
        ) : (
          <View style={styles.sliderContainer}>
            <Animated.View style={[{ transform: [{ translateX }] }, styles.sliderAnimation]} />
            <TouchableOpacity
              style={styles.sliderItem}
              onLayout={(event) =>
                this.setState({
                  xTabOne: event.nativeEvent.layout.x,
                })
              }
              onPress={() => {
                this.setState({ active: 0 }, () => this.handleSlide(xTabOne));
                setConfirmBtnTitle("Đặt xe");
                setContent("BookNow");
              }}
            >
              <Text style={[{ color: active === 0 ? colors.primary_300 : text.color_400 }, styles.title]}>
                Đặt ngay
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sliderItem}
              onLayout={(event) =>
                this.setState({
                  xTabTwo: event.nativeEvent.layout.x,
                })
              }
              onPress={() => {
                this.setState({ active: 1 }, () => this.handleSlide(xTabTwo));
                setConfirmBtnTitle("Lên lịch");
                setContent("Scheduling");
              }}
            >
              <Text style={[{ color: active === 1 ? colors.primary_300 : text.color_400 }, styles.title]}>Hẹn giờ</Text>
            </TouchableOpacity>
          </View>
        )}

        <View>
          <Animated.View
            style={{
              transform: [
                {
                  translateX: translateXTabOne,
                },
              ],
            }}
            onLayout={(event) =>
              this.setState({
                translateY: event.nativeEvent.layout.height,
              })
            }
          >
            <BookNow />
          </Animated.View>

          <Animated.View
            style={{
              transform: [
                {
                  translateX: translateXTabTwo,
                },
                {
                  translateY: -translateY,
                },
              ],
            }}
          >
            <Schedule />
          </Animated.View>
        </View>
      </View>
    );
  }
}
