import * as React from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ChatBot from './pages/ChatBot';
import Feedback from './pages/FeedBack';
import Trending from './pages/Trending';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="ChatBot" component={ChatBot} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

          <Tab.Screen name="Trending" component={Trending} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="trending-up" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
          <Tab.Screen name="Feedback" component={Feedback} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
        </Tab.Navigator>
      </NavigationContainer>
  );
}