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
        buttonStyle={{
          backgroundColor: "#C3073F",
          borderRadius: 10,
          fontWeight: "bold",
          paddingBottom: 12,
          paddingLeft: 10,
          paddingRight: 10
        }}
        onPress={() => props.getRandomMovie()}
        raised
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    bottom: "5%"
  }
});

export default connect(
  null,
  actions
)(CustomButton);
