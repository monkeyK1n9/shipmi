import React from 'react'
import { Tabs } from 'expo-router/tabs';
import { ThemeProvider } from 'react-native-paper';
import { theme } from '../infrastructure/theme';

export default function AppLayout() {
    return (
        <ThemeProvider theme={theme}>
        <Tabs
        >
            <Tabs.Screen name="Send" options={{title: "Send"}}/>
            <Tabs.Screen name="Receive" options={{title: "Receive"}}/>
        </Tabs>
        </ThemeProvider>
    )
}
