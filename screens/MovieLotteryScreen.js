import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import * as actions from "../src/actions";
import BackgroundPoster from "../components/BackgroundPoster";

class MovieLotteryScreen extends React.Component {
  static navigationOptions = {
    title: "Movie Lottery"
  };

  render() {
    console.log(
      "%cMovieLotteryComponent PROPS:",
      "color: red; font-weight: bold;",
      this.props
    );
    return (
      <React.Fragment>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => this.props.getRandomMovie()}
        >
          <Text style={[styles.buttonText, styles.large]}>
            What should I watch?
          </Text>
        </TouchableOpacity>
        <BackgroundPoster />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  button: {
    marginTop: 10,
    minWidth: 100,
    borderWidth: 2,
    borderRadius: 3
  },
  large: {
    fontSize: 16,
    padding: 10
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold"
  }
});

export default connect(
  null,
  actions
)(MovieLotteryScreen);
