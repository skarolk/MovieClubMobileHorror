import React from "react";
import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";
import * as actions from "../src/actions";

import BackgroundPoster from "../components/BackgroundPoster";

class MovieLotteryScreen extends React.Component {
  static navigationOptions = {
    title: "Movie Lottery"
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
    backgroundColor: "#4E4E50"
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
