import React from "react";
import { StyleSheet, Text } from "react-native";
import { Overlay, Button } from "react-native-elements";
import { connect } from "react-redux";
import * as actions from "../src/actions";

const CustomOverlay = props => {
  console.log("hitting the custom overlay");
  return (
    <Overlay
      isVisible={props.visible}
      width="80%"
      height="60%"
      overlayBackgroundColor="#1A1A1D"
      borderRadius="15"
      onBackdropPress={() => props.toggleInfoWindow()}
    >
      <Text
        adjustsFontSizeToFit
        style={{
          color: "white",
          fontSize: 35,
          textAlign: "center",
          textAlignVertical: "center",
          paddingLeft: 20,
          paddingRight: 20
        }}
      >
        {props.movie.name}
      </Text>
      <Text
        adjustsFontSizeToFit
        style={{
          color: "white",
          fontSize: 15,
          textSlign: "justified"
        }}
      >
        {props.movie.synopsis}
      </Text>
      <Button title={"View Trailer!"} />
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
