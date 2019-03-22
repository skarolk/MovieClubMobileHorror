import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import MovieLotteryScreen from "../screens/MovieLotteryScreen";
import SettingsScreen from "../screens/SettingsScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Weekly Club",
  tabBarOptions: {
    labelStyle: {
      marginTop: 0
    }
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
    labelStyle: {
      marginTop: 0
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
    labelStyle: {
      marginTop: 0
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
export default createBottomTabNavigator({
  HomeStack,
  MovieLotteryStack,
  SettingsStack
});
