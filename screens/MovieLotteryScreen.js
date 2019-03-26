import React from "react";
import { connect } from "react-redux";
import * as actions from "../src/actions";

import BackgroundPoster from "../components/BackgroundPoster";

class MovieLotteryScreen extends React.Component {
  static navigationOptions = {
    title: "Movie Lottery"
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <BackgroundPoster />
      </React.Fragment>
    );
  }
}

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
