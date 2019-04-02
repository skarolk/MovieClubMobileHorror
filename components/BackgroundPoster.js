import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Platform
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../src/actions";
import { Icon } from "expo";

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
      <Icon.Ionicons
        name={
          Platform.OS === "ios"
            ? "ios-information-circle"
            : "md-information-circle"
        }
        size={35}
        style={{
          position: "absolute",
          top: "13.1%",
          right: "3%"
        }}
        color={"#C3073F"}
        onPress={() => {}}
      />
    </ImageBackground>
  ) : (
    <CustomButton text={"Try Your Luck!"} style={styles.firstButton} />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1
  },
  image: {
    resizeMode: "cover",
    backgroundColor: "black"
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
    paddingLeft: 50,
    paddingRight: 50
  },
  Button: {
    zIndex: 100
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
