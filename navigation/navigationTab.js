import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import PrincipalScreen from "../screens/principalScreen";
import PerfilScreen from "../screens/perfilScreen"; // Importación de PerfilScreen

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Perfil" component={PerfilScreen} />
      <Tab.Screen name="Principal" component={PrincipalScreen} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <MyTabs />
  );
}
