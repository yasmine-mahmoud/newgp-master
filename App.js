import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Touchable,
  TouchableOpacity,
  Image,
} from "react-native";
import axios, { Axios } from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import NotificationScreen from "./Screens/NotificationScreen";
import HomeScreen from "./Screens/HomeScreen";
import SearchScreen from "./Screens/SearchScreen";
import FoodMakerScreen from "./Screens/FoodMakerScreen";
import FoodRecommenderScreen from "./Screens/FoodRecommenderScreen";
import CreateRecipeScreen from "./Screens/CreateRecipeScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import FavoritesScreen from "./Screens/FavoritesScreen";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function NotificationIcon() {
  const navigation = useNavigation();
  const navigatetonotifications = () => {
    navigation.navigate("Notification");
  };
  return (
    <TouchableOpacity onPress={navigatetonotifications}>
      <MaterialCommunityIcons
        name="bell-circle-outline"
        color={"#2196F3"}
        size={36}
      />
    </TouchableOpacity>
  );
}

function CustomDrawerIcon() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ marginLeft: 10 }}
      onPress={() => navigation.openDrawer()}
    >
      <Image
        source={require("./assets/images/krishna-dev-M05idr9P_5A-unsplash.jpg")}
        style={{
          backgroundColor: "red",
          width: 36,
          height: 36,
          borderRadius: 36,
        }}
      />
    </TouchableOpacity>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={() => {}} />
    </DrawerContentScrollView>
  );
}

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          // backgroundColor: '#c6cbef',
          width: 240,
          flex: 1,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleAlign: "center",
          headerLeft: (props) => <CustomDrawerIcon {...props} />,
          headerRight: (props) => <NotificationIcon {...props} />,
        }}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerTitleAlign: "center",
          headerLeft: (props) => <CustomDrawerIcon {...props} />,
          // headerRight: (props) => <NotificationIcon {...props} />,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTitleAlign: "center",
          headerLeft: (props) => <CustomDrawerIcon {...props} />,
          headerRight: (props) => <NotificationIcon {...props} />,
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          headerTitleAlign: "center",
          headerLeft: (props) => <CustomDrawerIcon {...props} />,
          headerRight: (props) => <NotificationIcon {...props} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="User Home"
          component={MyDrawer}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="FoodMaker"
          component={FoodMakerScreen}
          options={{
            tabBarLabel: "Food Maker",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="fridge" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Add Recipe"
          component={CreateRecipeScreen}
          options={{
            tabBarLabel: "Create Recipe",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="tooltip-plus-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="text-box-search-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Recommender"
          component={FoodRecommenderScreen}
          options={{
            tabBarLabel: "Recommender",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="silverware-variant"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
