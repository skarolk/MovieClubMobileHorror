import React from "react";
import { ExpoConfigView } from "@expo/samples";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "app.json",
    headerTitleStyle: {
      color: "white"
    },
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#1A1A1D",
      elevation: null
    }
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
