import React from "react";

import BackgroundPoster from "../components/BackgroundPoster";
import CustomButton from "../components/CustomButton";

export default class MovieLotteryScreen extends React.Component {
  static navigationOptions = {
    title: "Movie Lottery"
  };

  render() {
    return (
      <React.Fragment>
        <BackgroundPoster />
        <CustomButton text={"Play the Movie Lottery!"} />
      </React.Fragment>
    );
  }
}
