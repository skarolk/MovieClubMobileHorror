import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { connect } from "react-redux";
import * as actions from "../src/actions";

const BackgroundPoster = props => {
  console.log(props);
  return props.movie.name ? (
    <ImageBackground
      source={{ uri: props.movie.poster }}
      style={styles.imageContainer}
      imageStyle={styles.image}
    >
      <View style={styles.detailsContainer}>
        <Text>{props.movie.name}</Text>
      </View>
    </ImageBackground>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34495E"
  },
  imageContainer: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingHorizontal: 20
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
