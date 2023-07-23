import React from "react";
import { View, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import styles from "./styles";

const ImageCarousel = () => {
  const data = [
    { id: 1, image: require("@assets/carousel1.jpg") },
    { id: 2, image: require("@assets/carousel2.jpg") },
    { id: 3, image: require("@assets/carousel3.jpg") },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  return <Carousel layout={"default"} data={data} renderItem={renderItem} sliderWidth={400} itemWidth={300} />;
};

export default ImageCarousel;
