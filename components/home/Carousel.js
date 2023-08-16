import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Carousel = () => {
  const slides = [
    { image: require("../../assets/slider1.png") },
    { image: require("../../assets/slider2.png") },
    { image: require("../../assets/slider4.png") },
    //   {image: require("../../assets")}
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides.map((slide) => slide.image)}
        dotColor={COLORS.black}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 25,
          marginTop: 15,
          width: "90%",
          height: 160,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
    marginRight: 15,
    marginLeft: 15,
    marginBottom: -7,
  },
});
