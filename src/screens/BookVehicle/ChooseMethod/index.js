import React from "react";
import { View, Text, TouchableOpacity, Animated, ScrollView, Image, Dimensions } from "react-native";
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
    const { setConfirmBtnTitle } = this.props;
    let { xTabOne, xTabTwo, translateX, active, translateXTabOne, translateXTabTwo, translateY } = this.state;
    return (
      <View style={styles.container}>
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
            }}
          >
            <Text style={[{ color: active === 0 ? colors.primary_300 : text.color_400 }, styles.title]}>Đặt ngay</Text>
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
            }}
          >
            <Text style={[{ color: active === 1 ? colors.primary_300 : text.color_400 }, styles.title]}>Hẹn giờ</Text>
          </TouchableOpacity>
        </View>

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
