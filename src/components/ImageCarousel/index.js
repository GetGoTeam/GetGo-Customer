import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";

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

const styles = StyleSheet.create({
  slide: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },
});

export default ImageCarousel;
