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
import CustomOverlay from "./CustomOverlay";

class BackgroundPoster extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggledOverlay: false
    };
  }

  renderInfoWindow = () => {
    // console.log(this.props.movie.name);

    return (
      <CustomOverlay
        visible={this.state.toggledOverlay}
        toggleInfoWindow={this.toggleInfoWindow}
        movie={this.props.movie}
      />
    );
  };

  toggleInfoWindow = () => {
    this.setState({
      toggledOverlay: !this.state.toggledOverlay
    });
  };

  render() {
    console.log(this.props);
    return this.props.movie.name ? (
      <React.Fragment>
        <ImageBackground
          source={{ uri: this.props.movie.poster }}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <CustomButton text={"Try Your Luck!"} />
        </ImageBackground>
        <View style={styles.titleContainer} pointerEvent="box-only">
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={styles.title}
            onPress={() => this.toggleInfoWindow()}
          >
            {this.props.movie.name + " "}
            <Icon.Ionicons
              name={
                Platform.OS === "ios"
                  ? "ios-information-circle"
                  : "md-information-circle"
              }
              size={32}
              color={"#C3073F"}
              style={{ zIndex: 100 }}
            />
          </Text>
        </View>
        {this.renderInfoWindow()}
      </React.Fragment>
    ) : (
      <ImageBackground
        source={{}}
        style={styles.imageContainer}
        imageStyle={styles.logo}
      >
        <CustomButton text={"Try Your Luck!"} style={styles.firstButton} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1
  },
  image: {
    resizeMode: "cover",
    backgroundColor: "black"
  },
  logo: {
    resizeMode: "contain",
    backgroundColor: "rgba(26,26,29,1)"
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
    paddingLeft: 20,
    paddingRight: 20
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
