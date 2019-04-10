import React from "react";
import { StyleSheet, ImageBackground } from "react-native";

export default class RatingsScreen extends React.Component {
  static navigationOptions = {
    title: "Rate Scary Movies",
    headerTitleStyle: {
      color: "white"
    },
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#1A1A1D",
      borderBottomWidth: 0
    }
  };

  render() {
    return (
      <ImageBackground
        source={require("../assets/images/smratings_background.png")}
        style={styles.imageContainer}
        imageStyle={styles.primaryBackground}
      />
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1
  },
  primaryBackground: {
    resizeMode: "cover",
    backgroundColor: "rgba(26,26,29,1)"
  }
});
