import React from "react";
import { StyleSheet, Text, ImageBackground } from "react-native";
import { WebBrowser } from "expo";

export default class ClubScreen extends React.Component {
  static navigationOptions = {
    title: "Your Scary Movie of the Week",
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
        source={require("../assets/images/smclub_background.png")}
        style={styles.imageContainer}
        imageStyle={styles.primaryBackground}
      />
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/development-mode"
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes"
    );
  };
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
