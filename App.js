import { StatusBar } from "expo-status-bar";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import ChatScreen from "./screens/ChatScreen";
import CommunitiesScreen from "./screens/CommunitiesScreen";
import CallsScreen from "./screens/CallsScreen";
import UpdatesScreen from "./screens/UpdatesScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Communities"
        tabBarOptions={{
          activeTintColor: "#25D366",
          inactiveTintColor: "#777",
          style: {
            backgroundColor: "#075e54",
          },
        }}
      >
        <Tab.Screen
          name="Updates"
          component={UpdatesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="bell" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Calls"
          component={CallsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="phone" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Communities"
          component={CommunitiesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="comments" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Chats"
          component={ChatStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="circle" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="gear" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const ChatStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Chat" component={ChatScreen} />
  </Stack.Navigator>
);