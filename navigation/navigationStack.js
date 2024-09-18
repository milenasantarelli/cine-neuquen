import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../screens/registerScreen";
import PrincipalScreen from "../screens/principalScreen";
import RegistroScreen from "../screens/registroScreen";
import LoginScreen from "../screens/loginScreen";
import AccesoPersonalScreen from "../screens/accesoPersonalScreen";
import BDScreen from "../screens/BD_Screen";
import FormularioAPIScreen from "../screens/formularioAPIScreen";
import ComprarEntradaScreen from "../screens/comprarEntrada";
import MisEntradasScreen from "../screens/misEntradas";
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

        {/* Pantalla BD para el Personal */}
        <Stack.Screen name="BaseDeDatos" component={BDScreen} options={{ headerShown: false }}/>

        {/* Pantalla de Log in del Personal */}
        <Stack.Screen name="AccesoPersonal" component={AccesoPersonalScreen} options={{ headerShown: false }}/>

        {/* Pantalla con Formulario para consulta a la API */}
        <Stack.Screen name="FormularioAPI" component={FormularioAPIScreen} options={{ headerShown: false }}/>

        {/* Pantalla de Compra de entradas (fechas, horario, cant tickets, etc) */}
        <Stack.Screen name="CompraEntradas" component={ComprarEntradaScreen} options={{ headerShown: false }}/>

        {/* Pantalla Entradas del Usuario (historial) */}
        <Stack.Screen name="MisEntradas" component={MisEntradasScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;