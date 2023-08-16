import { View, Text } from "react-native";
import React from "react";
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import Wishlist from "../screens/Wishlist";
import { COLORS } from "../constants/index";
import Ionicons from "react-native-vector-icons/Ionicons";

import Feather from "react-native-vector-icons/Feather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../screens/Search";
const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 55,
  },
};

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home2"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                color={focused ? COLORS.primary : COLORS.gray2}
                size={24}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "search-sharp" : "search"}
                color={focused ? COLORS.primary : COLORS.gray2}
                size={24}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name={focused ? "shopping-cart" : "shopping-bag"}
                color={focused ? COLORS.primary : COLORS.gray2}
                size={24}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "heart" : "heart-outline"}
                color={focused ? COLORS.primary : COLORS.gray2}
                size={24}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                color={focused ? COLORS.primary : COLORS.gray2}
                size={24}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
