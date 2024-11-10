import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../screens/registerScreen";
import PrincipalScreen from "../screens/principalScreen";
import RegistroScreen from "../screens/registroScreen";
import LoginScreen from "../screens/loginScreen";

import AccesoAdminScreen from "../screens/accesoPersonalScreen";
import MovieDetails from "../screens/movieDetails";
import BdScreen from "../screens/BD_Screen";
import ComprarEntradaScreen from "../screens/comprarEntrada";
import FormularioCompraScreen from "../screens/formularioCompra";
import MisEntradasScreen from "../screens/misEntradas";
import PerfilScreen from "../screens/perfilScreen";
import PeliculasScreen from "../screens/peliculasScreen";

const Stack = createNativeStackNavigator();




const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RegisterLogin">
    
      
        <Stack.Screen name="Registro" component={RegistroScreen} />

        <Stack.Screen name="RegisterLogin" component={RegisterScreen} options={{ headerShown: false }} />
      
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Iniciar Sesión' }} />
      
        <Stack.Screen name="Principal" component={PrincipalScreen} options={{ title: 'Pantalla Principal' }} />

        <Stack.Screen name="Administrador" component={AccesoAdminScreen} options={{ headerShown: false }} />

        <Stack.Screen name="DetallesPelicula" component={MovieDetails} options={{ headerShown: false}}/>

        <Stack.Screen name="Base de Datos" component={BdScreen} options={{ headerShown: false }} />

        <Stack.Screen name="Comprar entrada" component={ComprarEntradaScreen} options={{ headerShown: false }} />

        <Stack.Screen name="FormCompra" component={FormularioCompraScreen} options={{ headerShown: false }} />

        <Stack.Screen name="Mis entradas" component={MisEntradasScreen} options={{ headerShown: false }} />
        
        <Stack.Screen name="Perfil" component={PerfilScreen} options={{ title: 'Perfil' }} />

        <Stack.Screen name="Peliculas" component={PeliculasScreen} options={{ title: 'Peliculas' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;