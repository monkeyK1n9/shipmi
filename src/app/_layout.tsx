import React from 'react'
import { Tabs } from 'expo-router/tabs';

import { Platform, SafeAreaView, StatusBar } from "react-native";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Provider as RNPaperProvider } from 'react-native-paper';
import { theme } from '../infrastructure/theme';
import { ThemeProvider } from 'styled-components/native'
import Ionicons from "@expo/vector-icons/Ionicons"

export default function AppLayout() {
    return (
        <>
        <ExpoStatusBar style="light" backgroundColor={theme.colors.ui.primary} translucent={true} />

        {/* {Platform.OS == 'ios' && 
            <SafeAreaView style={{height: StatusBar.currentHeight, backgroundColor: theme.colors.ui.primary}}>
                <StatusBar backgroundColor={theme.colors.ui.primary} translucent={true} barStyle="light-content" />
            </SafeAreaView>
        } */}
        <ThemeProvider theme={theme}>
            <RNPaperProvider>
                <Tabs
                    initialRouteName='(send)/Send'
                    screenOptions={({route}) => ({
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName: any = "mail"
        
                            if (route.name === "(send)/Send") {
                                iconName = focused ? 
                                    "mail" : "mail-outline"
                            } else if (route.name === "(receive)/Receive") {
                                iconName = focused ?
                                    "mail-open" : "mail-open-outline"
                            }
                            
                            return <Ionicons name={iconName} size={size} color={color} />
                        },
                        tabBarActiveTintColor: theme.colors.ui.primary,
                        tabBarInactiveTintColor: theme.colors.ui.quartenary,
                        tabBarHideOnKeyboard: true
                    })}
                >
                    <Tabs.Screen name='index' options={{href: null, headerShown: false}}/>
                    <Tabs.Screen name="(send)/Send" options={{title: "Send", tabBarShowLabel: false}}/>
                    <Tabs.Screen name="(receive)/Receive" options={{title: "Receive", tabBarShowLabel: false}}/>
                </Tabs>
                {/* {Platform.OS == 'android' && 
                    <StatusBar translucent={true} barStyle="light-content" backgroundColor={theme.colors.ui.primary}/>
                } */}
            </RNPaperProvider>
        </ThemeProvider>
        </>
    )
}
