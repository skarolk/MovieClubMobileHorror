import React from "react";
import { StyleSheet, Text } from "react-native";
import { Overlay } from "react-native-elements";
import { connect } from "react-redux";
import * as actions from "../src/actions";

const CustomOverlay = props => {
  console.log("hitting the custom overlay");
  return (
    <Overlay
      isVisible={props.visible}
      windowBackgroundColor="rgba(255, 255, 255, .5)"
      overlayBackgroundColor="red"
      width="auto"
      height="auto"
      onBackdropPress={() => props.toggleInfoWindow()}
    >
      <Text>Hello from Overlay!</Text>
    </Overlay>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {
    movie: state.movieLottery
  };
};

export default connect(
  mapStateToProps,
  actions
)(CustomOverlay);
