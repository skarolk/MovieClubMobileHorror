import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import ClubScreen from "../screens/ClubScreen";
import MovieLotteryScreen from "../screens/MovieLotteryScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const tintColor = "#C3073F";
const defaultColor = "white";

const ClubStack = createStackNavigator({
  Club: ClubScreen
});

ClubStack.navigationOptions = {
  tabBarLabel: "Weekly Club",
  tabBarOptions: {
    activeTintColor: tintColor,
    inactiveTintColor: defaultColor,
    labelStyle: {
      paddingBottom: 55
    },
    tabStyle: {
      backgroundColor: "#1A1A1D",
      height: 105
    },
    style: {
      borderTopWidth: 0,
      elevation: 0
    }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-film" : "md-film"}
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
    labelStyle: {
      paddingBottom: 55
    },
    tabStyle: {
      backgroundColor: "#1A1A1D",
      height: 105
    },
    style: { borderTopWidth: 0, elevation: 0 }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-play" : "md-play"}
    />
  )
};

const FavoritesStack = createStackNavigator({
  Favorites: FavoritesScreen
});

FavoritesStack.navigationOptions = {
  tabBarLabel: "Favorites",
  tabBarOptions: {
    activeTintColor: tintColor,
    inactiveTintColor: defaultColor,
    labelStyle: {
      paddingBottom: 55
    },
    tabStyle: {
      backgroundColor: "#1A1A1D",
      height: 105
    },
    style: {
      borderTopWidth: 0,
      elevation: 0
    }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-star" : "md-star"}
    />
  )
};

// render navbar on top or bottom
// createMaterialTopTabNavigator
export default createBottomTabNavigator(
  {
    ClubStack,
    MovieLotteryStack,
    FavoritesStack
  },
  { initialRouteName: "MovieLotteryStack" }
);
