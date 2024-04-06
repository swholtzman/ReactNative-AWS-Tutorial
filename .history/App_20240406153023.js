import * as React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Landing from "./screens/Landing";
import SignIn from "./screens/SignIn";
import JoinNow from "./screens/JoinNow";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
          initialRouteName="Landing"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Landing" component={Landing} />
          {/* <Stack.Screen name="Main" component={Main} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}