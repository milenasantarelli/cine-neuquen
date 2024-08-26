import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import RegisterScreen from "../screens/registerScreen";
import PrincipalScreen from "../screens/principalScreen";

const Tab = createBottomTabNavigator();

function MyTabs (){
    return(
        <Tab.Navigator>
            <Tab.Screen
            name="Log In"
            component={RegisterScreen}
            />
            <Tab.Screen
            name="Principal"
            component={PrincipalScreen}
            />
        </Tab.Navigator>
    );
}

export default function Navigation(){
    return(
    <NavigationContainer>
        <MyTabs/>
    </NavigationContainer>
    );
}