import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SendScreen } from '../../feature/send/screen/SendScreen';
import { ReceiveScreen } from '../../feature/receive/screen/ReceiveScreen';

const Tab = createMaterialTopTabNavigator()

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                style={{marginTop: StatusBar.currentHeight}}
            >
                <Tab.Screen name="Send" component={SendScreen} options={{title: "Send"}}/>
                <Tab.Screen name="Receive" component={ReceiveScreen} options={{title: "Receive"}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}