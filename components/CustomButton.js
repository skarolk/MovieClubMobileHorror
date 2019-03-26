import React from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import * as actions from "../src/actions";

import { Button } from "react-native-elements";

const CustomButton = props => {
  return (
    <View style={styles.button}>
      <Button
        title={props.text}
        onPress={() => props.getRandomMovie()}
        raised
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    marginBottom: 30
  }
});

export default connect(
  null,
  actions
)(CustomButton);
