import React from 'react'
import { Tabs } from 'expo-router/tabs';

import { Platform, SafeAreaView, StatusBar } from "react-native";
import { Provider as RNPaperProvider } from 'react-native-paper';
import { theme } from '../infrastructure/theme';
import { ThemeProvider } from 'styled-components/native'

export default function AppLayout() {
    return (
        <>
        {Platform.OS == 'ios' && 
            <SafeAreaView style={{height: StatusBar.currentHeight, backgroundColor: theme.colors.ui.primary}}>
                <StatusBar backgroundColor={theme.colors.ui.primary} translucent={true} barStyle="light-content" />
            </SafeAreaView>
        }
        <ThemeProvider theme={theme}>
            <RNPaperProvider>
                <Tabs
                >
                    <Tabs.Screen name="Send" options={{title: "Send"}}/>
                    <Tabs.Screen name="Receive" options={{title: "Receive"}}/>
                </Tabs>
                {Platform.OS == 'android' && 
                    <StatusBar translucent={true} barStyle="light-content" backgroundColor={theme.colors.ui.primary}/>
                }
            </RNPaperProvider>
        </ThemeProvider>
        </>
    )
}
