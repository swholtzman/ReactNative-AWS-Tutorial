import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FormProvider, useForm } from 'react-hook-form';

import Landing from "./screens/Landing";
import SignIn from "./screens/SignIn";
import JoinNow from "./screens/JoinNow";
import Main from "./screens/Main";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FormProvider {...methods}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Landing"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="JoinNow" component={JoinNow} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </FormProvider>
  );
}
