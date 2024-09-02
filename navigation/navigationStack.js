import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../screens/registerScreen";
import PrincipalScreen from "../screens/principalScreen";
import RegistroScreen from "../screens/registroScreen";
import LoginScreen from "../screens/loginScreen";
import Navigation from "./navigationTab"; // Importación correcta de Navigation (Tab Navigation)

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RegisterLogin">
        {/* Pantalla de Registro */}
        <Stack.Screen name="Registro" component={RegistroScreen} />

        {/* Pantalla de Login Register */}
        <Stack.Screen name="RegisterLogin" component={RegisterScreen} options={{ title: 'Registro de Login' }} />

        {/* Pantalla de Login */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Iniciar Sesión' }} />

        {/* Tab Navigation */}
        <Stack.Screen name="Tabs" component={Navigation} options={{ headerShown: false }} />

        {/* Pantalla Principal */}
        <Stack.Screen name="Principal" component={PrincipalScreen} options={{ title: 'Pantalla Principal' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
