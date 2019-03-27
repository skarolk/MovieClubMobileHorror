import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import MovieLotteryScreen from "../screens/MovieLotteryScreen";
import SettingsScreen from "../screens/SettingsScreen";

const tintColor = "#C3073F";
const defaultColor = "white";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Weekly Club",
  tabBarOptions: {
    activeTintColor: tintColor,
    inactiveTintColor: defaultColor,
    tabStyle: {
      backgroundColor: "#1A1A1D",
      height: 56,
      elevation: null
    },
    tabBarStyle: "light-content"
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const MovieLotteryStack = createStackNavigator({
  MovieLottery: MovieLotteryScreen
});

MovieLotteryStack.navigationOptions = {
  tabBarLabel: "Movie Lottery",
  tabBarOptions: {
    activeTintColor: tintColor,
    inactiveTintColor: defaultColor,
    tabStyle: {
      backgroundColor: "#1A1A1D",
      height: 56,
      elevation: null
    }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Rate Movies",
  tabBarOptions: {
    activeTintColor: tintColor,
    inactiveTintColor: defaultColor,
    tabStyle: {
      backgroundColor: "#1A1A1D",
      height: 56,
      elevation: null
    }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

// render navbar on top or bottom
// createMaterialTopTabNavigator
export default createBottomTabNavigator({
  HomeStack,
  MovieLotteryStack,
  SettingsStack
});
