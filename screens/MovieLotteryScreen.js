import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import * as actions from "../src/actions";

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
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => this.props.getRandomMovie()}
        >
          <Text style={[styles.buttonText, styles.large]}>
            What should I watch?
          </Text>
        </TouchableOpacity>
      </ScrollView>
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

const mapStateToProps = state => {
  console.log(
    "%cMovieLotteryComponent STATE:",
    "color: red; font-weight: bold;",
    state
  );
  return {};
};

export default connect(
  mapStateToProps,
  actions
)(MovieLotteryScreen);
