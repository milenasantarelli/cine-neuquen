import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../screens/registerScreen";
import PrincipalScreen from "../screens/principalScreen";
import RegistroScreen from "../screens/registroScreen";
import LoginScreen from "../screens/loginScreen";
import TabNavigation from "./navigationTab";
import AccesoAdminScreen from "../screens/accesoPersonalScreen";
import MovieDetails from "../screens/movieDetails";

const Stack = createNativeStackNavigator();




const NavigationStack = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="RegisterLogin"> */}
      <Stack.Navigator initialRouteName="Principal">
      
        <Stack.Screen name="Registro" component={RegistroScreen} />

        <Stack.Screen name="RegisterLogin" component={RegisterScreen} options={{ title: 'Registro de Login' }} />

        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Iniciar Sesión' }} />
        
        <Stack.Screen name="Tabs" component={TabNavigation} options={{ headerShown: false }} />

        <Stack.Screen name="Principal" component={PrincipalScreen} options={{ title: 'Pantalla Principal' }} />

        <Stack.Screen name="Administrador" component={AccesoAdminScreen} options={{ title: 'Acceso Administrador' }} />

        <Stack.Screen name="DetallesPelicula" component={MovieDetails} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;