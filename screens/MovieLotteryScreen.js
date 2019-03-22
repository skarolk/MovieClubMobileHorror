import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";

class MovieLotteryScreen extends React.Component {
  static navigationOptions = {
    title: "Movie Lottery"
  };

  render() {
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

export default connect()(MovieLotteryScreen);
