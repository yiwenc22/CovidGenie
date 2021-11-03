import * as React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function ChatBotScreen() {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
  );
}

function TrendingScreen() {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
  );
}

function FeedBackScreen() {
  return (
      <View style={{ marginTop: 25 }}>
        <Text style={{ alignItems: 'center' }}>Feedback</Text>
        <TextInput placeholder="Email"/>
        <TextInput placeholder="Problem"/>
        <TextInput placeholder="Description"/>
        <Button title="Submit" />
        
      </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="ChatBot" component={ChatBotScreen} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
        }}
      />

          <Tab.Screen name="Trending" component={TrendingScreen} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="trending-up" color={color} size={size} />
          ),
        }}
      />
          <Tab.Screen name="Feedback" component={FeedBackScreen} options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information" color={color} size={size} />
          ),
        }}
      />
        </Tab.Navigator>
      </NavigationContainer>
  );
}