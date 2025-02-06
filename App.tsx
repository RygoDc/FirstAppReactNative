import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./app/presentation/views/auth/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistroScreen from "./app/presentation/views/auth/Registro";
import { AdminTabNavigator } from "./app/presentation/navigation/AdminTabNavigator";

export type RootStackParamList = {
  LoginScreen: undefined,
  RegistroScreen: undefined,
  ProfileInfoScreen: undefined,
  RolesScreen: undefined,
  AdminTabNavigator: undefined
}
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return(
    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
        <Stack.Screen name={"RegistroScreen"} component={RegistroScreen} options={{headerShown: true}} />        
        <Stack.Screen name= {"AdminTabNavigator"} component={AdminTabNavigator} options={{title: "Navegacion de administrador"}}/>
        
      </Stack.Navigator>
      
    </NavigationContainer>
  );  
}