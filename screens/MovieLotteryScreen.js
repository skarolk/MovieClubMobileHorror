import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";

class MovieLotteryScreen extends React.Component {
  static navigationOptions = {
    title: "Movie Lottery"
  };

  render() {
    console.log(
      "%cMovieLotteryComponent PROPS:",
      "color: red; font-weight: bold;",
      "hello"
    );
    return <ScrollView style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

const mapStateToProps = state => {
  console.log(
    "%cMovieLotteryComponent STATE:",
    "color: red; font-weight: bold;",
    "hello"
  );
  return {};
};

export default connect(mapStateToProps)(MovieLotteryScreen);
