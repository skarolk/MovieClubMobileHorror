import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
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
      onTouch={() => props.getRandomMovie()}
    >
      <CustomButton text={"Scary Movie Lottery!"} />
    </ImageBackground>
  ) : (
    <CustomButton text={"Scary Movie Lottery!"} />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
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
