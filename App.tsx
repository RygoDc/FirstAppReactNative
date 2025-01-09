import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./app/presentation/views/auth/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return(
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
      
    </NavigationContainer>
  )  
}