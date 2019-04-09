import React from "react";
import { Text, StyleSheet, View } from "react-native";
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
      overlayBackgroundColor="rgba(26,26,29,.95)"
      borderRadius="15"
      onBackdropPress={() => props.toggleInfoWindow()}
    >
      <Text
        adjustsFontSizeToFit
        style={{
          color: "white",
          fontSize: 25,
          textAlign: "center",
          textAlignVertical: "center",
          paddingTop: 5
        }}
      >
        {props.movie.name}
      </Text>
      <Text
        adjustsFontSizeToFit
        style={{
          color: "white",
          fontSize: 17,
          paddingTop: 13,
          paddingRight: 10,
          paddingBottom: 20,
          paddingLeft: 10,
          textAlign: "justify"
        }}
      >
        {props.movie.synopsis}
      </Text>
      <View style={styles.button}>
        <Button
          buttonStyle={{
            backgroundColor: "#C3073F",
            borderRadius: 10,
            paddingLeft: 40,
            paddingRight: 40,
            paddingBottom: 12
          }}
          title={"View Trailer!"}
        />
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    bottom: 17
  }
});

const mapStateToProps = state => {
  return {
    movie: state.movieLottery
  };
};

export default connect(
  mapStateToProps,
  actions
)(CustomOverlay);
