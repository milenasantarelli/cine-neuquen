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
import BdScreen from "../screens/BD_Screen";
import ComprarEntradaScreen from "../screens/comprarEntrada";
import FormularioCompraScreen from "../screens/formularioCompra";
import MisEntradasScreen from "../screens/misEntradas";
import PerfilScreen from "../screens/perfilScreen";

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

        <Stack.Screen name="Base de Datos" component={BdScreen} options={{ title: 'Base de Datos' }} />

        <Stack.Screen name="Comprar entrada" component={ComprarEntradaScreen} options={{ title: 'Comprar entrada' }} />

        <Stack.Screen name="FormCompra" component={FormularioCompraScreen} options={{ title: 'Formulario Compra' }} />

        <Stack.Screen name="Mis entradas" component={MisEntradasScreen} options={{ title: 'Mis entradas' }} />
        
        <Stack.Screen name="Perfil" component={PerfilScreen} options={{ title: 'Perfil' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;