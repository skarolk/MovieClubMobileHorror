import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import * as actions from "../src/actions";

const CustomButton = props => {
  console.log(
    "%cCustomButtonComponent PROPS:",
    "color: red; font-weight: bold;",
    this.props
  );
  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={() => props.getRandomMovie()}
    >
      <Text style={[styles.buttonText, styles.large]}>
        What should I watch?
      </Text>
    </TouchableOpacity>
  );
};

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
)(CustomButton);
