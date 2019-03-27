import React from "react";
import { StyleSheet, ImageBackground, Text, View } from "react-native";
import { connect } from "react-redux";
import * as actions from "../src/actions";

import CustomButton from "./CustomButton";

const BackgroundPoster = props => {
  console.log(props);
  return props.movie.name ? (
    <ImageBackground
      source={{ uri: props.movie.poster }}
      style={styles.imageContainer}
      imageStyle={styles.image}
    >
      <View style={styles.titleContainer}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.title}>
          {props.movie.name}
        </Text>
      </View>
      <CustomButton text={"Try Your Luck!"} />
    </ImageBackground>
  ) : (
    <CustomButton text={"Try Your Luck!"} />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1
  },
  image: {
    resizeMode: "cover"
  },
  titleContainer: {
    backgroundColor: "rgba(26,26,29,.75)",
    height: 80,
    width: "100%",
    position: "absolute",
    top: "10%",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 35,
    textAlign: "center",
    textAlignVertical: "center",
    paddingLeft: 10,
    paddingRight: 10
  }
});

const mapStateToProps = state => {
  console.log(
    "%cBackgroundPosterComponent STATE:",
    "color: red; font-weight: bold;",
    state
  );
  return {
    movie: state.movieLottery
  };
};

export default connect(
  mapStateToProps,
  actions
)(BackgroundPoster);
