import React from "react";
import { StyleSheet, ImageBackground, Text } from "react-native";
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
      <Text style={styles.title}>{props.movie.name}</Text>
      <CustomButton text={"Scary Movie Lottery!"} />
    </ImageBackground>
  ) : (
    <CustomButton text={"Scary Movie Lottery!"} />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    marginLeft: "10%",
    marginRight: "10%"
  },
  image: {
    resizeMode: "contain"
  },
  title: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    marginTop: "10%",
    backgroundColor: "#1A1A1D",
    paddingTop: 15,
    paddingBottom: 20
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
