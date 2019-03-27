import React from "react";
import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";
import * as actions from "../src/actions";

import BackgroundPoster from "../components/BackgroundPoster";

class MovieLotteryScreen extends React.Component {
  static navigationOptions = {
    title: "Scary Movie Lottery!",
    headerTitleStyle: {
      color: "white"
    },
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#1A1A1D",
      elevation: null
    }
  };

  render() {
    console.log(this.props);
    return (
      <View style={styles.imageContainer}>
        <BackgroundPoster />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    backgroundColor: "black"
  }
});

const mapStateToProps = state => {
  console.log(
    "%cMovieLotteryScreen STATE:",
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
)(MovieLotteryScreen);
