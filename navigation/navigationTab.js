import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import PrincipalScreen from "../screens/principalScreen";
import PerfilScreen from "../screens/perfilScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size }) => {
          let iconName;

          if (route.name === 'Perfil') {
            iconName = require('../assets/person.png');
          } else if (route.name === 'Principal') {
            iconName = require('../assets/home.png');  
          }

         
          return <Image source={iconName} style={{ width: 30, height: 30 }} />;
        },
        tabBarActiveTintColor: 'tomato', 
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
      })}
    >
       <Tab.Screen name="Principal" component={PrincipalScreen}/>
      <Tab.Screen name="Perfil" component={PerfilScreen} />
     
    </Tab.Navigator>
  );
}

export default function TabNavigation() {
  return (
  
      <MyTabs />
   
  );
}