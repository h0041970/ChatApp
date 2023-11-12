import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import Chat from './screens/Chat';

const Stack = createStackNavigator();

function ChatStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

function RootNavigator () {
  return (
    <NavigationContainer>
      <ChatStack />
    </NavigationContainer>
  )

}
export default function App() {
  return <RootNavigator />
}

