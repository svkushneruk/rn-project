import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";

import CameraScreen from "./screens/main/CameraScreen";
import PostsScreen from "./screens/main/PostsScreen";
import ProfileScreen from "./screens/main/ProfileScreen";
import AddPostScreen from "./screens/nested/AddPostScreen";

import Ionicons from "@expo/vector-icons/Ionicons";

import { Platform } from "react-native";

import { View } from "react-native";

const AuthStack = createNativeStackNavigator();

const HomeStack = createNativeStackNavigator();

const MainTab = createBottomTabNavigator();

const Home = () => {
  return (
    <MainTab.Navigator
      initialRouteName="PostsScreen"
      sceneContainerStyle={{ backgroundColor: "#fff" }}
      screenOptions={{
        tabBarStyle: {
          height: Platform.OS === "ios" ? 100 : 80,
          borderTopWidth: 1,
          borderTopColor: "#BDBDBD",
          paddingTop: Platform.OS === "ios" ? 20 : 0,
        },
      }}
    >
      <MainTab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="grid-outline" size={24}></Ionicons>
          ),
        }}
      />
      <MainTab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={{
                  width: 70,
                  height: 40,
                  justifyContent: "center",
                  borderRadius: 20,
                  backgroundColor: "#FF6C00",
                  overflow: "hidden",
                }}
              >
                <Ionicons
                  name="add-outline"
                  size={13.5}
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    borderRadius: 20,
                  }}
                ></Ionicons>
              </View>
            );
          },
          headerShown: false,
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="person-outline"
              size={24}
              style={{
                justifyContent: "center",
              }}
            ></Ionicons>
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Register">
        <AuthStack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      </AuthStack.Navigator>
    );
  }

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="AddPostScreen"
        component={AddPostScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};
