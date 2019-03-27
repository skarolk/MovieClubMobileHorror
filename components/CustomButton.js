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
          paddingTop: 12,
          paddingBottom: 15,
          paddingLeft: 60,
          paddingRight: 60
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
    bottom: "6%"
  }
});

export default connect(
  null,
  actions
)(CustomButton);
